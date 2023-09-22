"use client"

import { Container } from "react-grid-system"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Person from "../Person/Person"
import styles from "./Greetings.module.scss"
import {
  formatDateToDatAndMonth,
  getPersonsCelebrations,
  getPersonsNew,
} from "@/services/Persons"
import { People } from "@/types/BambooHR"

export default function Greetings({
  items,
  isNewPeople,
  isCelebrations,
  date = new Date(),
  title = "Send greetings to your colleagues",
  pageName = "Celebrations",
}: {
  items: People[]
  isNewPeople?: boolean
  isCelebrations?: boolean
  // filterItemsMethod?: Function
  date?: Date | boolean
  title?: string
  pageName?: string
}) {
  let filteredItems = items
  if (isNewPeople) {
    filteredItems = getPersonsNew(items)
  }
  if (isCelebrations) {
    filteredItems = getPersonsCelebrations(items)
  }

  return (
    <section className={styles.greetings}>
      <Container>
        <Breadcrumbs
          items={[{ name: pageName }]}
          isDark
          className={styles.greetings__breadcrumbs}
        />
        <h2>{title}</h2>
        {date && (
          <div className={styles.greetings__today}>
            <b>Today,</b> {formatDateToDatAndMonth(date.toString())}
          </div>
        )}
        <ul className={styles.greetings__items}>
          {filteredItems.map((item) => {
            return (
              <Person
                key={item.id}
                item={item}
                className={styles.greetings__person}
                withHover
              />
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
