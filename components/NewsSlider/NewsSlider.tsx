"use client"
// import { useEffect, useState } from "react"
import type { News, New } from "@/types"
import { Container } from "react-grid-system"
import styles from "./NewsSlider.module.scss"
import { Navigation, Pagination, Mousewheel, Scrollbar } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import Link from "next/link"
import Image from "next/image"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/scrollbar"

export default function NewsSlider({ items }: { items: New[] | [] }) {
  if (!items) {
    return <></>
  }

  return (
    <div className={`${styles.newsslider} newsslider`}>
      {/* <Container>
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      */}
      <Container>
        <div className={styles.newsslider__top}>
          <h3>Latest News</h3>
          <Link href="/news" className={styles.newsslider__link}>
            View all
          </Link>
        </div>
        <Swiper
          mousewheel={true}
          scrollbar={{
            hide: false,
            draggable: true,
            horizontalClass: "newsScrollbar",
          }}
          className={styles.newsslider__swiper}
          // cssMode={true}
          slidesPerView={3}
          spaceBetween={0}
          navigation={true}
          modules={[Navigation, Mousewheel, Scrollbar]}
          // pagination={{
          //   type: "progressbar",
          // }}
          // centeredSlides={true}
        >
          {items.map((item, index) => {
            return (
              <SwiperSlide key={index} className={styles.news__slide}>
                <Link href={`/news/${item.meta.slug}/`} className={styles.new}>
                  {item.image && item.image.meta && (
                    <Image
                      src={item.image.meta.download_url}
                      alt="new pic"
                      width={220}
                      height={140}
                      loading="lazy"
                    ></Image>
                    // <img src={item.image.meta.download_url} alt="" />
                  )}
                  <div className={styles.new__text}>
                    <div className={styles.new__meta}>
                      <span>{item.date_published_display} · </span>
                      <strong>{item.category?.name}</strong>
                    </div>
                    <h4 dangerouslySetInnerHTML={{ __html: item.title }}></h4>

                    {item.tags && (
                      <ul className={styles.new__tags}>
                        {item.tags.map((tag, tagIndex) => {
                          return <li key={tagIndex}>{tag}</li>
                        })}
                      </ul>
                    )}
                    {/* <ul className={styles.new__labels}>
                      {item.tags.map((item, index) => {
                        return <li key={index}>{item}</li>
                      })}
                    </ul> */}
                  </div>
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Container>

      {/* <Container>
        <Link href="/news" className={styles.newsslider__link}>
          View all
        </Link>
      </Container> */}

      {/* </Container> */}
    </div>
  )
}
