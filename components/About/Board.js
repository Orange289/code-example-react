"use client"

import Link from "next/link"
import { Container, Row, Col } from "react-grid-system"
import styles from "./Board.module.scss"

export default function Board() {
  const items = [
    {
      url: "alex",
      img: "kirienko.jpg",
      name: "Alexey Kirienko",
      position: "CHIEF EXECUTIVE OFFICER",
      desc: "Alexey Kirienko is a Co-founder and CEO of EXANTE, Member of the Board of Directors. He is also a Member of the Board of Directors at Flowbank SA, Co-founder at CMNO.<br><br>Alexey is overseeing Business development, Sales, Partnerships, Products and Client management, and Shared services.<br>He holds a Master's degree in Economics and Management of Enterprises.<br><br>Alexey is a well-known industry expert and opinion leader with HedgeWeek, Hedge Funds Review, Financial Times, Deal Book, Forbes, New York Times, Barrons, Bloomberg and CNBC. In 2021, the European Business Magazine nominated him for Best CEO Award.",
    },
    {
      url: "ak",
      img: "knyazev.jpg",
      name: "Anatoliy Knyazev",
      position: "EXECUTIVE DIRECTOR",
      desc: "Anatoliy Knyazev is a Member of the Board of Directors and Co-founder of EXANTE and CMNO Ltd. <br><br>Anatoliy is leading the Technology side of the business, including in-house R&D and digital security. Also, he is in charge of Marketing/PR operations and Brand building. <br>He is a recognised blockchain expert and cryptocurrency visionary, frequent guest speaker at industry events and author of publications. <br><br>In 2012, together with his partners at EXANTE, he founded the world’s first cryptocurrency hedge fund Bitcoin Fund with shares tied to the market price of Bitcoin. According to Bloomberg, this fund became the world’s most profitable hedge fund. <br><br>Anatoliy holds a Master’s degree in Mathematics and Computer Science.",
    },
    {
      url: "ge",
      img: "eglitis.jpg",
      name: "Gatis Eglitis",
      position: "EXECUTIVE DIRECTOR",
      desc: "Gatis Eglitis is a Member of the Board of Directors and Co-Founder of EXANTE. He is also the Managing Partner of XHK Limited and EXT LTD.<br><br> At EXANTE, Gatis is supervising Corporate Finances and Strategic Investments, as well as overseeing Business Operations including Risks, Trading, Counterparty management, and so on.<br><br> Gatis is a seasoned economist with a sound commercial background from Saxo Bank, where he worked in Institutional Sales.<br><br> He holds a Master in Finance and Strategic Management. Gatis is a well-known cryptocurrency expert and he is a frequent guest speaker at corporate events and a member of several professional associations.",
    },
  ]

  return (
    <>
      <div className="anchor" id="directors"></div>
      <section className={styles.board}>
        <Container>
          <h2>Board of Directors</h2>

          {items.map((item, index) => {
            return (
              <div key={index} className={styles.board__item}>
                <Link href={`/people/${item.url}`}>
                  <img
                    loading="lazy"
                    src={`/images/persons/${item.img}`}
                    alt={item.name}
                  />
                  <div className={styles.board__text}>
                    <strong>{item.name}</strong>
                    <span>{item.position}</span>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.desc,
                        // __html: item.desc.slice(0, 250) + "...",
                      }}
                    ></p>
                  </div>
                </Link>
              </div>
            )
          })}
        </Container>
      </section>
    </>
  )
}
