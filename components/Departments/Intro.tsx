"use client"
import BoxLink from "../BoxLink/BoxLink"
import { Container, Row, Col } from "react-grid-system"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import styles from "./Intro.module.scss"
import type { Department } from "@/types"

export default function Intro({
  department,
  items,
}: {
  department: Department
  items: Department[]
}) {
  // const departments = [
  //   {
  //     name: "HR Team",
  //     url: "#hr-talent-acquisition",
  //   },
  //   {
  //     name: "Sales Team",
  //     url: "#sales",
  //   },
  //   {
  //     name: "Marketing",
  //     url: "#marketing-pr",
  //   },
  //   {
  //     name: "Help Desk",
  //     url: "#business-operations",
  //   },
  // ]
  let departments: any[] = []
  departments = items.slice(-4).map((item) => {
    return {
      name: item.long_title || item.title,
      url: `#${item.meta.slug}`,
    }
  })

  return (
    <section className={styles.intro}>
      <Container>
        <Breadcrumbs items={[{ name: department.title || "Departments" }]} />
        <Row className={styles.intro__head}>
          {/* <Col xs={5}> */}
          <h1>{department.long_title || "EXANTE Family"}</h1>
          {department.body ? (
            <div
              className={styles.intro__desc}
              dangerouslySetInnerHTML={{ __html: department.body }}
            ></div>
          ) : (
            <div className={styles.intro__desc}>
              <p>
                Each EXANTE employee contributes to the future of the company as
                we continue to provide clients with professional services and
                high-tech products.
              </p>
              <p>
                We are proud to be a global team of professionals catering to
                all business aspects.
              </p>
            </div>
          )}
          {/* <p>
              Each EXANTE employee contributes to the future of the company as
              we continue to provide clients with professional services and
              high-tech products.
            </p>
          </Col>
          <Col xs={1}></Col>
          <Col xs={6} className={styles.intro__desc}>
            We are proud to be a global team of professionals catering to all
            business aspects.
          </Col> */}
        </Row>
        {departments.length > 0 && (
          <Row className={styles.intro__links}>
            {departments.map((item) => {
              return (
                <Col xs={3} key={item.url}>
                  <BoxLink item={item} />
                </Col>
              )
            })}
          </Row>
        )}
      </Container>
    </section>
  )
}
