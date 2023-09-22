import styles from "./Department.module.scss"
import Person from "./Person"
import Divisions from "./Divisions"
import { getDivisions, getItemDivisionsEmployee } from "./utils"
import Link from "next/link"
import { useState } from "react"

export default function Department({ children, item = "", isBig = false }) {
  const [divisionsVisible, setDivisionsVisible] = useState(false)
  const onlyName =
    item.bamboohr_department &&
    item.bamboohr_department.length == 0 &&
    item.bamboohr_division &&
    item.bamboohr_division.length == 0 &&
    item.bamboohr_employee &&
    item.bamboohr_employee.length == 0 &&
    item.department_managers_department_page &&
    item.department_managers_department_page.length == 0
  const dep_title = item.long_title ? item.long_title : item.title
  // const divisions = getItemDivisionsEmployee(item)
  const divisions = Object.values(item.children).filter(
    (division) => getItemDivisionsEmployee(division).length > 0
  )
  const person =
    !onlyName && item.bamboohr_employee ? item.bamboohr_employee[0] : false
  const itemName = item.long_title ? item.long_title : item.title
  if (!item && !item.meta) {
    return <></>
  }
  // let isBigPerson = isBig
  // if (divisions.length == 0 && person && !isBigPerson) {
  //   isBigPerson = true
  // }

  return (
    <div
      className={`${styles.department} ${
        divisionsVisible ? styles.department_active : ""
      } ${isBig ? styles.department_person : ""} ${
        onlyName ? styles.department_onlyName : ""
      }`}
      onMouseLeave={() => setTimeout(() => setDivisionsVisible(false), 200)}
    >
      {!isBig && (divisions.length > 0 || item.need_page) ? (
        <div
          className={`${styles.department__control}`}
          onMouseEnter={() => setTimeout(() => setDivisionsVisible(true), 200)}
        >
          <div className={styles.department__wrap}>
            <Link
              className={styles.department__top}
              href={`/departments/${item.meta.slug}/`}
            >
              {divisions.length > 0 && (
                <div
                  className={styles.department__icon}
                  role="presentation"
                ></div>
              )}
              <span>{dep_title}</span>
            </Link>
            {person ? (
              <div className={isBig ? "" : styles.department__personWrap}>
                <a href={`/departments/${item.meta.slug}/`}>
                  <Person
                    className={styles.department__person}
                    item={person}
                  ></Person>
                </a>
              </div>
            ) : onlyName ? (
              itemName
            ) : children ? (
              children
            ) : null}
          </div>
        </div>
      ) : (
        <div className={styles.department__wrap}>
          {!isBig && !onlyName && (
            <div className={styles.department__top}>
              <span>{dep_title}</span>
            </div>
          )}
          {person ? (
            <div className={isBig ? "" : styles.department__personWrap}>
              <Person
                item={person}
                isBig={isBig}
                className={styles.department__person}
              ></Person>
            </div>
          ) : onlyName ? (
            itemName
          ) : children ? (
            children
          ) : null}
        </div>
      )}
      {!isBig && divisionsVisible && divisions.length > 0 && (
        <Divisions
          department={item}
          items={divisions}
          className={styles.department__divisions}
        ></Divisions>
      )}
    </div>
  )
}
