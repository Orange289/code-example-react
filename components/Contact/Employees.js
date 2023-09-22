import { Container } from "react-grid-system"
import Person from "../Person/Person.tsx"
import styles from "./Employees.module.scss"
import { sortPersons } from "@/services/Persons"

export default function Employees({ items }) {
  const persons = sortPersons(items) // here because get unsorted People.employees

  return (
    <section className={styles.employees}>
      <Container>
        <h3>Direct reports</h3>
        <ul className={styles.employees__list}>
          {persons.map((item) => {
            return (
              <Person
                key={item.id}
                item={item}
                className={styles.employees__item}
              />
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
