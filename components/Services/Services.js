"use client"
import { Container, Row, Col } from "react-grid-system"
import styles from "./Services.module.scss"
import { useSession } from "next-auth/react"

export default function Services({ items }) {
  const { data } = useSession()

  return (
    <section className={styles.services}>
      <Container>
        <h1>
          <strong>{data.user.name.split(" ")[0]}</strong>, welcome
          to&nbsp;the&nbsp;EXANTE family!
        </h1>
        <p className={styles.services__desc}>
          This portal is a tool to help you achieve great results.<br></br>It is
          the central hub to exchange information and collaborate.
        </p>
        <div className={styles.services__row}>
          {items.map((item, index) => {
            return (
              <a
                href={item.url}
                key={index}
                target="_blank"
                className={styles.services__item}
              >
                <img
                  loading="lazy"
                  src={`/images/icons/${item.icon}`}
                  alt={item.name}
                />

                <strong className={styles.services__text}>{item.name}</strong>

                {/* <p dangerouslySetInnerHTML={{ __html: item.desc }}></p> */}
              </a>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
