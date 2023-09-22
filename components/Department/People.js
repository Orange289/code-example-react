"use client"
import { Container, Row, Col } from "react-grid-system"
import Person from "../Person/Person.tsx"
import Team from "./Team"
import styles from "./People.module.scss"
// import { useParams } from "next/navigation"
// import { HEAD_TITLES } from "@/store/slice/BambooHRSlice"

export default function People({ department, items, parent, managers }) {
  // const params = useParams()

  if (items.length == 0 && managers.length == 0) {
    return null
  }

  // let directors = params.department == "board-of-directors"
  // const division = params.division // TODO: where is no division now
  // let persons = []

  return (
    <section className={styles.people}>
      <Container>
        {managers.map((manager) => {
          return (
            <Row key={manager.bambooId} className={styles.people__row}>
              <Col xs={3}>
                <h3>{manager.jobTitle}</h3>
                <ul className={styles.people__managerwrap}>
                  <Person item={manager} manager />
                </ul>
              </Col>
              <Col xs={9}>
                <Team
                  key={department}
                  persons={items.filter(
                    (item) => item.supervisor == manager.displayName
                  )}
                  search={manager.displayName}
                  // search={
                  //   department.long_title ? department.long_title : department.title
                  // }
                ></Team>
              </Col>
            </Row>
          )
        })}
      </Container>
    </section>
  )
}
