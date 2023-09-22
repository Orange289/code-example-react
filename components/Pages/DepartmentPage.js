// "use client"

import Intro from "@/components/Department/Intro.tsx"
import PeopleDivision from "@/components/Department/PeopleDivision"
// import Divisions from "@/components/Departments/Divisions"

export default function DepartmentPage({
  parent,
  department,
  managers,
  people,
  divisions,
  backup,
}) {
  // let employees = content.employees
  // if (content.divisions) {
  //   Object.values(content.divisions).forEach((division) => {
  //     Object.values(division.employees).forEach((divisionEmployee) => {
  //       employees[divisionEmployee.id] = divisionEmployee
  //     })
  //   })
  // }
  let isDivision = false

  // from parent and department because no params
  if (
    parent &&
    parent.meta &&
    department.meta.html_url != parent.meta.html_url &&
    parent.meta.html_url.split("/").slice(-2, -1)[0] != "departments"
  ) {
    isDivision = true
  } else {
    isDivision = false
  }

  return (
    <>
      <Intro
        item={department}
        parent={parent}
        isDivision={isDivision}
        backup={backup}
        divisions={divisions}
      />
      {/* {department && (
        <Divisions item={department} items={divisions}></Divisions>
      )} */}
      {/* {isDivision ? ( */}
      <PeopleDivision
        managers={managers}
        department={department}
        items={people}
        parent={parent}
        // divisions={divisions}
      />
      {/* ) : (
        <People
          managers={managers}
          department={department}
          items={people}
          parent={parent}
          // divisions={divisions}
        />
      )} */}

      {/* withManager={!!content.divisions} */}
    </>
  )
}
