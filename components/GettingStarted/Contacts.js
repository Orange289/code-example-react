"use client"

import { Container, Row, Col } from "react-grid-system"
// import Person from "../Person/Person.tsx"
import { useState } from "react"
import styles from "./Contacts.module.scss"
import PersonImage from "@/components/Person/Image"

export default function Contacts({ contacts }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const items = [
    "Any Questions or Guidance",
    "Learning & Development Questions",
    // "Technical Issues or IT Support",
    // "Offices Help",
    // "Travel-Related Questions",
  ]

  return (
    <>
      <div className="anchor" id="contacts"></div>
      <section className={styles.contacts}>
        <Container>
          <h2>Contacts for help</h2>
          {/* <Row> */}
          {/* <Col xs={5}>
              <ul className={styles.contacts__list}>
                {items.map((item, index) => {
                  return (
                    <li
                      className={index === activeIndex ? styles.active : ""}
                      key={index}
                      onClick={() => setActiveIndex(index)}
                    >
                      {item}
                    </li>
                  )
                })}
              </ul>
            </Col>
            <Col xs={1}></Col> */}
          {/* <Col xs={6}> */}

          <ul className={styles.contacts__items}>
            {contacts.map((item, index) =>
              item.people.map((person, pIndex) => {
                return (
                  <li className={styles.contacts__item} key={pIndex}>
                    <PersonImage person={person} />
                    <div className={styles.contacts__text}>
                      <strong>{`${person.firstName} ${person.lastName}`}</strong>
                      <div className={styles.contacts__meta}>
                        {person.jobTitle}
                      </div>
                      <div className={styles.contacts__meta}>
                        {person.department && `in ${person.department}`}
                        {person.division &&
                          person.department != person.division &&
                          `, ${person.division}`}
                      </div>
                      <ul className={styles.contacts__links}>
                        {person.workEmail && (
                          <li>
                            <a href={`mailto:${person.workEmail}`}>
                              {person.workEmail}
                            </a>
                          </li>
                        )}
                        {person.workEmail && (
                          <li>
                            <a
                              href={`https://${
                                process.env.NEXT_PUBLIC_SLACK_DOMAIN
                              }.slack.com/team/${
                                person.workEmail.split("@")[0]
                              }`}
                              target="_blank"
                            >{`@${person.workEmail.split("@")[0]}`}</a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </li>
                )
              })
            )}
          </ul>
        </Container>
      </section>
    </>
  )
}
