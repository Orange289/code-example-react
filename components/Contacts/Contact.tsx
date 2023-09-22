import styles from "./Contact.module.scss"
import { People } from "@/types"
import { slugify } from "@/utils/slugify"
import { useState, useMemo } from "react"
import PersonImage from "@/components/Person/Image"
import BirthdayCake from "@/components/BirthdayCake/BirthdayCake"
import Link from "next/link"

import { checkPersonIsOut, checkPersonIsBirthday } from "@/services/Persons"

export default function Contact({ item }: { item: People }) {
  function getUrl(el: People = item) {
    return `/people/${
      el.url ? el.url : slugify(`${el.workEmail.split("@")[0]}`)
    }/`
  }
  const birthday = item.birthday
    ? new Date(item.birthday).toLocaleDateString("en-GB", {
        month: "long",
        day: "numeric",
      })
    : ""
  // const hireDate = item.hireDate
  //   ? new Date(item.hireDate).toLocaleDateString("en-GB", {
  //       month: "long",
  //       day: "numeric",
  //       year: "numeric",
  //     })
  //   : ""

  const formatDate = (el) => {
    return new Date(el).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "numeric",
      year: "2-digit",
    })
  }

  const today = new Date()

  const todayFormatted = new Date().toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "numeric",
    year: "2-digit",
  })

  const timeOffStart = item.timeOffStart ? new Date(item.timeOffStart) : false

  // const items = useMemo(() => {
  //   return getPersonsOut(persons, dateToday)
  // }, [dateToday, persons])

  return (
    <div className={styles.contact}>
      <a className={styles.contact__img} href={getUrl()}>
        <PersonImage person={item} />
        {checkPersonIsBirthday(item) && (
          <BirthdayCake className={styles.contact__bdicon}></BirthdayCake>
        )}
      </a>
      <div className={styles.contact__info}>
        <h4 className={styles.contact__name}>
          <a href={getUrl()}>
            {item.firstName} {item.lastName}
          </a>
        </h4>
        <div className={styles.contact__position}>{item.jobTitle}</div>
        <div className={styles.contact__department}>
          {/* {(item.department || item.division) && <> · </>} */}
          {item.department ? item.department : ""}
          {item.department != item.division ? ", " : ""}
          {item.division != item.department && item.division
            ? item.division
            : ""}
        </div>
        {item.timeOffStart &&
          (today >= timeOffStart ? (
            <div className={`${styles.contact__vacation} ${styles.now}`}>
              {`On vacation till ${formatDate(item.timeOffEnd)}`}
            </div>
          ) : (
            <div className={`${styles.contact__vacation} ${styles.upcoming}`}>
              {`Upcoming vacation from ${formatDate(
                item.timeOffStart
              )} to ${formatDate(item.timeOffEnd)}`}
            </div>
          ))}

        {item.workPhone && (
          <ul className={styles.contact__links}>
            <li>
              <a href={`tel:${item.workPhone.replaceAll(" ", "")}`}>
                {item.workPhone}
              </a>
              {item.workPhoneExtension ? "" + item.workPhoneExtension : ""}
            </li>
          </ul>
        )}

        {item.mobilePhone && (
          <ul className={styles.contact__links}>
            <li>
              <a href={`tel:${item.mobilePhone.replaceAll(" ", "")}`}>
                {item.mobilePhone}
              </a>
            </li>
          </ul>
        )}
        <ul className={styles.contact__links}>
          {item.workEmail && (
            <li>
              <a href={`mailto:${item.workEmail}`}>{item.workEmail}</a>
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
          {/* {item.contacts.map((contact, contactIndex) => {
            return (
              <li key={contactIndex}>
                {contact.link ? (
                  <a href={contact.link}>{contact.name}</a>
                ) : (
                  contact.name
                )}
              </li>
            )
          })} */}
        </ul>

        {/* <div className={styles.contact__items}>
          {hireDate && (
            <div className={styles.contact__item}>
              <strong>Hire date:</strong>
              <span>{hireDate}</span>
            </div>
          )}
        </div> */}
        <div className={styles.contact__items}>
          {birthday && (
            <div className={styles.contact__item}>
              <strong>Birth date:</strong>
              <span>{birthday}</span>
            </div>
          )}
          {/* {!!item.customOfficeLocation && (
            <div className={styles.contact__item}>
              <strong>Office location: </strong>
              <span>{item.customOfficeLocation}</span>
            </div>
          )} */}
          {!!item.location && (
            <div className={styles.contact__item}>
              <strong>Current location: </strong>
              <span>{item.location}</span>
            </div>
          )}
        </div>
        {item.employees && item.employees.length > 0 && (
          <ul className={styles.contact__employees}>
            {item.employees.slice(0, 4).map((employee) => {
              return (
                employee && (
                  <li key={employee.id}>
                    <Link href={`/people/${employee.url}/`}>
                      <PersonImage person={employee} />
                    </Link>
                  </li>
                )
              )
            })}
            {item.employees.length > 4 && (
              <li className={styles.contact__seemore}>
                <a href={`${getUrl()}`}>+{item.employees.length - 4}</a>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  )
}
