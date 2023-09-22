"use client"

import { Container } from "react-grid-system"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import styles from "./Intro.module.scss"
import { Department } from "@/types"
import Divisions from "@/components/Departments/Divisions"
import Person from "@/components/Person/Person"
import { isAssistant } from "@/services/Persons"

export default function Intro({
  item,
  divisions,
  parent,
  isDivision,
  backup,
}: {
  item: Department
  divisions: Department[] | []
  parent: any
  isDivision: boolean
  backup: any
}) {
  const breadcrumbs = [{ name: "Departments", link: "/departments/" }]

  if (
    parent &&
    parent.meta &&
    item.meta.html_url != parent.meta.html_url &&
    parent.meta.html_url.split("/").slice(-2, -1)[0] != "departments"
  ) {
    const title = parent.long_title ? parent.long_title : parent.title
    breadcrumbs.push({ name: title, link: "../" })
  }

  breadcrumbs.push({
    name: item.long_title ? item.long_title : item.title,
    link: "",
  })

  return (
    <section className={styles.intro}>
      {item.image ? (
        <img
          loading="lazy"
          className={styles.intro__bg}
          src={item.image.meta.download_url}
          alt={item.title}
        />
      ) : (
        <img
          loading="lazy"
          className={styles.intro__bg}
          src="/images/departments/bg-hr.jpg"
          alt=""
        />
      )}
      <Container>
        <Breadcrumbs items={breadcrumbs} />
        <h1>{item.long_title || item.title}</h1>
        {item.body && (
          <div
            className={styles.intro__desc}
            dangerouslySetInnerHTML={{ __html: item.body }}
          ></div>
        )}
        {item.confluence_link && (
          <div className={styles.intro__confluence_link}>
            <a href={item.confluence_link} target="_blank">
              Confluence page
            </a>
          </div>
        )}
        {!isDivision && (
          <>
            <div className={styles.intro__managers}>
              {parent &&
                parent.bamboohr_employee &&
                parent.bamboohr_employee[0] && (
                  <ul className={styles.intro__manager}>
                    <Person
                      className={styles.intro__managerperson}
                      item={parent.bamboohr_employee[0]}
                      horizontalSecond
                      manager
                    />
                  </ul>
                )}
              {backup && (
                <a
                  href={`/people/${backup.url}/`}
                  className={`${styles.intro__manager} ${styles.backup}`}
                >
                  <span>
                    {isAssistant(backup) ? backup.jobTitle : "Primary Backup"}
                  </span>
                  <strong>{`${backup.firstName} ${backup.lastName}`}</strong>
                  {/* <Person
                    className={styles.intro__managerperson}
                    item={backup}
                  /> */}
                </a>
              )}
            </div>
            <Divisions
              boxWhite={true}
              className={styles.intro__divisions}
              item={item}
              items={divisions}
            ></Divisions>
          </>
        )}

        {/* {item.desc.map((item, index) => {
          return (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }}></p>
          )
        })} */}
      </Container>
    </section>
  )
}
