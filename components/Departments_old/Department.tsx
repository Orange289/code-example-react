"use client"

import { Container } from "react-grid-system"
import { useState } from "react"
import styles from "./Departments.module.scss"
import { Department } from "@/types"

export default function Department({
  item,
  children,
  initialOpened = false,
}: {
  item: Department
  children: React.ReactNode
  initialOpened?: Boolean
}) {
  const [isActive, setIsActive] = useState<Boolean>(initialOpened)

  return (
    <div
      className={styles.department}
      key={item.meta ? item.meta.html_url : ""}
    >
      {item.meta && item.meta.html_url && (
        <Container>
          <h3
            id={item.meta.slug}
            className={`${isActive ? styles.active : ""}`}
            onClick={() => setIsActive(!isActive)}
          >
            {item.long_title || item.title}
          </h3>
        </Container>
      )}
      {/* <Row key={item.meta.html_url} className={styles.divisions}> */}
      {isActive && children}
      {/* </Row> */}
    </div>
  )
}
