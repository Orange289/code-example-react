import { Container } from "react-grid-system"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import BoxLink from "../BoxLink/BoxLink"
import Link from "next/link"
import styles from "./Intro.module.scss"

export const items = [
  {
    name: "Hybrid or Remote Work",
    url: "#hybridremote",
  },
  {
    name: "Public Holiday Calendar",
    url: "#holiday-calendar",
  },
  {
    name: "Payroll",
    url: "#payroll-policy",
  },
  // {
  //   name: "Working hours",
  //   url: "#working-hours",
  // },
  // {
  //   name: "Payments",
  //   url: "#payroll-policy",
  // },

  {
    name: "Benefits",
    url: "#benefits",
  },
  {
    name: "Performance<br>Management Process",
    url: "#performance",
  },
  {
    name: "Policies",
    url: "#policies",
  },
]

export default function Intro() {
  return (
    <section className={styles.intro}>
      <Container>
        <Breadcrumbs items={[{ name: "Working here" }]} />
        <h1>Working here</h1>
        <ul className={styles.intro__items}>
          {items.map((item, index) => {
            return (
              <li className={styles.intro__item} key={index}>
                <Link href={item.url}>
                  <strong
                    dangerouslySetInnerHTML={{ __html: item.name }}
                  ></strong>
                </Link>
                {/* <BoxLink item={item} /> */}
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
