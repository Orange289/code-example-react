"use client"
import { Container, Row, Col } from "react-grid-system"
import Person from "../Person/Person"
import PersonImage from "@/components/Person/Image"
import Link from "next/link"
import styles from "./People.module.scss"
import type { People as PeopleType } from "@/types"
import {
  getPersonsOut,
  getPersonsNew,
  getPersonsCelebrations,
  getPersonsClosestCelebrations,
} from "@/services/Persons"

export default function People({ items }: { items: PeopleType[] }) {
  // TODO: make it in one for instead of three
  const personsOut = getPersonsOut(items)
  const personsNew = getPersonsNew(items)
  const personsCelebrations = getPersonsCelebrations(items)
  const personClosestCelebrations = getPersonsClosestCelebrations(items)

  const persons: {
    new: PeopleType[]
    celebrations: PeopleType[]
    closestCelebrations: PeopleType[]
    out: PeopleType[]
  } = {
    new: personsNew,
    celebrations: personsCelebrations,
    closestCelebrations: personClosestCelebrations,
    out: personsOut,
  }
  const COUNT_PERSONS_FOR_OUTPUT = 4
  const newBiePersons = persons.new
    .sort(() => 0.5 - Math.random())
    .slice(0, COUNT_PERSONS_FOR_OUTPUT)

  let celebrationsPersons
  const celebrations = persons.celebrations.sort(() => 0.5 - Math.random())
  const closestCelebrations = persons.closestCelebrations.sort(
    () => 0.5 - Math.random()
  )

  if (persons.celebrations.length >= COUNT_PERSONS_FOR_OUTPUT) {
    celebrationsPersons = celebrations.slice(0, COUNT_PERSONS_FOR_OUTPUT)
  } else if (persons.closestCelebrations.length > 0) {
    if (persons.celebrations.length > 0) {
      celebrationsPersons = [
        ...celebrations.slice(0, COUNT_PERSONS_FOR_OUTPUT),
        ...closestCelebrations.slice(
          0,
          COUNT_PERSONS_FOR_OUTPUT - persons.celebrations.length
        ),
      ]
    } else {
      celebrationsPersons = closestCelebrations.slice(
        0,
        COUNT_PERSONS_FOR_OUTPUT
      )
    }
  } else {
    celebrationsPersons = []
  }

  return (
    <section className={styles.people}>
      <Container>
        <Row>
          {persons.new.length > 0 && (
            <>
              <Col xs={3} className={styles.people__col}>
                <div className={styles.people__head}>
                  <h3>New People</h3>
                  <Link className={styles.people__full} href="/new_people/">
                    View All
                  </Link>
                </div>
                <ul>
                  {newBiePersons.map((item, index) => {
                    return <Person item={item} key={item.id} />
                  })}
                </ul>
              </Col>
              <Col xs={1}></Col>
            </>
          )}

          {persons.celebrations.length > 0 && (
            <>
              <Col xs={4} className={styles.people__col}>
                <div className={styles.people__head}>
                  <h3>Celebrations</h3>
                  <Link className={styles.people__full} href="/celebrations/">
                    View all
                  </Link>
                </div>
                {celebrationsPersons.length > 0 ? (
                  <ul>
                    {celebrationsPersons.map((item, index) => {
                      return (
                        <Person
                          hideBirthdayIcon={true}
                          item={item}
                          key={item.id}
                        />
                      )
                    })}
                  </ul>
                ) : (
                  <p>There is no celebrations today</p>
                )}
              </Col>
              <Col xs={1}></Col>
            </>
          )}

          {persons.out.length > 0 && (
            <Col
              xs={3}
              className={`${styles.people__col} ${styles.people__col_out}`}
            >
              <div className={styles.people__head}>
                <h3>Who’s Out</h3>
                <Link className={styles.people__full} href="/whosout/">
                  View all
                </Link>
              </div>
              <ul className={styles.people__out}>
                {persons.out.slice(0, 24).map((item, index) => {
                  return (
                    <li key={item.id} className={styles.people__outitem}>
                      <PersonImage person={item} />
                    </li>
                  )
                })}
                <li className={styles.people__next}>
                  <Link href="/whosout/"></Link>
                </li>
              </ul>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  )
}
