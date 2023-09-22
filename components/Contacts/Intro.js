// "use client"
import { Container } from "react-grid-system"
import useQueryParams from "@/hooks/useQueryParams"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import SearchBar from "../SearchBar/SearchBar"
import styles from "./Intro.module.scss"

export default function Intro() {
  const { setQueryParams } = useQueryParams()
  function onTextChange(value) {
    setQueryParams({ search: value })
  }

  return (
    <section className={styles.intro}>
      <Container>
        <Breadcrumbs items={[{ name: "Contacts" }]} />
        <SearchBar
          placeholder="Search person or department here"
          onTextChange={onTextChange}
        />
      </Container>
    </section>
  )
}
