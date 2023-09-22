"use client"
import { Row, Col } from "react-grid-system"
import { useParams } from "next/navigation"
import Person from "../Person/Person.tsx"
import styles from "./TeamAccordion.module.scss"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function TeamAccordion({
  persons,
  linkToAll,
  teamName = "",
  search = "",
  isSingle = false,
}) {
  const [openList, setOpenList] = useState(false)

  useEffect(() => {
    if (isSingle) {
      setOpenList(true)
    }
  }, [])

  const params = useParams()
  if (persons.length == 0) {
    return <></>
  }

  return (
    <div className={styles.team}>
      <h3 className={styles.team__title} onClick={() => setOpenList(!openList)}>
        <img
          loading="lazy"
          src="/images/arrow-down.svg"
          alt="arrow"
          className={openList ? styles.turned : ""}
        />
        Direct reports
      </h3>
      {openList && (
        <ul className={styles.team__list}>
          {persons.map((item, index) => {
            return (
              // <li key={index} className={styles.people__person}>
              <Person
                key={item.bambooId}
                className={styles.team__person}
                item={item}
              />
              // </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
