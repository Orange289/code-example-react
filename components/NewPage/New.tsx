"use client"

import { Container, Row, Col } from "react-grid-system"
import Link from "next/link"
import styles from "./New.module.scss"
import type { New } from "@/types"

export default function New({ item, items }: { item: New; items: New[] | [] }) {
  const articles: New[] | [] = items.slice(0, 3)

  return (
    <section className={styles.new}>
      <Container>
        <Row>
          <Col xs={7.6} className={styles.new__block}>
            {item.image && (
              <img
                loading="lazy"
                className={styles.new__img}
                src={item.image.meta.download_url}
                alt={item.title}
              />
            )}
            <div
              className={styles.new__content}
              dangerouslySetInnerHTML={{ __html: item.body }}
            ></div>
            <div className={styles.new__nav}>
              {item.prev_post_slug && (
                <Link
                  href={`/news/${item.prev_post_slug}`}
                  className={`${styles.new__navbtn} ${styles.prev}`}
                >
                  Previous article
                </Link>
              )}
              {item.next_post_slug && (
                <Link
                  href={`/news/${item.next_post_slug}`}
                  className={`${styles.new__navbtn} ${styles.next}`}
                >
                  Next article
                </Link>
              )}
              {/* <span
                className={`${styles.new__navbtn} ${styles.next} ${styles.inactive}`}
              >
                Next article
              </span> */}
            </div>
          </Col>
          <Col xs={0.4}></Col>
          <Col xs={4} className={styles.new__side}>
            <ul className={styles.new__tags}>
              {item.tags.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
            <div className={styles.new__articles}>
              <div className={styles.new__articleshead}>
                <strong>More articles</strong>
                <Link href="/news/">View all</Link>
              </div>
              <ul className={styles.new__articles}>
                {articles.map((item, index) => {
                  return (
                    <li key={item.id} className={styles.new__article}>
                      <Link href={`/news/${item.meta.slug}`}>
                        <div className={styles.new__meta}>
                          <span>{item.date_published_display} · </span>
                          <strong>{item.category?.name}</strong>
                        </div>
                        <strong className={styles.new__articletitle}>
                          {item.title}
                        </strong>
                        {/* <p>{item.desc.slice(0, 60) + "..."}</p> */}
                        <p>{item.intro}</p>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
