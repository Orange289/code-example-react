import { Container, Row, Col } from "react-grid-system"
import styles from "./HybridRemote.module.scss"

export default function HybridRemote() {
  return (
    <>
      <div className="anchor" id="hybridremote"></div>
      <section className={styles.hybridremote}>
        <Container>
          <Row>
            <Col xs={5.5} className={styles.hybridremote__left}>
              <h2>Hybrid or Remote Work</h2>
              <p>
                Remote work at EXANTE is designed to offer the flexibility of
                work from home while also maintaining the on-site benefits.
              </p>
            </Col>
            <Col xs={0.5}></Col>
            <Col xs={6}>
              <p>
                Before allowing remote work, the company will carefully check if
                you can do your job from a distance. Your manager needs to agree
                that you can work from home without causing problems for the
                company.
              </p>
              <p>
                At EXANTE, we think that working from anywhere is great, but it
                also means you need to be reliable and stay in touch with your
                team and clients, no matter where you&apos;re working from.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
