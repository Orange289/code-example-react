import { Container } from "react-grid-system"
import Icon from "../Icon/Icon"
import styles from "./Benefits.module.scss"

export default function Benefits() {
  const permanentItems = [
    {
      img: "development",
      name: "Professional<br>development",
      url: "https://confluence.exante.eu/display/HA/Co-financing+Program+for+Professional+Development",
    },
    {
      img: "remote",
      name: "Remote<br>Work",
      url: "https://confluence.exante.eu/display/HA/Remote+Working+Policy",
    },
    {
      img: "salary",
      name: "Advance Salary<br>Payment",
      url: "https://confluence.exante.eu/display/HA/Advance+Salary+Payment+Policy",
    },
    {
      img: "lunch",
      name: "Office Lunch<br>& Snacks",
      url: "https://confluence.exante.eu/display/O2/Lunch+Ordering+Policy",
    },
    {
      img: "bonus",
      name: "Referral<br>Bonus",
      url: "https://confluence.exante.eu/display/HA/Employee+Referral+Policy",
    },
    {
      img: "trading",
      name: "Employee Trading<br>Account",
      url: "https://confluence.exante.eu/display/HA/Employee+trading+account+opening+policy",
    },
    {
      img: "celebrations",
      name: "Special<br>Celebrations",
      url: "https://confluence.exante.eu/display/HA/Special+Celebrations",
    },
  ]

  const flexibleItems = [
    {
      img: "health",
      name: "Group Health<br>Insurance Plan",
      url: "https://confluence.exante.eu/display/HA/Health+Insurance",
    },
    {
      img: "leavedays",
      name: "5 Additional Annual<br>Leave Days",
      url: "https://confluence.exante.eu/display/HA/5+additional+annual+leave+days",
    },
    {
      img: "fitness",
      name: "Fitness<br>Allowance",
      url: "https://confluence.exante.eu/display/HA/Fitness+Allowance",
    },
  ]

  return (
    <>
      <div className="anchor" id="benefits"></div>
      <section className={styles.benefits}>
        <Container className={styles.benefits__container}>
          <div className={styles.benefits__head}>
            <h2>Benefits</h2>
            <p>
              EXANTE offers a comprehensive benefits package to all its staff
              members, encompassing a set of standard benefits applicable to all
              employees, as well as flexible benefits that employees can choose
              based on their preferences:
            </p>
          </div>
          <ul className={styles.benefits__items}>
            <li className={styles.benefits__itemtitle}>
              Permanent<br></br>benefits
            </li>
            {permanentItems.map((item, index) => {
              return (
                <li key={index} className={styles.benefits__item}>
                  <a href={item.url} target="_blank">
                    <Icon
                      icon={item.img}
                      url="/images/icons/benefits-sprite.svg"
                    />
                    <strong
                      dangerouslySetInnerHTML={{ __html: item.name }}
                    ></strong>
                  </a>
                </li>
              )
            })}
          </ul>
          <ul className={styles.benefits__items}>
            <li className={styles.benefits__itemtitle}>
              Flexible<br></br>benefits
              <p>
                choose ONE out<br></br>of 3 types of benefits<br></br>to best
                meet your needs
              </p>
            </li>
            {flexibleItems.map((item, index) => {
              return (
                <li key={index} className={styles.benefits__item}>
                  <a href={item.url} target="_blank">
                    <Icon
                      icon={item.img}
                      url="/images/icons/benefits-sprite.svg"
                    />
                    <strong
                      dangerouslySetInnerHTML={{ __html: item.name }}
                    ></strong>
                  </a>
                </li>
              )
            })}
          </ul>
        </Container>
      </section>
    </>
  )
}
