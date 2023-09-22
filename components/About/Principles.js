"use client"

import { Container, Row, Col } from "react-grid-system"
import IconItem from "../IconItem/IconItem"
import styles from "./Principles.module.scss"

export default function Principles() {
  const items = [
    {
      img: "rocket.svg",
      name: "We believe freedom is an inherent right",
      desc: "The globalisation of capital flows, in combination with digitisation, enables capital markets to be constantly in motion. In this day and age, as capital and information are intrinsically the same, people, businesses, and AI should be able to freely connect and transact with each other, without boundaries and limits.<br><br>We give our clients access to comprehensive, global financial instruments and free allocation of capital through our robust and cutting-edge platforms. Knowing that their data and trades are safe and private, they are empowered to invest better.",
    },
    {
      img: "defend.svg",
      name: "We defend privacy",
      desc: "EXANTE is not only a company that values privacy, but a private club, a place that gives our clients an edge, a place for them to call their own. We limit the collection of private customer data, which we only share for compliance purposes. What belongs to our clients, stays with our clients. Our clients are our partners, not our product, so we only profit when you profit.<br><br>As a privately-owned company, we decide the best for customers and shareholders, not chained to the expectations of external investors and the public. Because of this freedom, EXANTE is here to build for the long term.",
    },
    {
      img: "lightbulb.svg",
      name: "We are catalysts",
      desc: "It’s not enough to create a product or provide a service that is innovative; we have a responsibility to challenge the status quo, inspire incumbents to do better and move the needle in financial services. It is only these types of outputs that are truly innovative, therefore, enduring in nature. This proactive approach is not driven by flimsy, external trends, but by the daily use of our products by our executives and employees.<br><br>We drive innovation based on our own experiences, observations, and those of our esteemed clients.",
    },
    {
      img: "diamond.svg",
      name: "We cater for our customers to an unprecedented degree",
      desc: "Our esteemed clients operate at the highest degree of excellence, and they expect the same from us. From our technology to our customer service, we provide a private, personalised, premium experience to customers. Our members reach out whenever, however, via whatever means in their native language.<br><br>With dedicated account managers, 24/7 customer service, and real-person response in under three minutes, our relationships are pivotal in the success of EXANTE.",
    },
  ]

  return (
    <>
      <div className="anchor" id="principles"></div>
      <section className={styles.principles}>
        <Container>
          <h2>Guiding Principles</h2>
          <Row>
            {items.map((item, index) => {
              return (
                <Col xs={6} key={index} className={styles.principles__item}>
                  <IconItem item={item} />
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
    </>
  )
}
