"use client"

import { Container, Row, Col } from "react-grid-system"
import styles from "./Ceo.module.scss"

export default function Ceo() {
  return (
    <section className={styles.ceo}>
      <Container className={styles.ceo__container}>
        <Row className={styles.ceo__row}>
          <Col xs={6} className={styles.ceo__title}>
            {/* <h3>
              Welcome message<br></br>from the CEO
            </h3> */}
          </Col>
          <Col xs={6}>
            <p>
              When we first founded the company in 2011, we had no idea what the
              journey would be like.
            </p>
            <p>
              The first couple of years of a company’s success is considered a
              time for creating traction. We realised that our vision and model
              might benefit not only the founders but also an elite group of
              early adopters. It was only an experiment proving our vision had a
              legitimate place in the world.
            </p>
            <p>
              The next few years are called validation — honing the product and
              building value through the constant optimisation of technical and
              business processes. The market responded positively, and we
              continued to grow by developing our offerings and outreach.
            </p>
            <p>
              The irony is that it is only now when we’ve hit a decade, that we
              clearly see all those stages were just the beginning. After ten
              years, we can confidently say we have solid foundations.
            </p>
            <p>
              However, we know we cannot rest on our laurels. We still have a
              lot of work to do so we can get onto the next level.
            </p>
            <div className={styles.ceo__signature}>
              <strong>Alexey Kirienko</strong>
              <span>CEO, EXANTE</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
