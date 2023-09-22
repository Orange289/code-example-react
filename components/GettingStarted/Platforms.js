"use client"

import { Container, Row, Col } from "react-grid-system"
import IconItem from "../IconItem/IconItem"
import RegularButton from "../RegularButton/RegularButton"
import styles from "./Platforms.module.scss"

export default function Platforms() {
  const jiraItems = [
    {
      img: "services-icon.svg",
      name: "IT Services",
      desc: "IT support requests, GMail-related queries, software installation/assistance, access management, compensation for personal laptop use, and more.",
    },
    {
      img: "hr-icon.svg",
      name: "HR Services",
      desc: "Salary and time off questions, HR system issues, first and last name updates, education requests, health insurance, and more.",
    },
    {
      img: "compliance-icon.svg",
      name: "Compliance",
      desc: "Everything client-related: withdrawal and transfer-related inquiries, deposit type queries, data change requests, new client onboarding, categorisation, and more.",
    },
    {
      img: "business-icon.svg",
      name: "Business Operations",
      desc: "Counterparty onboarding to transfers, treasury requests, confirmation of covered  margin call, change in leverage, voice orders, commission inquiries, and many more issues.",
    },
    {
      img: "finance-icon.svg",
      name: "Corporate Finance",
      desc: "Payment requests, reports and document requests, and more.",
    },
    {
      img: "legal-icon.svg",
      name: "Legal Services",
      desc: "Ask Legal to draft or review a document, or ask any questions to the on the safe side.",
    },
    {
      img: "self-icon.svg",
      name: "Sales Admin Services",
      desc: "Add or change a referral link, change a payment plan, add contacts and leads, edit lead's details, and make new feature requests.",
    },
  ]

  const bambooItems = [
    {
      name: "Compensation<br>Information",
    },
    {
      name: "Goal Setting<br>& Performance Management",
    },
    {
      name: "Time Off Requests",
    },
    {
      name: "Flexible Benefit",
    },
    {
      name: "Bank Details",
    },
    {
      name: "Documents",
      note: true,
    },
  ]

  const itItems = [
    {
      img: "general-help-icon.svg",
      name: "General Help",
      desc: "General questions, GMail-related questions, office equipment maintenance, software installation, and so on. ",
      url: "https://jira.exante.eu/plugins/servlet/desk/portal/3?requestGroup=8",
    },
    {
      img: "access-icon.svg",
      name: "Access Management",
      desc: "Requests to access a specific area or data or create an account.",
      url: "https://jira.exante.eu/plugins/servlet/desk/portal/3?requestGroup=12",
    },
    {
      img: "purchase-icon.svg",
      name: "Purchase",
      desc: "Software license or subscription purchase, additional  peripherals and connection cables, buyout of corporate assets, and so on. ",
      url: "https://jira.exante.eu/plugins/servlet/desk/portal/3?requestGroup=13",
    },
  ]

  return (
    <section className={styles.platforms} id="platforms">
      <Container>
        <div className={styles.platforms__item}>
          <h2>Jira</h2>
          <Row>
            {jiraItems.map((item, index) => {
              return (
                <Col xs={3} key={index} className={styles.platforms__col}>
                  <IconItem item={item} />
                </Col>
              )
            })}
            <Col xs={3} className={styles.platforms__action}>
              <p>
                If you have a request to other departments, please use the Jira
                ticketing system.
              </p>
              <RegularButton
                link="https://jira.exante.eu/plugins/servlet/desk/site/ja"
                external
                text="EXANTE Jira Centre"
              />
            </Col>
          </Row>
        </div>

        <div className={`${styles.platforms__item} ${styles.bamboo}`}>
          <Row>
            <Col xs={3}>
              <h2>BambooHR</h2>
            </Col>
            <Col xs={1}></Col>
            <Col xs={8} className={styles.platforms__desc}>
              <p>
                Corporate HR system where you can see the organisation chart,
                request time off, change address, see your yearly goals, find
                your documents, see your personal information, and sign
                documents.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={9}>
              <Row>
                {bambooItems.map((item, index) => {
                  return (
                    <Col
                      xs={index % 2 ? 6.7 : 5.3}
                      key={index}
                      className={`${styles.platforms__bambooitem} ${
                        item.note ? styles.note : ""
                      }`}
                    >
                      <strong
                        dangerouslySetInnerHTML={{ __html: item.name }}
                      ></strong>
                      {/* <a
                        href={item.url}
                        target="_blank"
                        dangerouslySetInnerHTML={{ __html: item.name }}
                      ></a> */}
                    </Col>
                  )
                })}
              </Row>
            </Col>

            <Col xs={3} className={styles.platforms__action}>
              <p>
                If you need to change your address, request time off or find and
                sign your documents, use BambooHR.
              </p>
              <RegularButton
                link="https://exante.bamboohr.com/login.php?r=%2Fhome%2F"
                external
                text="Go to BambooHR"
              />
            </Col>
          </Row>
        </div>

        <div className={`${styles.platforms__item} ${styles.it}`}>
          <h2>Requesting access & IT user support</h2>
          <Row>
            {itItems.map((item, index) => {
              return (
                <Col xs={3} key={index} className={styles.platforms__col}>
                  <IconItem item={item} />
                </Col>
              )
            })}
            <Col xs={3} className={styles.platforms__action}>
              <p>
                In case you need to request any general IT help, system accesses
                or order some additional equipment, please, create a ticket via
                IT Service Desk in Jira:
              </p>
              <RegularButton
                link="https://jira.exante.eu/plugins/servlet/desk/portal/3"
                external
                text="IT Service Centre"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}
