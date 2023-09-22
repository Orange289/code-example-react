import { store } from "@/store"
import { notFound } from "next/navigation"
import DepartmentPage from "@/components/Pages/DepartmentPage"
import {
  getDepartmentsList,
  getDepartmentBySlug,
  getDepartmentById,
} from "@/store/api/DepartmentsApi"
import { setDepartmentPage } from "@/store/slice/DepartmentsSlice"
import { dispatchBAmboo } from "@/services/BambooHRStore"
import makeMetaData from "@/utils/makeMetaData"
import type { Department, People, ApiEmployeeDirectoryItem } from "@/types"
import { findBackup } from "@/services/Persons"

export const revalidate = 60

async function getDepartmentPage(params) {
  const department = params.department.slice(-1)

  // let departmentPage = store.getState().DepartmentsSlice.DepartmentPage #FIXME: what is it with cache?
  // if (!departmentPage) { #FIXME: what is it with cache?
  let departmentPageParentResult: any = false
  if (params.department.length > 1) {
    departmentPageParentResult = await store.dispatch(
      // { isLoading, isFetching, data, error }
      getDepartmentBySlug.initiate({
        slug: params.department.slice(-2, -1),
        type: "departments.DepartmentPage",
      })
    )
  }

  const departmentPageResult = await store.dispatch(
    // { isLoading, isFetching, data, error }
    getDepartmentBySlug.initiate({
      slug: department,
      type: "departments.DepartmentPage",
      child_of:
        departmentPageParentResult &&
        departmentPageParentResult.data &&
        departmentPageParentResult.data.items &&
        departmentPageParentResult.data.items[0]
          ? departmentPageParentResult.data.items[0].id
          : null,
    })
  )
  if (
    departmentPageResult.data &&
    departmentPageResult.data.items &&
    departmentPageResult.data.items[0]
  ) {
    store.dispatch(setDepartmentPage(departmentPageResult.data.items[0]))
  }
  //   departmentPage = store.getState().DepartmentsSlice.DepartmentPage
  // }
  return store.getState().DepartmentsSlice.DepartmentPage
}

function isDepartmentPage(params) {
  return params.department.length == 1
}

function getPersonInArray(personsArray, person) {
  if (!person.bambooId && person.id) return person
  return personsArray.find((item) => {
    return item.id == person.bambooId ? person.bambooId : person.id
  })
}
function getPeople(personsArray, person, deps_divisions_filter) {
  const person_in_array = getPersonInArray(personsArray, person)

  if (deps_divisions_filter && deps_divisions_filter.length === 0) {
    return person_in_array.employees
  }

  return person_in_array.employees.filter((item) => {
    return (
      deps_divisions_filter.includes(item.division) ||
      deps_divisions_filter.includes(item.department)
    )
  })
}

export async function generateMetadata({ params }) {
  const departmentPage = await getDepartmentPage(params)

  if (departmentPage && "meta" in departmentPage) {
    return makeMetaData(
      departmentPage.meta.seo_title ||
        departmentPage.long_title ||
        departmentPage.title,
      departmentPage.meta.seo_title ||
        departmentPage.long_title ||
        departmentPage.title
    )
  }
  return {}
}

export default async function DepartmentsPage({ params }) {
  const departmentPage = await getDepartmentPage(params)

  if (!departmentPage) {
    notFound()
  }

  // for get parent
  let departmentPageByID: any = false
  if ("id" in departmentPage) {
    const departmentPageByIDRes = await store.dispatch(
      getDepartmentById.initiate(departmentPage.id)
    )
    departmentPageByID = departmentPageByIDRes.data
  }

  // for peoples
  let people: People[] = []
  let managers: People[] = []
  let backupPerson: People | boolean | undefined = false
  let parent: Department | undefined
  let divisionsItems: Department[] | [] | undefined = []
  // let peoplesWithManagers = peoples
  if (
    departmentPageByID
    // &&
    // ((departmentPageByID.bamboohr_department &&
    //   departmentPageByID.bamboohr_department?.length > 0) ||
    //   (departmentPageByID.bamboohr_division &&
    //     departmentPageByID.bamboohr_division?.length > 0))
  ) {
    await dispatchBAmboo()
    const personsArray = await store.getState().bambooHRSlice.personsArray

    if (isDepartmentPage(params)) {
      let departmentsListResult = await store.dispatch(
        // { isLoading, isFetching, data, error }
        getDepartmentsList.initiate({
          child_of: departmentPageByID.id,
          limit: 100,
        })
      )

      divisionsItems = departmentsListResult.data?.items

      managers = getPeople(
        personsArray,
        departmentPageByID.bamboohr_employee[0],
        departmentPageByID.bamboohr_department.concat(
          departmentPageByID.bamboohr_division
        )
      )
      parent = departmentPageByID
    } else {
      let parentRes: any = false
      if (departmentPageByID.meta.parent) {
        parentRes = await store.dispatch(
          getDepartmentById.initiate(departmentPageByID.meta.parent?.id)
        )
      }

      if (parentRes.data) {
        parent = parentRes.data
      }
      managers = departmentPageByID.department_managers_department_page
    }

    if (managers) {
      managers.forEach((manager) => {
        people = people.concat(
          getPeople(
            personsArray,
            manager,
            departmentPageByID.bamboohr_department.concat(
              departmentPageByID.bamboohr_division
            )
          )
        )
      })
    }

    if (parent) {
      const bamboohr_employees: ApiEmployeeDirectoryItem[] | undefined =
        parent.bamboohr_employee
      const personDisplayName: string =
        bamboohr_employees && bamboohr_employees.length > 0
          ? bamboohr_employees[0].displayName
          : ""
      const person: People | undefined = personsArray.find(
        (el: People) => el.displayName === personDisplayName
      )

      if (person) {
        backupPerson = findBackup(person, personsArray)
      }
    }
  }

  return (
    <>
      <DepartmentPage
        parent={parent}
        managers={managers}
        department={departmentPageByID}
        people={people}
        divisions={divisionsItems}
        backup={backupPerson}
      />
    </>
  )
}
