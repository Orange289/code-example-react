import { Container, Row, Col } from "react-grid-system"
import styles from "./Calendar.module.scss"

export default function Calendar() {
  return (
    <>
      <div className="anchor" id="holiday-calendar"></div>
      <section className={styles.calendar}>
        <Container>
          <Row>
            <Col xs={6}>
              <h2>Public Holiday Calendar</h2>
              <p className={styles.calendar__important}>
                A Public Holiday Calendar<br></br>is a collection of public
                holidays valid&nbsp;for&nbsp;different locations<br></br>and it
                is updated around the turn of&nbsp;the&nbsp;year.
              </p>
              <a
                href="https://confluence.exante.eu/display/HA/Public+Holidays+2023"
                target="_blank"
              >
                See details here
              </a>
            </Col>

            <Col xs={6} className={styles.calendar__right}>
              <p>
                Public holidays apply in accordance with local legislation and
                in addition to an employee’s annual leave.
              </p>
              <div className={styles.calendar__note}>
                Please ensure you&apos;ve notified your manager in writing ahead
                of time about your upcoming public holiday, and remember to mark
                yourself as &quot;Out of Office&quot; on your Google calendar.
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
