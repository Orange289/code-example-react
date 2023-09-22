"use client"

import { Container, Row, Col } from "react-grid-system"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Icon from "../Icon/Icon"
import Link from "next/link"
import styles from "./Intro.module.scss"
import BoxLink from "@/components/BoxLink/BoxLink"
import { items as working_here } from "@/components/WorkingHere/Intro"

export default function Intro() {
  const defaultSystems = [
    {
      img: "slack",
      url: "https://confluence.exante.eu/display/HA/Slack%3A+How+to+Set+Up",
      name: "Slack",
    },
    {
      img: "bamboo",
      url: "https://confluence.exante.eu/display/HA/BambooHR%3A+How+to+Set+Up",
      name: "BambooHR",
    },
    {
      img: "exante",
      url: "https://confluence.exante.eu/display/HA/Jira%3A+How+to+Set+Up",
      name: "Jira",
    },
    {
      img: "gmail",
      url: "https://confluence.exante.eu/display/HA/Gmail%3A+How+to+Set+Up",
      name: "Gmail",
    },
    {
      img: "gmeet",
      url: "https://confluence.exante.eu/display/HA/Google+Meet%3A+How+to+Set+Up",
      name: "Google Meet",
    },
    {
      img: "gdrive",
      url: "https://confluence.exante.eu/display/HA/Google+Drive%3A+How+to+Set+Up",
      name: "Google Drive",
    },
    {
      img: "crossknowledge-2",
      url: "https://confluence.exante.eu/display/HA/CrossKnowledge%3A+How+to+Set+Up",
      name: "CrossKnowledge",
    },
    {
      img: "confluence",
      url: "https://confluence.exante.eu/display/HA/Confluence%3A+How+to+Set+Up",
      name: "Confluence",
    },
  ]

  const requestSystems = [
    {
      img: "workable",
      url: "https://confluence.exante.eu/display/HA/Workable%3A+How+to+Set+Up",
      name: "Workable",
    },
    {
      img: "3cx",
      url: "https://confluence.exante.eu/display/OPS/How+to+setup+3CX+on+mobile+phone",
      name: "3CX",
    },
    {
      img: "mumble",
      url: "https://confluence.exante.eu/display/OPS/Mumble+for+dummies",
      name: "Mumble",
    },
    {
      img: "zendesk",
      url: "https://confluence.exante.eu/display/HA/Zendesk%3A+How+to+Set+Up",
      name: "Zendesk",
    },
    {
      img: "katman",
      url: "https://app.kissflow.com/",
      name: "KissFlow",
    },
    {
      img: "exante",
      url: "https://crm.exante.eu/",
      name: "CRM",
    },
    {
      img: "monosnap",
      url: "https://confluence.exante.eu/display/HA/Digital+Security+Policy#DigitalSecurityPolicy-Screenshots",
      name: "Monosnap",
    },
    {
      img: "exante",
      url: "https://link.exante.eu/chart/#instrument=BTC.USD&timeframe=1hour",
      name: "Trading Platform",
    },
    {
      img: "metabase",
      url: "https://confluence.exante.eu/display/HA/Metabase%3A+How+to+Set+Up",
      name: "Metabase",
    },
  ]

  const anchors = [
    {
      name: "Working Here",
      url: "#working_here",
    },
    // {
    //   name: "Our Processes",
    //   url: "/working-here/",
    // },
    {
      name: "Systems We Use",
      url: "#systems",
    },
    {
      name: "Onboarding Checklists",
      url: "#checklist",
    },
    {
      name: "Learning Plans",
      url: "#education",
    },
    {
      name: "Contacts for Help",
      url: "#contacts",
    },
  ]

  return (
    <section className={styles.intro}>
      <div className={styles.intro__welcome} id="welcome">
        <Container>
          <Breadcrumbs items={[{ name: "Getting Started" }]} />
          <h2>Welcome on board!</h2>
          <p>
            We are happy to have you on the team. Follow the tips below to get
            started.
          </p>
          <ul className={styles.intro__anchors}>
            {anchors.map((item, index) => {
              return (
                <li key={index}>
                  {item.url.startsWith("#") ? (
                    <a href={item.url}>{item.name}</a>
                  ) : (
                    <Link href={item.url}>{item.name}</Link>
                  )}
                </li>
              )
            })}
          </ul>
        </Container>
      </div>
      <div className={styles.intro__working_here} id="working_here">
        <Container>
          <h2>Working Here</h2>
          <p>
            Read and learn about the working conditions at EXANTE and get basic
            employment information.
          </p>
          <ul className={styles.intro__working_here_items}>
            {working_here.map((item, index) => {
              return (
                <li key={index}>
                  <BoxLink
                    item={{
                      name: item.name,
                      url: `/about/working-here/${item.url}`,
                    }}
                    onlight={true}
                  />
                </li>
              )
            })}
          </ul>
        </Container>
      </div>
      {/* <div className="anchor" id="systems"></div> */}
      <div className={styles.intro__systemswrap} id="systems">
        <Container>
          <h2>Systems We Use & How to Set Them Up</h2>
          <p>
            For work-related tasks, we use different corporate systems. You can
            find the list of them with short descriptions in{" "}
            <a href="https://confluence.exante.eu/display/HA/Corporate+Systems">
              Confluence
            </a>
            .
          </p>
          <Row className={styles.intro__systems}>
            <Col xs={6}>
              <strong>General systems</strong>
              <p>set by default for everyone</p>
              <Row className={`${styles.intro__list} ${styles.default}`}>
                {defaultSystems.map((item, index) => {
                  return (
                    <Col xs={4} key={index} className={styles.intro__system}>
                      <a href={item.url} className={item.img} target="_blank">
                        <Icon
                          icon={item.img}
                          url="/images/icons/systems-sprite.svg"
                        />
                        {/* <img src={`/images/icons/${item.img}`} alt={item.name} /> */}
                        <span>{item.name}</span>
                      </a>
                    </Col>
                  )
                })}
              </Row>
            </Col>
            <Col xs={6}>
              <strong>Additional systems</strong>
              <p>upon request</p>

              <a
                href="https://jira.exante.eu/plugins/servlet/desk/portal/3/create/337"
                target="_blank"
                style={{
                  display: "block",
                  color: "#ffffff",
                  opacity: "0.7",
                  textDecoration: "underline",
                  marginBottom: 40,
                }}
              >
                upon request
              </a>

              <Row className={`${styles.intro__list} ${styles.request}`}>
                {requestSystems.map((item, index) => {
                  return (
                    <Col xs={4} key={index} className={styles.intro__system}>
                      <a
                        href={item.url}
                        className={item.img === "3cx" ? "threecx" : item.img}
                        target="_blank"
                      >
                        {item.img === "monosnap" ? (
                          <img
                            loading="lazy"
                            src="/images/icons/monosnap.svg"
                            alt="monosnap icon"
                          />
                        ) : (
                          <Icon
                            icon={item.img}
                            url="/images/icons/systems-sprite.svg"
                          />
                        )}
                        <span>{item.name}</span>
                      </a>
                    </Col>
                  )
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}
