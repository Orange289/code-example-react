import { Container, Row, Col } from "react-grid-system"
import styles from "./Velexa.module.scss"

export default function Velexa() {
  return (
    <section className={styles.velexa} id="velexa">
      <Container className={styles.velexa__container}>
        <img
          loading="lazy"
          className={styles.velexa__triangle}
          src="/images/triangle-gradient.png"
          alt="triangle background"
        />
        <Row>
          <Col xs={6} className={styles.velexa__content}>
            <h2>Velexa</h2>
            <p>
              Velexa’s B2B investing platform as a service offers a&nbsp;full
              set of white-label front-end channels, a&nbsp;brokerage platform
              and post-trading services. With Velexa, financial and
              non-financial institutions can launch investing services from
              scratch or enhance their existing offering within weeks. Intending
              to make investing available to everyone, Velexa delivers embedded
              and standalone investing capabilities for retail and private
              banks, neobanks, brokerages, and disruptive players like TelCos
              and big retailers.
            </p>
            <a
              href="https://velexa.com/"
              target="_blank"
              className={styles.velexa__link}
            >
              To Velexa website
            </a>
          </Col>
          {/* <Col xs={1}></Col> */}
          <Col xs={6} className={styles.velexa__image}>
            <img
              loading="lazy"
              src="/images/velexa-img.png"
              alt="velexa image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
