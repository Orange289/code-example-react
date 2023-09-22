"use client"

import { Container, Row, Col } from "react-grid-system"
import styles from "./LearningPlans.module.scss"

export default function LearningPlans() {
  const items = [
    {
      name: "Mandatory Training",
      desc: "As a new employee you will have to complete some compliance training. New employees have to complete the mandatory training<br>within their first 30 days at EXANTE.<br><br>Failure to complete your training within the published timelines could involve disciplinary actions, including impact on your reward or bonus payment.",
      mandatory: true,
      url: "#",
      links: [
        {
          content:
            "<a href='https://confluence.exante.eu/display/HA/Compliance+training' target='_blank'>Read the guidelines</a>",
        },
        {
          content:
            "Log in to <a href='https://exante.eu.crossknowledge.com/interfaces/login.php' target='_blank'>CrossKnowledge</a> with your EXANTE credential.",
        },
        {
          content: "Complete the following mandatory training courses:",
          links: [
            "<a href='https://exante.eu.crossknowledge.com/site/path/298' target='_blank'>General Data Protection Regulation</a>",
            "<a href='https://exante.eu.crossknowledge.com/site/path/678' target='_blank'>Anti-Money Laundering: Terrorist Financing & Financial Crime</a>",
            "<a href='https://exante.eu.crossknowledge.com/site/path/729' target='_blank'>Information & Cyber Security</a>",
            "<a href='https://exante.eu.crossknowledge.com/site/path/900' target='_blank'>Market Abuse Training</a>",
          ],
        },
      ],
    },
    {
      name: "5 Day Learning Plan",
      desc: "During the first 5 days you will learn more about EXANTE, our products, departments, trading platform, and also will complete mandatory training.",
      links: [
        {
          content:
            "Have a look at the <a href='https://confluence.exante.eu/display/HA/Newbie+page' target='_blank'>Newbie page in Confluence</a>.",
        },
        {
          content:
            "Log in to <a href='https://exante.eu.crossknowledge.com/interfaces/login.php' target='_blank'>CrossKnowledge</a> to start your learning journey.",
        },
        {
          content:
            "Finish the <a href='https://exante.eu.crossknowledge.com/site/channel/46' target='_blank'>5 Day Learing Plan</a> course.",
        },
      ],
      url: "#",
    },
    {
      name: "10 Day Learning Plan",
      desc: "During the first 10 days, sales employees learn all about the functionality of the EXANTE trading platform, internal procedures and processes. Also, dive deeper into other products like Partner Programme and Asset Management.",
      forSales: true,
      url: "#",
      links: [
        {
          content:
            "Have a look at the <a href='https://confluence.exante.eu/display/HA/Sales+Onboarding+Program' target='_blank'>Sales Newbie page in Confluence</a>.",
        },
        {
          content:
            "Log in to <a href='https://exante.eu.crossknowledge.com/interfaces/login.php' target='_blank'>CrossKnowledge</a> to start your learning journey.",
        },
        {
          content:
            "Finish the <a href='https://exante.eu.crossknowledge.com/site/channel/56' target='_blank'>10 Day Learing Plan</a> course.",
        },
      ],
    },
  ]

  return (
    <>
      <div className="anchor" id="education"></div>
      <section className={styles.lplans}>
        <Container>
          <h2>5-10 Day Learning Plans</h2>
          <p>
            For our new hires, we have created guided onboarding plans. We have
            a general 5-day plan for everyone and a 10-day learning plan for
            brokerage sales employees. We use the eLearning platform
            CrossKnowledge, where you will find your onboarding plan and other
            useful training materials.
          </p>
          <div className={styles.lplans__link}>
            <a
              href="https://exante.eu.crossknowledge.com/interfaces/login.php"
              target="_blank"
            >
              Log in to CrossKnowledge
            </a>
            <span>with your EXANTE credentials.</span>
          </div>

          {items.map((item, index) => {
            return (
              <div
                key={index}
                className={`${styles.lplans__item} ${
                  item.mandatory ? styles.mandatory : ""
                } ${item.forSales ? styles.forsales : ""}`}
              >
                <div className={styles.lplans__content}>
                  <div
                    className={`${styles.lplans__block} ${styles.lplans__intro}`}
                  >
                    <strong>{item.name}</strong>
                    <p
                      className={styles.lplans__desc}
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    ></p>
                  </div>

                  <div className={styles.lplans__block}>
                    <b>How to get started?</b>
                    <ul>
                      {item.links.map((link, linkIndex) => {
                        return (
                          <li key={linkIndex} className={styles.lplans__li}>
                            <p
                              dangerouslySetInnerHTML={{ __html: link.content }}
                            ></p>
                            {link.links && (
                              <ul>
                                {link.links.map((el, elIndex) => {
                                  return (
                                    <li
                                      key={elIndex}
                                      dangerouslySetInnerHTML={{ __html: el }}
                                    ></li>
                                  )
                                })}
                              </ul>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </Container>
      </section>
    </>
  )
}
