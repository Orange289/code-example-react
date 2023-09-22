import { Container, Row, Col } from "react-grid-system"
import styles from "./Performance.module.scss"

export default function Performance() {
  return (
    <>
      <div className="anchor" id="performance"></div>
      <section className={styles.performance}>
        <Container>
          <Row>
            <Col xs={5.5}>
              <h2>
                Performance<br></br>Management Process
              </h2>
              <div className={styles.performance__important}>
                We value our people<br></br>and are invested in your success.
              </div>
              <p>
                We offer consistent feedback to each individual through a mix of
                structured evaluations and casual conversations with managers.
                By fostering open dialogue centred around job roles,
                anticipations, and achievements, we not only expedite our
                collective company objectives but also nurture the growth and
                capabilities of our team members.
              </p>
            </Col>
            <Col xs={0.5}></Col>
            <Col xs={6}>
              <p>
                EXANTE conducts company-wide performance reviews. The
                Performance Management Cycle includes Planning, Checking-In, and
                Review throughout the year.
              </p>
              <p>
                Managers are encouraged to informally discuss professional
                <br></br>development, provide ongoing performance feedback
                between
                <br></br>formal reviews, and discuss any concerns or questions
                that arise immediately.
              </p>
              <p>
                Performance Management process including timeline and<br></br>
                guidance is described{" "}
                <a
                  href="https://confluence.exante.eu/display/HA/Performance+Management+Policy"
                  target="_blank"
                >
                  here
                </a>
                .
              </p>
              <a
                href="https://confluence.exante.eu/display/HA/Goal+Setting+Guide"
                target="_blank"
              >
                Goal setting
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
