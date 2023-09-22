"use client"
import { Container, Row, Col } from "react-grid-system"
import RegularButton from "../RegularButton/RegularButton"
import styles from "./Share.module.scss"

export default function Share() {
  return (
    <section className={styles.share}>
      <Container>
        <Row>
          <Col xs={5} className={styles.share__left}>
            <h2>Share Your Ideas</h2>
            <p>We appreciate your feedback.</p>
          </Col>
          <Col xs={1}></Col>
          <Col xs={6} className={styles.share__text}>
            <p>
              Have an idea or suggestion on how to improve our products?
              <br></br>Give us a shout!
            </p>
            <RegularButton
              external
              text="Share your ideas"
              link="https://jira.exante.eu/plugins/servlet/desk/project/IDEA/create/11800/11000"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
