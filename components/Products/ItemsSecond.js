import { Container, Row, Col } from "react-grid-system"
import IconItem from "../IconItem/IconItem"
import styles from "./Items.module.scss"

export default function ItemsSecond() {
  const items = [
    {
      img: "robust-regulation.svg",
      name: "Robust regulation",
      desc: "FCA Authorised Electronic<br>Money Institution<br>(Reference number: 900941).",
    },
    {
      img: "investing-platform.svg",
      name: "Transfers and payments",
      desc: "<ul><li>Make instant third-party transfers</li><li>Make contactless purchases</li><li>Use the payment card linked to your account</li><li>Withdraw cash from your payment account in local currencies</li><li>Check and top up your balance through the EXANTE Client’s Area</li></ul>",
    },
  ]

  return (
    <section className={`${styles.items} ${styles.second}`}>
      <Container>
        <Row>
          <Col xs={3}>
            <IconItem item={items[0]} />
          </Col>
          <Col xs={1} />
          <Col sx={8}>
            <IconItem item={items[1]} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
