import { Container } from "react-grid-system"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import styles from "./Intro.module.scss"

export default function Intro() {
  const anchors = [
    {
      name: "EXANTE Brokerage",
      url: "#brokerage",
    },
    {
      name: "VELEXA",
      url: "#velexa",
    },
    {
      name: "GBXP",
      url: "#gbxp",
    },
  ]

  return (
    <section className={styles.intro}>
      <Container>
        <Breadcrumbs items={[{ name: "Products" }]} />
        <h1>Products</h1>
        <p>
          Learn more about the EXANTE trading platform, Velexa
          Investment-as-a-Service and EXANTE Wealth / GBXP.
        </p>
        <ul className={styles.intro__anchors}>
          {anchors.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
