"use client"

import { Container, Row, Col } from "react-grid-system"
import CheckDropdown from "./CheckDropdown"
import CheckItems from "./CheckItems"
import styles from "./Checklist.module.scss"

export default function Checklist() {
  const items = [
    {
      name: "First day",
      desc: "You are provided with appropriate IT support and equipment and introduced to our onboarding program. You also receive welcome emails, visit welcome meetings and sign some documents.",
      items: [
        "Sign Employment/Service Agreement",
        "Complete Physical Assets Inventorying Survey",
        "Sign Data Consent Form",
        "Sign IP Right Annex Form",
        "Sign Non-Disclosure Agreement",
        "Sign No Trading Account Declaration<br>(for Sales Dept. only)",
        "Do the Get To Know Company Policies task",
      ],
      localStorageName: "first-day-dropdown",
      linkUrl: "https://exante.bamboohr.com/",
      linkName: "Log in to BambooHR",
      isBig: true,
    },
    {
      name: "Week 1-2",
      desc: "You have on-job training and attend follow-up meetings<br>and greet sessions.",
      items: [
        "Complete the 1st Week Survey",
        "Complete 5 Day Onboarding Plan",
        "Complete On-Job Training Plan",
      ],
      localStorageName: "first-weeks",
      linkUrl: "https://exante.eu.crossknowledge.com/",
      linkName: "Log in to CrossKnowledge",
    },
    {
      name: "Month 1-3",
      desc: "You set probation period goals, attend follow-up meetings, get&nbsp;insurance enrollment, and complete some surveys.",
      items: [
        "Complete 1st Month Survey",
        "Complete Probation Period End Survey",
      ],
      localStorageName: "first-months",
    },
  ]

  return (
    <>
      <div className="anchor" id="checklist"></div>
      <section className={styles.checklist}>
        <Container>
          <h2>Onboarding Checklist</h2>
          <Row className={styles.checklist__items}>
            {items.map(
              (item, index) =>
                item.isBig ? (
                  <Col xs={12} key={index} className={styles.checklist__item}>
                    <CheckItems
                      item={item}
                      localStorageName={item.name}
                    ></CheckItems>
                  </Col>
                ) : (
                  <Col xs={6} key={index} className={styles.checklist__item}>
                    <CheckItems
                      item={item}
                      localStorageName={item.name}
                    ></CheckItems>
                  </Col>
                )
              // <Col xs={4} key={index}>
              //   <CheckDropdown
              //     key={index}
              //     item={item}
              //     localStorageName={item.name}
              //   />
              // </Col>
            )}
          </Row>
        </Container>
      </section>
    </>
  )
}
