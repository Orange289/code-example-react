"use client"
import type { People } from "@/types"
import { getPersonsOut } from "@/services/Persons"
import { Container } from "react-grid-system"
import styles from "./Content.module.scss"
import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import useQueryParams from "@/hooks/useQueryParams"
import PersonImage from "@/components/Person/Image"

export default function Content({ persons }: { persons: People[] }) {
  const searchParams = useSearchParams()
  const { setQueryParams } = useQueryParams()
  const [date, setDate] = useState(new Date())

  const formatDate = (el: Date) =>
    el.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "numeric",
      year: "2-digit",
    })

  const getDaysRest = (start, end, current) => {
    const startDate = new Date(start)
    const endDate = new Date(end)

    const diff = endDate.getTime() - startDate.getTime()

    const currentDate = new Date(current)

    const diffWithCurrent = currentDate.getTime() - startDate.getTime()

    const daysRest = (diffWithCurrent / diff) * 100

    return daysRest
  }

  const items = useMemo(() => {
    return getPersonsOut(persons, date)
  }, [date, persons])

  const getNextDate = (next = false) => {
    let newDate = new Date(date || "")
    newDate.setDate(newDate.getDate() + (next ? 1 : -1))
    setQueryParams({ date: newDate.toLocaleDateString("ru-RU") })
    setDate(newDate)
  }

  useEffect(() => {
    const currentDate = searchParams?.get("date")
      ? new Date(`${searchParams?.get("date")}`.split(".").reverse().join("-"))
      : new Date()
    setDate(currentDate)
  }, [searchParams])

  if (!items || items.length == 0) {
    return (
      <div className={styles.content}>
        <Container>
          <div className={styles.content__head}>
            <div className={styles.content__title}>
              <h1>Nobody has a day off today</h1>
            </div>
          </div>
        </Container>
      </div>
    )
  }
  return (
    <div className={styles.content}>
      <Container>
        <div className={styles.content__head}>
          <div className={styles.content__title}>
            <h1>Who is out</h1>
            <span>{items.length} people out today</span>
          </div>
          <div className={styles.content__date}>
            <button
              type="button"
              className={`${styles.content__arrowbtn} ${styles.prev}`}
              onClick={() => getNextDate(false)}
            ></button>
            <strong>{formatDate(date)}</strong>
            <button
              type="button"
              className={`${styles.content__arrowbtn} ${styles.next}`}
              onClick={() => getNextDate(true)}
            ></button>
          </div>
        </div>
        <ul className={styles.content__list}>
          {items.map((item, index) => {
            return (
              <li key={item.id} className={styles.content__item}>
                <Link href={`/people/${item.url}/`}>
                  <PersonImage person={item} />
                  <strong>{`${item.firstName} ${item.lastName}`}</strong>
                  <div className={styles.content__range}>
                    {formatDate(new Date(`${item.timeOffStart}`)).substring(
                      0,
                      5
                    )}{" "}
                    —{" "}
                    {formatDate(new Date(`${item.timeOffEnd}`)).substring(0, 5)}
                  </div>
                  <span
                    className={styles.content__progress}
                    style={{
                      width: `${getDaysRest(
                        item.timeOffStart,
                        item.timeOffEnd,
                        date
                      )}%`,
                    }}
                  ></span>
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </div>
  )
}
