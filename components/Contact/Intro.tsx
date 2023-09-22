import { People } from "@/types"
import { Container } from "react-grid-system"
import Link from "next/link"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import styles from "./Intro.module.scss"
import PersonImage from "@/components/Person/Image"
import BirthdayCake from "@/components/BirthdayCake/BirthdayCake"
import { checkPersonIsBirthday } from "@/services/Persons"
import { isAssistant } from "@/services/Persons"

export default function Intro({
  item,
  backup,
  manager,
}: {
  item: People
  backup: People
  manager: People
}) {
  const fullName = `${item.firstName} ${item.lastName}`
  const birthday = item.birthday
    ? new Date(item.birthday).toLocaleDateString("en-GB", {
        month: "long",
        day: "numeric",
      })
    : ""
  const hireDate = item.hireDate
    ? new Date(item.hireDate).toLocaleDateString("en-GB", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : ""
  const timeOffStart = item.timeOffStart
    ? new Date(item.timeOffStart).toLocaleDateString("ru-RU", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      })
    : ""
  const timeOffEnd = item.timeOffEnd
    ? new Date(item.timeOffEnd).toLocaleDateString("ru-RU", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      })
    : ""

  return (
    <section className={styles.intro}>
      <Container className={styles.intro__container}>
        <Breadcrumbs
          items={[
            { name: "Contacts", link: "/people" },
            // { name: item.name.replace(/-/g, " ") },
            { name: fullName },
          ]}
        />
        <div className={styles.intro__content}>
          <div className={styles.intro__image}>
            <PersonImage person={item} />
            {checkPersonIsBirthday(item) && (
              <BirthdayCake className={styles.intro__bdicon}></BirthdayCake>
            )}
          </div>
          <div className={styles.intro__info}>
            <h2>{fullName}</h2>
            <div className={styles.intro__position}>
              {item.jobTitle} {(item.department || item.division) && <> · </>}
              {item.department && (
                // <a href={`/departments/${slugify(item.department)}/`}>
                <span>{item.department}</span>
                // </a>
              )}
              {item.department != item.division ? " / " : ""}
              {item.division != item.department &&
                item.department &&
                item.division && (
                  // <a
                  //   href={`/departments/${slugify(item.department)}/${slugify(
                  //     item.division
                  //   )}/`}
                  // >
                  <span>{item.division}</span>
                  // </a>
                )}
            </div>
            {(timeOffStart || timeOffEnd) && (
              <div className={styles.intro__vacation}>
                {`On vacation ${
                  timeOffStart ? `from ${timeOffStart} ` : ""
                }till ${timeOffEnd}`}
              </div>
            )}
            <ul className={styles.intro__contacts}>
              {/* {item.contacts.map((el, index) => {
                return (
                  <li key={index}>
                    {el.link ? <a href={el.link}>{el.name}</a> : el.name}
                  </li>
                )
              })} */}
              {item.workEmail && (
                <li>
                  <a href={`mailto:${item.workEmail}`}>{item.workEmail}</a>
                </li>
              )}
              {item.workPhone && (
                <li>
                  <a href={`tel:${item.workPhone.replaceAll(" ", "")}`}>
                    {item.workPhone}
                  </a>
                  {item.workPhoneExtension ? "" + item.workPhoneExtension : ""}
                </li>
              )}
              {item.mobilePhone && (
                <li>
                  <a href={`tel:${item.mobilePhone.replaceAll(" ", "")}`}>
                    {item.mobilePhone}
                  </a>
                </li>
              )}
              {item.workEmail && (
                <li>
                  <a
                    href={`https://${
                      process.env.NEXT_PUBLIC_SLACK_DOMAIN
                    }.slack.com/team/${item.workEmail.split("@")[0]}`}
                    target="_blank"
                  >{`@${item.workEmail.split("@")[0]}`}</a>
                </li>
              )}
            </ul>
            <ul className={styles.intro__items}>
              {item.customOfficeLocation && (
                <li className={styles.intro__item}>
                  <span>Office location</span>
                  <strong>{item.customOfficeLocation}</strong>
                </li>
              )}
              {item.location && (
                <li className={styles.intro__item}>
                  <span>Current location</span>
                  <strong>{item.location}</strong>
                </li>
              )}
              {birthday && (
                <li className={styles.intro__item}>
                  <span>Birth date </span>
                  <strong>{birthday}</strong>
                </li>
              )}
              {hireDate && (
                <li className={styles.intro__item}>
                  <span>Hire date</span>
                  <strong>{hireDate}</strong>
                </li>
              )}
            </ul>
          </div>
        </div>
        {(item.supervisor || backup) && (
          <div
            className={`${styles.intro__persons} ${
              item.employees && styles.noemployees
            }`}
          >
            {manager && (
              <Link
                className={`${styles.intro__person} ${styles.manager}`}
                href={`/people/${manager.url}/`}
              >
                <span>Manager</span>
                <strong>{`${manager.firstName} ${manager.lastName}`}</strong>
              </Link>
            )}
            {backup && (
              <a
                href={`/people/${backup.url}/`}
                className={`${styles.intro__person} ${styles.backup}`}
              >
                <span>
                  {isAssistant(backup) ? backup.jobTitle : "Primary Backup"}
                </span>
                <div className={styles.intro__backup}>
                  <strong>{`${backup.firstName} ${backup.lastName}`}</strong>
                  <ul>
                    {/* {backupContacts.map((el, index) => {
                      return (
                        <li key={index}>
                          {el.link ? <a href={el.link}>{el.name}</a> : el.name}
                        </li>
                      )
                    })} */}

                    {backup.workEmail && (
                      <li>
                        <a href={`mailto:${backup.workEmail}`}>
                          {backup.workEmail}
                        </a>
                      </li>
                    )}
                    {backup.workPhone ? (
                      <li>
                        <a href={`tel:${backup.workPhone.replaceAll(" ", "")}`}>
                          {backup.workPhone}
                        </a>
                        {backup.workPhoneExtension &&
                          ` (${backup.workPhoneExtension})`}
                      </li>
                    ) : (
                      backup.mobilePhone && (
                        <li>
                          <a
                            href={`tel:${backup.mobilePhone.replaceAll(
                              " ",
                              ""
                            )}`}
                          >
                            {backup.mobilePhone}
                          </a>
                        </li>
                      )
                    )}
                    {backup.workEmail && (
                      <li>
                        <a
                          href={`https://${
                            process.env.NEXT_PUBLIC_SLACK_DOMAIN
                          }.slack.com/team/${backup.workEmail.split("@")[0]}`}
                          target="_blank"
                        >{`@${backup.workEmail.split("@")[0]}`}</a>
                      </li>
                    )}
                  </ul>
                </div>
              </a>
            )}
          </div>
        )}
      </Container>
    </section>
  )
}
