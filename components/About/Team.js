"use client"

import { Container } from "react-grid-system"
import Link from "next/link"
import styles from "./Team.module.scss"
import items from "@/data/teamleads.js"

export default function Team() {
  return (
    <section className={styles.team}>
      <Container>
        <h2>Departments & Leadership Team</h2>
        <ul className={styles.team__items}>
          {items.map((item, index) => {
            return (
              <li className={styles.team__item} key={index}>
                <Link
                  className={styles.team__person}
                  href={`/people/${item.url}`}
                >
                  <div className={styles.team__img}>
                    <img
                      loading="lazy"
                      src={`/images/leaders/${item.img}`}
                      alt={`${item.name}`}
                    />
                    <span>{item.department}</span>
                  </div>

                  <strong>{item.name}</strong>
                  <span
                    className={styles.team__position}
                    dangerouslySetInnerHTML={{ __html: item.position }}
                  ></span>
                  <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                  {item.note && (
                    <div
                      className={`${styles.team__note} ${
                        item.withEducation ? styles.education : ""
                      }`}
                    >
                      <strong
                        dangerouslySetInnerHTML={{ __html: item.note }}
                      ></strong>
                    </div>
                  )}

                  {/* <div className={styles.team__links}>
                    <Link href={`/people/${item.url}/`}>
                      <img
                        src="/images/icons/learn-more.svg"
                        alt="learn more icon"
                      />
                    </Link>

                    <ul>
                      {item.workEmail && (
                        <li>
                          <a
                            href={`https://${
                              process.env.NEXT_PUBLIC_SLACK_DOMAIN
                            }.slack.com/team/${item.workEmail.split("@")[0]}`}
                            target="_blank"
                            className={styles.team__link}
                          >{`@${item.workEmail.split("@")[0]}`}</a>
                        </li>
                      )}
                      {item.workPhone ? (
                        <li>
                          <a
                            href={`tel:${item.workPhone.replaceAll(" ", "")}`}
                            className={styles.team__link}
                          >
                            {item.workPhone}
                          </a>
                          (
                          {item.workPhoneExtension
                            ? "" + item.workPhoneExtension
                            : ""}
                          )
                        </li>
                      ) : (
                        item.mobilePhone && (
                          <li>
                            <a
                              href={`tel:${item.mobilePhone.replaceAll(
                                " ",
                                ""
                              )}`}
                              className={styles.team__link}
                            >
                              {item.mobilePhone}
                            </a>
                          </li>
                        )
                      )}
                      {item.workEmail && (
                        <li>
                          <a
                            href={`mailto:${item.workEmail}`}
                            className={styles.team__link}
                          >
                            {item.workEmail}
                          </a>
                        </li>
                      )}
                    </ul>
                  </div> */}
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
