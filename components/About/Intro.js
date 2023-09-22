"use client"

import { Container, Row, Col } from "react-grid-system"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import styles from "./Intro.module.scss"
import CountUp from "react-countup"

export default function Intro({ items }) {
  return (
    <section className={styles.intro}>
      <Container>
        <Breadcrumbs items={[{ name: "About" }]} />
        <h1>Company & Culture</h1>
        <Row>
          <Col xs={5}>
            <p>
              EXANTE is a wealthtech company that provides centralised trading
              solutions and B2B financial infrastructure that helps create value
              through technology.
            </p>
            <p>
              Our proprietary trading platform enables direct market access to a
              wide range of financial instruments, including stocks, ETFs,
              bonds, futures, and options from a single multi-currency account.
            </p>
          </Col>
          <Col xs={1}></Col>
          {items && (
            <Col xs={6} className={styles.intro__numbers}>
              {items.map((item, index) => {
                return (
                  <div key={index} className={styles.intro__number}>
                    <CountUp
                      duration={1}
                      className={styles.intro__counter}
                      end={item.num}
                      suffix={item.suffix && item.suffix}
                      prefix={item.prefix && item.prefix}
                      decimals={item.decimals && item.decimals}
                    />
                    <span>{item.label}</span>
                  </div>
                )
              })}
            </Col>
          )}
        </Row>
      </Container>
    </section>
  )
}
