import { Container, Row, Col } from "react-grid-system"
import styles from "./Brokerage.module.scss"

export default function Brokerage() {
  return (
    <section className={styles.brokerage} id="brokerage">
      <Container>
        <Row>
          <Col xs={6} className={styles.brokerage__item}>
            <h2>EXANTE Brokerage</h2>
            <p>
              The cornerstone of the EXANTE brokerage, our proprietary trading
              platform enables direct market access to a wide range of financial
              instruments, including stocks, ETFs, bonds, futures, options,
              currencies, and metals from a single multi-currency account. The
              EXANTE trading platform is tailored to professional traders,
              brokers, asset managers, banks, and other institutional clients.
              It is a convenient and safe trading tool with an easy-to-use
              interface and fast order execution, providing instant access to
              all financial markets and instruments.
            </p>
            <a
              href="https://exante.eu/"
              target="_blank"
              className={styles.brokerage__link}
            >
              To EXANTE website
            </a>
          </Col>
          <Col
            xs={6}
            className={`${styles.brokerage__item} ${styles.platform}`}
          >
            <img
              loading="lazy"
              src="/images/brokerage-devices.png"
              alt="brokerage devices"
            />
            <strong>User-Friendly Platform</strong>
            <p>
              EXANTE’s intuitive interface allows you to make trades right from
              the chart, arrange modules at your convenience and switch between
              colour schemes. The platform offers a handy modular structure. Our
              highlights include Basket Trader, Market Depth, Option Board, Bond
              Screener, and other sleek modules to facilitate trading.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
