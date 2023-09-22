// "use client"

// import { Row } from "react-grid-system"
import styles from "./Divisions.module.scss"
import { Department } from "@/types"
import Division from "./Division"
import { store } from "@/store"
import { getDepartmentsList } from "@/store/api/DepartmentsApi"
import Loader from "@/components/Loader/Loader"
import DivisionsWrap from "./DivisionsWrap"

export const revalidate = 60

export default async function Divisions({
  item,
  className,
  withParent = false,
}: {
  item: Department
  className?: string
  withParent?: Boolean
}) {
  if (!item) {
    return <></>
  }

  let departmentsListResult: any = { isLoading: true }

  if (item) {
    departmentsListResult = await store.dispatch(
      // { isLoading, isFetching, data, error }
      getDepartmentsList.initiate({
        child_of: item.id,
        limit: 100,
      })
    )
  }

  return (
    <>
      {departmentsListResult.isLoading || departmentsListResult.isFetching ? (
        <Loader width={50} height={50} />
      ) : departmentsListResult.error ? (
        console.error(departmentsListResult.error)
      ) : departmentsListResult.data.items.length > 0 || withParent ? (
        <DivisionsWrap
          key={item.meta.html_url}
          className={`${styles.divisions} ${className}`}
        >
          {withParent && <Division item={item}></Division>}

          {departmentsListResult.data.items.map((division: Department) => (
            <Division key={division.meta.html_url} item={division}></Division>
          ))}
        </DivisionsWrap>
      ) : null}
    </>
  )
}
