"use client"

import { Container } from "react-grid-system"
import Person from "../Person/Person"
import SearchBar from "../SearchBar/SearchBar"
import { useState } from "react"
import styles from "./WhosNext.module.scss"
import {
  yearSuffix,
  formatDateToDatAndMonth,
  searchPersonsByAllFields,
  isDayBetweenNext,
  getPersonsNextCelebrations,
} from "@/services/Persons"

function getAnniversaryText(person) {
  const today = new Date()
  const birthday = new Date(`${today.getFullYear()}-${person.birthday}`)
  const hireDate = new Date(person.hireDate)
  birthday.setFullYear(today.getFullYear())
  hireDate.setFullYear(today.getFullYear())

  const isBirthday = isDayBetweenNext(birthday)

  let anniversaryText = ""

  if (isBirthday) {
    anniversaryText = `${formatDateToDatAndMonth(
      person.birthday
    )} · Happy Birthday!`
  } else {
    const anniversaryYears =
      hireDate.getFullYear() - new Date(person.hireDate).getFullYear()
    anniversaryText = `${formatDateToDatAndMonth(
      person.hireDate
    )} · ${anniversaryYears} ${yearSuffix(anniversaryYears)} Anniversary!`
  }
  return anniversaryText
}

function getOccasionDate(person) {
  const today = new Date()
  const birthday = new Date(`${today.getFullYear()}-${person.birthday}`)
  const hireDate = new Date(person.hireDate)
  birthday.setFullYear(today.getFullYear())
  hireDate.setFullYear(today.getFullYear())

  const isBirthday = isDayBetweenNext(birthday)

  if (isBirthday) {
    return birthday
  }

  return hireDate
}

function filterByOccasionDate(items, date) {
  return items.filter((person) => {
    const occasionDate = getOccasionDate(person)
    return (
      date.getMonth() == occasionDate.getMonth() &&
      date.getDate() == occasionDate.getDate()
    )
  })
}

export default function WhosNext({ items }) {
  const [searchText, setSearchText] = useState("")

  if (items.length == 0) {
    return <></>
  }
  const celebrateItems = getPersonsNextCelebrations(items)

  const searchItems = (searchText) => {
    setSearchText(searchText)
  }
  const filteredItems = searchPersonsByAllFields(celebrateItems, searchText)
  // const filteredItems = useMemo(() => {
  //   return searchPersons(items, searchText)
  // }, [searchText, items])
  const dates = new Set()
  const occasionDateToDateString = (occasionDate) =>
    `${occasionDate.getFullYear()}-${
      occasionDate.getMonth() + 1
    }-${occasionDate.getDate()}`

  filteredItems.forEach((person) => {
    const occasionDate = getOccasionDate(person)
    dates.add(occasionDateToDateString(occasionDate))
  })

  return (
    <section className={styles.whosnext}>
      <Container>
        <h2>Who is next?</h2>
        <SearchBar
          placeholder="Search"
          onTextChange={searchItems}
          className={styles.whosnext__search}
        />

        {Array.from(dates).map((occasionDate) => {
          return (
            <div key={occasionDate}>
              <div className={styles.whosnext__grouptitle}>
                {formatDateToDatAndMonth(new Date(occasionDate))}
              </div>
              <ul className={styles.whosnext__items}>
                {filterByOccasionDate(
                  filteredItems,
                  new Date(occasionDate)
                ).map((person) => {
                  return (
                    <Person
                      key={person.id}
                      item={person}
                      withHover
                      occasionDate={getOccasionDate(person)}
                    />
                    // old short variant
                    // <li key={person.id}>
                    //   <div className={styles.whosnext__meta}>
                    //     {getAnniversaryText(person)}
                    //   </div>
                    //   <strong>
                    //     {person.firstName} {person.lastName}
                    //   </strong>
                    // </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </Container>
    </section>
  )
}
