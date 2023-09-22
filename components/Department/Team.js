"use client"
import { Row, Col } from "react-grid-system"
import { useParams } from "next/navigation"
import Person from "../Person/Person.tsx"
import styles from "./Team.module.scss"
import Link from "next/link"

export default function Team({
  persons,
  linkToAll,
  teamName = "",
  search = "",
}) {
  const params = useParams()
  if (persons.length == 0) {
    return <></>
  }

  return (
    <Row>
      <Col xs={10.5}>
        <h3>
          {linkToAll ? (
            <Link class={styles.team__header_link} href={linkToAll}>
              {teamName ? teamName : "Direct reports"}
            </Link>
          ) : teamName ? (
            teamName
          ) : (
            "Direct reports"
          )}
        </h3>
        <ul className={styles.team}>
          {persons.slice(0, 12).map((item, index) => {
            return (
              // <li key={index} className={styles.people__person}>
              <Person
                key={item.id}
                className={styles.team__person}
                item={item}
              />
              // </li>
            )
          })}
        </ul>
      </Col>
      {persons.length > 12 && (
        <Col xs={1.5}>
          {linkToAll ? (
            <Link href={linkToAll} className={styles.team__viewall}>
              View all
            </Link>
          ) : params ? (
            <Link
              href={`/people/?search=${
                search
                  ? search
                  : params.division
                  ? persons[0].division
                  : persons[0].department
              }`}
              className={styles.team__viewall}
            >
              View all
            </Link>
          ) : null}
        </Col>
      )}
    </Row>
  )
}
