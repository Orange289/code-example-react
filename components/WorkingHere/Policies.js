import { Container, Row, Col } from "react-grid-system"
import styles from "./Policies.module.scss"

export default function Policies() {
  const items = [
    {
      name: "Code of Conduct and Ethics",
      desc: "<p>Corporate Etiquette refers to rules an individual must follow at work. One must respect the organisation and maintain the decorum of&nbsp;the&nbsp;place. Behaving well in the workplace to earn respect and appreciation is important.</p>",
      links: [
        {
          name: "Code of Conduct & Ethics",
          url: "https://confluence.exante.eu/display/HA/EXANTE+Code+of+Conduct+and+Ethics",
        },
        {
          name: "Corporate Etiquette",
          url: "https://confluence.exante.eu/display/HA/EXANTE+Corporate+Etiquette",
        },
        {
          name: "Code of Conduct for Associated (Social<br>Media) Accounts",
          url: "https://confluence.exante.eu/display/MAR/EXANTE+Code+of+Conduct+for+Associated+Accounts",
        },
      ],
    },

    {
      name: "Digital Security Policies",
      desc: "<p>Keeping EXANTE secure and compliant continues to be a top priority</p>",
      links: [
        {
          name: "Digital Security",
          url: "https://confluence.exante.eu/display/HA/Digital+Security+Policy",
        },
        {
          name: "Information Security",
          url: "https://confluence.exante.eu/display/INFOSEC/Information+Security+Policy",
        },
        {
          name: "Email & Signature Standard",
          url: "https://confluence.exante.eu/pages/viewpage.action?pageId=1796052290",
        },
        {
          name: "Laptop and other tech equipment",
          url: "https://confluence.exante.eu/display/HA/Laptop+and+other+tech+equipment+policy",
        },
      ],
    },
    {
      name: "Annual Leave Policy",
      desc: '<p>All the ins and outs of taking your annual leave and getting time off are detailed right <a href="https://confluence.exante.eu/display/HA/Annual+Leave+and+Time+Off+Policy " target="_blank">here</a>. Just give your manager and your team a heads-up before you jet off on your holiday adventure. When you&apos;re out of the office, BambooHR is your go-to tool. And if you&apos;re planning an extended escape, touch base with your manager, pop in that "Out of Office" notice on your Google calendar, and make sure your workload is covered by your designated backup.</p>',
      links: [
        {
          name: "How to request time off",
          url: "https://confluence.exante.eu/display/HA/Annual+Leave+and+Time+Off+Policy",
        },
        {
          name: "Time off Questions",
          url: "https://confluence.exante.eu/display/HA/3.+Time+OFF+Questions",
        },
      ],
    },
    {
      name: "Other Policies",
      desc: "<p>At EXANTE, we've put together the HR Policies & Procedures section to lend you a hand with your day-to-day tasks. From the nitty-gritty standard operating procedures and our Code of Conduct and Ethics, to IT Security Policy, HR self-service, and Performance management – these guidelines are your compass for staying on the right track and being compliant at all times.</p>",
      links: [
        {
          name: "IT Security Policy",
          url: "https://confluence.exante.eu/display/INFOSEC/Information+Security+Policy",
        },
        {
          name: "Performance Management",
          url: "https://confluence.exante.eu/display/HA/Performance+Management+Policy",
        },
        {
          name: "HR Self-Service",
          url: "https://confluence.exante.eu/display/HA/How+to+request+HR+Service",
        },
      ],
    },
  ]

  return (
    <>
      <div className="anchor" id="policies"></div>
      <section className={styles.policies}>
        <Container>
          <h2>Policies</h2>
          {/* <Row className={styles.policies__row}> */}
          {items.map((item, index) => {
            return (
              <div key={index} className={styles.policies__col}>
                <div className={styles.policies__item}>
                  <h3>{item.name}</h3>
                  <div
                    className={styles.policies__desc}
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  ></div>
                  <ul className={styles.policies__links}>
                    {item.links.map((link, linkIndex) => {
                      return (
                        <a href={link.url} key={linkIndex} target="_blank">
                          <span
                            dangerouslySetInnerHTML={{ __html: link.name }}
                          ></span>
                        </a>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
          {/* </Row> */}
        </Container>
      </section>
    </>
  )
}
