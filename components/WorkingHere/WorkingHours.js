import { Container, Row, Col } from "react-grid-system"
import styles from "./WorkingHours.module.scss"

export default function WorkingHours() {
  const items = [
    {
      num: "40",
      desc: "working hours<br><b>a week</b>",
    },
    // {
    //   num: "8",
    //   desc: "working hours<br><b>a day</b>",
    // },
    {
      num: "1",
      desc: "hours a day<br><b>for breaks</b>",
    },
  ]

  return (
    <>
      <div className="anchor" id="working-hours"></div>
      <section className={styles.workinghours}>
        <Container>
          <Row>
            <Col xs={5.5}>
              <h2>Working hours</h2>
              <p>
                The standard working week at EXANTE is 40 hours, which breaks
                down to roughly 7 hours per day working (35 hours per week)
                and&nbsp;one hour for breaks (five hours per week). This should
                include at&nbsp;least one break of twenty minutes or more.
              </p>
              <div className={styles.workinghours__note}>
                <img
                  loading="lazy"
                  src="/images/icons/attention.svg"
                  alt="attention icon"
                />
                Staff members are responsible for ensuring they complete their
                working hours as defined in their contracts whilst working
                remotely.
              </div>
            </Col>
            <Col xs={0.5}></Col>
            <Col xs={6}>
              <ul className={styles.workinghours__items}>
                {items.map((item, index) => {
                  return (
                    <li key={index}>
                      <strong>{item.num}</strong>
                      <span
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      ></span>
                    </li>
                  )
                })}
              </ul>
              <div className={styles.workinghours__note}>
                <img
                  loading="lazy"
                  src="/images/icons/attention.svg"
                  alt="attention icon"
                />
                Staff are responsible for ensuring they take their rest breaks
                as defined<br></br>in their contracts of employment.
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
