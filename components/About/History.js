"use client"

import { Container } from "react-grid-system"
import styles from "./History.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"

export default function History() {
  const items = [
    {
      year: "2010",
      title: "Launch of the EXANTE brokerage platform,<br>desktop edition",
      desc: "Alexey Kirienko and Anatoliy Knyazev teamed up to develop proprietary trading software in 2010; Gatis Eglitis joined in 2011 as a co-founder. Their expertise and dedication attracted investors, allowing them to build a business model around technology. This sparked the idea to launch their own brokerage.",
    },
    {
      year: "2011",
      title: "EXANTE founded,<br>first European license",
      desc: "EXANTE was established in Malta rooted in two core principles: information transparency and technological innovation. The brokerage swiftly acquired an MFSA licence.",
    },
    {
      year: "2015",
      title: "EXANTE acquires a second<br>EU licence",
      desc: "The company subsequently expanded to Cyprus and&nbsp;obtained one more European licence.",
    },
    {
      year: "2019",
      title: "EXANTE acquired the first Asian licence (SFC HK)",
      desc: "The company expanded into the Asian markets, securing the necessary licensing. This achievement allowed EXANTE to conduct trading operations within&nbsp;the&nbsp;region, strengthening its presence and reach in the local market.",
    },
    {
      year: "2020",
      title: "March became a record month in terms of new client acquisition",
      desc: "A record number of new customers joined EXANTE and started using our trading platform and services.",
    },
    {
      year: "2021",
      title: "EXANTE celebrated its 10th anniversary",
      desc: "2021 marked EXANTE’s 10th anniversary ‒ EXANTEN. As part of our celebrations, EXANTE hosted a select group of clients and partners at private events across Europe and Asia. ",
    },
    {
      year: "2022-2023",
      title:
        "EXANTE acquired the FCA licence and launched sales in&nbsp;the UK",
      desc: "This represents another key milestone on our journey to offer clients bespoke service backed by strong local regulation. The FCA licence allows us to&nbsp;promote our offering to UK-based professional and institutional clients.",
    },
  ]

  return (
    <>
      <div className="anchor" id="history"></div>
      <section className={styles.history}>
        <Container>
          <h2>Our History</h2>
          <ul className={styles.history__list}>
            {items.map((item, index) => {
              return (
                <li className={styles.history__item} key={index}>
                  <div className={styles.history__year}>
                    <span>{item.year}</span>
                    <img
                      loading="lazy"
                      src="/images/hexagon-icon.png"
                      alt="hexagon icon"
                    />
                  </div>
                  <strong
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></strong>
                  <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                </li>
              )
            })}
          </ul>
        </Container>

        {/* <div className={styles.history__slider}>
        <Container>
          <Swiper
            className={`${styles.history__swiper} historyswiper`}
            slidesPerView={2}
            spaceBetween={56}
            navigation={true}
            modules={[Navigation]}
          >
            {items.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={styles.history__item}>
                    <strong>{item.year}</strong>
                    <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Container>
      </div> */}
      </section>
    </>
  )
}
