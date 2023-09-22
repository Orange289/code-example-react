import { Container, Row, Col } from "react-grid-system"
import IconItem from "../IconItem/IconItem"
import styles from "./Velexa.module.scss"

export default function VelexaItems() {
  const items = [
    {
      img: "api.svg",
      name: "Investing API",
      desc: "Designed for clients that wish to embed selected platform resources (mainly investing data<br>and functionality) into their existing banking channels and apps. A simple example would be to add the ability to trade cryptocurrencies to&nbsp;an&nbsp;existing investing app of a bank or a broker.<br>The solution can be implemented within<br>2 weeks.",
    },
    {
      img: "service.svg",
      name: "Investing-as-a-service",
      desc: "A ready-to-use investing solution that combines technological capabilities, white-label front-end channels and the execution, post-trading and back-office processes outsourced to Velexa on an as-a-service basis (referred to as BPaaS). Accelerates time-to-market, and enables client institutions to focus on customer engagement and revenue growth.",
    },
    {
      img: "platform.svg",
      name: "Investing Platform",
      desc: "The terminal is for clients wishing to tailor their own instance of the full front-to-back investing platform and leverage resources provided by Velexa and any third party. It brings to bear the platform’s openness and modularity, enabling client institutions to create a highly differentiated investing experience and fully control its evolution over time.",
    },
  ]

  return (
    <section className={styles.velexaItems}>
      <Container>
        <Row className={styles.velexaItems__row}>
          {items.map((item, index) => {
            return (
              <Col xs={4} key={index}>
                <IconItem item={item} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}
