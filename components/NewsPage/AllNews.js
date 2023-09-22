"use client"

import { Container } from "react-grid-system"
import styles from "./AllNews.module.scss"
import Link from "next/link"
import { useEffect, useState } from "react"
import RegularButton from "../RegularButton/RegularButton"

export default function AllNews({ items }) {
  const itemsArray = items
  const moreNews = false
  // const [moreNews, setMoreNews] = useState(false)

  // const [itemsArray, setItemsArray] = useState([])

  // const [currentPage, setCurrentPage] = useState(1)

  // const newsPerPage = 6

  // useEffect(() => {
  //   if (items.length > newsPerPage) {
  //     setMoreNews(true)
  //     setItemsArray(items.slice(0, newsPerPage))
  //   }
  // }, [])

  // const showMore = () => {
  //   const pages = Math.floor(items.length / newsPerPage) + 1

  //   setCurrentPage(currentPage + 1)

  //   let newItems

  //   if (currentPage + 1 < pages) {
  //     newItems = items.slice(
  //       newsPerPage * currentPage,
  //       newsPerPage * currentPage + newsPerPage
  //     )
  //   } else if (currentPage + 1 === pages) {
  //     newItems = items.slice(newsPerPage * currentPage)
  //   }
  //   setItemsArray([...itemsArray, ...newItems])
  // }

  // useEffect(() => {
  //   if (items.length > itemsArray.length) {
  //   } else {
  //     setMoreNews(false)
  //   }
  // }, [itemsArray])
  if (itemsArray.length == 0) {
    return <></>
  }

  return (
    <section className={styles.allnews}>
      <Container className={styles.allnews__container}>
        <h2>All News</h2>
        <ul className={styles.allnews__items}>
          {itemsArray.map((item, index) => {
            return (
              <li xs={6} key={item.id} className={styles.allnews__item}>
                <Link href={`/news/${item.meta.slug}`}>
                  {item.image && item.image.meta && (
                    <img
                      src={item.image.meta.download_url}
                      alt={item.title}
                      loading="lazy"
                    />
                  )}
                  <div className={styles.allnews__meta}>
                    <span className={styles.allnews__date}>
                      {item.date_published_display}
                    </span>
                    <span className={styles.allnews__topic}>
                      {item.category?.name}
                    </span>
                  </div>
                  <strong>{item.title}</strong>
                  <p>{item.intro}</p>
                  <ul className={styles.allnews__tags}>
                    {item.tags.map((tag, tagIndex) => {
                      return <li key={tagIndex}>{tag}</li>
                    })}
                  </ul>
                </Link>
              </li>
            )
          })}
        </ul>
        {moreNews && (
          <RegularButton
            btnStyle="white"
            className={styles.allnews__btn}
            text="Show more"
            onClick={showMore}
          />
        )}
      </Container>
    </section>
  )
}
