"use client"
import { Container, Row, Col } from "react-grid-system"
import Person from "../Person/Person.tsx"
import TeamAccordion from "./TeamAccordion.js"
import styles from "./PeopleDivision.module.scss"
import { useState } from "react"
// import { useParams } from "next/navigation"
// import { HEAD_TITLES } from "@/store/slice/BambooHRSlice"

export default function PeopleDivision({
  department,
  items,
  parent,
  managers,
}) {
  // const params = useParams()

  if (items.length == 0 && !managers) {
    return <></>
  }

  // const [openAccordion]

  // let directors = params.department == "board-of-directors"
  // const division = params.division // TODO: where is no division now
  // let persons = []

  return (
    <section className={styles.people}>
      <Container>
        {managers.map((manager) => {
          const employees = items.filter(
            (item) => item.supervisor == manager.displayName
          )

          return (
            <div
              key={`manager-${manager.bambooId || manager.id}`}
              className={styles.people__item}
            >
              <div className={styles.people__top}>
                <h3>{manager.jobTitle}</h3>
                <ul className={styles.people__managerwrap}>
                  <Person
                    className={styles.people__manager}
                    item={manager}
                    manager
                    horizontal
                  />
                </ul>
              </div>
              {employees.length > 0 && (
                <div className={styles.people__reports}>
                  <TeamAccordion
                    isSingle={managers.length < 2 ? true : false}
                    // key={department}
                    persons={employees}
                    search={manager.displayName}
                  ></TeamAccordion>
                </div>
              )}
            </div>
          )
        })}
      </Container>
    </section>
  )
}
