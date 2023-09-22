"use client"

import { Container } from "react-grid-system"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import styles from "./Intro.module.scss"

export default function Intro({ item }) {
  return (
    <section className={styles.intro}>
      <Container className={styles.intro__container}>
        <Breadcrumbs
          items={[{ name: "News", link: "/news" }, { name: item.title }]}
        />
        <div className={styles.intro__meta}>
          <span>{item.date_published_display} · </span>
          <strong>{item.category?.name}</strong>
        </div>
        <h1>{item.title}</h1>
        {/* {item.image && (
          <img src={item.image.meta.download_url} alt={item.title} />
        )} */}
      </Container>
    </section>
  )
}
