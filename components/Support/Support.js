"use client"
import { Container, Row, Col } from "react-grid-system"
import RegularButton from "../RegularButton/RegularButton"
import Icon from "../Icon/Icon"
import styles from "./Support.module.scss"

export default function Support({ supportItems, otherItems, incidentItems }) {
  return (
    <section className={styles.support}>
      <Container>
        <h2>Requesting Access & IT User Support</h2>
        <Row>
          {supportItems.map((item, index) => {
            return (
              <Col key={index} xs={3} className={styles.support__item}>
                <div className={styles.support__img}>
                  <img
                    loading="lazy"
                    src={`/images/icons/${item.icon}`}
                    alt={item.title}
                  />
                </div>

                <a
                  href={item.url ? item.url : ""}
                  className={styles.support__itemtext}
                  target={item.url && "_blank"}
                >
                  <strong>{item.title}</strong>
                  <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                </a>
              </Col>
            )
          })}
        </Row>

        <h2>Other Requests</h2>
        <Row>
          {otherItems.map((item, index) => {
            return (
              <Col key={index} xs={3} className={styles.support__item}>
                <div className={styles.support__img}>
                  <Icon icon={item.icon} url="/images/icons/menu-sprite.svg" />
                </div>
                {/* <img src={`/images/icons/${item.icon}`} alt={item.title} /> */}
                <a
                  href={item.url ? item.url : ""}
                  className={styles.support__itemtext}
                  target={item.url && "_blank"}
                >
                  <strong>{item.title}</strong>
                  <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                </a>
              </Col>
            )
          })}
          <Col xs={3} className={styles.support__note}>
            <p>
              If you have a question or have<br></br>a request from other
              departments, use the Jira Ticketing system.
            </p>
            <RegularButton
              className={styles.support__requestbtn}
              btnStyle="white"
              link="https://jira.exante.eu/plugins/servlet/desk/site/ja"
              external
              text="Make a Jira request"
            />
          </Col>
        </Row>

        <Row className={styles.support__incidentrow}>
          <Col xs={12}>
            <div className={styles.support__incident}>
              {/* <Row>
                <Col xs={4}> */}
              <h2>Report an Incident</h2>
              {/* </Col> */}
              {/* <Col xs={8}>
              <p className={styles.support__incidentdesc}>
                In case you need to request any general IT help, system accesses
                or<br></br>order some editional equipment, please, create a
                ticket via IT Service Desk in Jira
              </p>
            </Col> */}
              {/* </Row> */}
              <Row>
                {incidentItems.map((item, index) => {
                  return (
                    <Col
                      key={index}
                      xs={4}
                      className={`${styles.support__item} ${styles.incident}`}
                    >
                      <img
                        loading="lazy"
                        src={`/images/icons/${item.icon}`}
                        alt={item.title}
                      />
                      <a
                        href={item.url}
                        className={styles.support__itemtext}
                        target="_blank"
                      >
                        <strong>{item.title}</strong>
                        <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                      </a>
                    </Col>
                  )
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
