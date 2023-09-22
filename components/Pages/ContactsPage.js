"use client" //react-grid-system

import Intro from "../Contacts/Intro"
import Contacts from "../Contacts/Contacts"
import { Container } from "react-grid-system"
// import DATA from "@/data/contacts"
import { useSearchParams } from "next/navigation"
import { searchPersons } from "@/services/Persons"
import { useState, useEffect } from "react"
import styles from "./ContactsPage.module.scss"

export default function ContactsPage({ employees }) {
  const [filteredItems, setFilteredItems] = useState([
    {
      header: "",
      items: employees ? employees : [],
    },
  ])
  const searchParams = useSearchParams()

  // const search = searchParams.get("search")

  // if (search) {
  //   setFilteredItems(searchPersons(employees, search))
  // }

  useEffect(() => {
    const search = searchParams.get("search")
    setFilteredItems(searchPersons(employees, search))
  }, [searchParams])

  return (
    <>
      {/* <Intro onTextChange={setSearchText} /> */}
      <Intro />
      {filteredItems && filteredItems.length > 0 ? (
        <div className={styles.contacts}>
          {filteredItems.map((items, index) => {
            return (
              <Contacts
                key={items.header + index + items.items.length}
                items={items}
              ></Contacts>
            )
          })}
        </div>
      ) : (
        // filteredItems && filteredItems.length > 0 ? (
        //   <div className={styles.contacts}>
        //     <Contacts items={[false, filteredItems]}></Contacts>
        //   </div>
        // ) :
        <Container>
          <p style={{ paddingTop: 40, paddingBottom: 40 }}>
            Sorry, we couldn&apos;t find anything :(
          </p>
        </Container>
      )}
    </>
  )
}
