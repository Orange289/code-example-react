import { Container, Row, Col } from "react-grid-system"
import styles from "./Gbxp.module.scss"

export default function Gbxp() {
  return (
    <section className={styles.gbxp} id="gbxp">
      <Container>
        <Row className={styles.gbxp__row}>
          <Col xs={5}>
            <h2>
              EXANTE Payments<br></br>Powered by GBXP LTD
            </h2>
            <p>
              London-headquartered, FCA-licensed EXANTE Payments (GBXP) provides
              a transparent solution to receive, transfer and spend funds.
            </p>
            <p>
              GBXP LTD is an electronic money institution focused on
              cross-border payments. Incorporated in the United Kingdom, GBXP is
              authorised and regulated by the Financial Conduct Authority.
            </p>
            <a href="https://gbxp.uk/" target="_blank">
              To GBXP website
            </a>
          </Col>
          <Col xs={1}></Col>
          <Col xs={6} className={styles.gbxp__img}>
            <img loading="lazy" src="/images/gbxp-card.png" alt="GBXP card" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
