"use client"

import Link from "next/link"
import { Col } from "react-grid-system"
import styles from "./Division.module.scss"
import { Department } from "@/types"

export default function Division({
  item,
  responsible = false,
}: {
  item: Department
  responsible?: any
}) {
  if (!item) {
    return <></>
  }

  return (
    <>
      <Col
        xs={3}
        key={item.meta ? item.meta.html_url : ""}
        className={`${styles.division__col} ${
          responsible ? styles.division__col_responsible : ""
        }`}
      >
        <div
          className={styles.division__item}
          id={`${item.meta ? item.meta.html_url : ""}`}
        >
          <Link
            // href={`/departments/${item.url}/${item.url}/`}
            href={`${item.meta ? item.meta.slug : ""}/`}
          >
            <strong>{item.long_title || item.title}</strong>
          </Link>
          {item.body && (
            <p
              dangerouslySetInnerHTML={{
                __html: item.body,
              }}
            ></p>
          )}
        </div>
        {responsible && (
          <div className={styles.division__responsible}>
            <span>Responsible person </span>
            <a href={responsible.url}>{responsible.name}</a>
          </div>
        )}
      </Col>
    </>
  )
}
