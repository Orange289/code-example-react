"use client"
import { Container, Row, Col } from "react-grid-system"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import styles from "./Intro.module.scss"
import Link from "next/link"

export default function Intro({ items }) {
  return (
    <section className={styles.intro}>
      <Container>
        <Breadcrumbs items={[{ name: "News" }]} isDark />
        <h2>Latest News</h2>
        <Row className={styles.intro__items}>
          {items.map((item, index) => {
            return (
              <Col xs={6} key={item.id} className={styles.intro__item}>
                <Link href={`/news/${item.meta.slug}`}>
                  {item.image && item.image.meta && (
                    <img
                      src={item.image.meta.download_url}
                      alt={item.title}
                      loading="lazy"
                    />
                  )}
                  <div className={styles.intro__meta}>
                    <span className={styles.intro__date}>
                      {item.date_published_display}
                    </span>
                    <span className={styles.intro__topic}>
                      {item.category?.name}
                    </span>
                  </div>
                  <strong>{item.title}</strong>
                  <p>{item.intro}</p>
                  <ul className={styles.intro__tags}>
                    {item.tags.map((tag, tagIndex) => {
                      return <li key={tagIndex}>{tag}</li>
                    })}
                  </ul>
                </Link>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}
