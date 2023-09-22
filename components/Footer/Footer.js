"use client" // node_modules/react-grid-system/build/grid/Row/index.js (13:55) @ createContext - error createContext only works in Client Components.

import styles from "./Footer.module.scss"
import Social from "../Social/Social"
import { Container, Row, Col } from "react-grid-system"
import Link from "next/link"
import version from "@/../version.json"

export default function Footer() {
  const socials = [
    {
      label: "EXANTE on Facebook",
      href: "https://facebook.com/exante.global",
      icon: "facebook",
    },
    {
      label: "EXANTE on Linkedin",
      href: "https://www.linkedin.com/company/exante-ltd",
      icon: "linkedin",
    },
    {
      label: "EXANTE on Youtube",
      href: "http://www.youtube.com/user/exantevideo",
      icon: "youtube",
    },
    {
      label: "EXANTE on Twitter",
      href: "https://twitter.com/EXANTE_EU",
      icon: "twitter",
    },
    {
      label: "EXANTE on Instagram",
      href: "https://www.instagram.com/exante_brokerage/",
      icon: "instagram",
    },
    {
      label: "EXANTE rss",
      href: "https://exante.eu/news/rss/",
      icon: "rss",
    },
  ]

  const links = [
    [
      {
        url: "/news",
        name: "News",
      },
      {
        url: "/about",
        name: "Company and Culture",
      },
      {
        url: "/about/#principles",
        name: "Guiding Principles",
      },
      {
        url: "/about/#history",
        name: "Our History",
      },
      {
        url: "/about/#values",
        name: "Company Values",
      },
      {
        url: "/people",
        name: "People",
      },
    ],
    [
      {
        url: "/about/#directors",
        name: "Board of Directors",
      },
      {
        url: "/about/working-here",
        name: "Working Here",
      },
      {
        url: "/about/products",
        name: "Products",
      },
      {
        url: "https://careers.exante.eu/",
        name: "Vacancies",
        external: true,
      },
      {
        url: "/getting-started/#welcome",
        name: "Welcome on Board",
      },
      {
        url: "/getting-started/#systems",
        name: "Systems We Use",
      },
    ],
    [
      {
        url: "/getting-started/#checklist",
        name: "Onboarding Checklist",
      },
      {
        url: "/getting-started/#education",
        name: "Learning Plans",
      },
      {
        url: "/getting-started/#contacts",
        name: "Help",
      },
      {
        url: "/departments",
        name: "Departments",
      },
    ],
  ]

  return (
    <footer className={styles.footer}>
      <Container className="container">
        <Row>
          <Col xs={5} className={styles.footer__text}>
            <ul className={styles.footer__socials}>
              {socials.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className={styles.footer__social}
                      target="_blank"
                    >
                      <img
                        loading="lazy"
                        src={`/images/icons/${item.icon}-circle.svg`}
                        alt=""
                      />
                      {/* <Social name={item.icon} /> */}
                    </a>
                  </li>
                )
              })}
            </ul>
            <div className={styles.footer__about}>
              <p>
                EXANTE&apos;s corporate portal is a service open to all
                employees. The portal provides access to all valuable
                information on the working processes and corporate data: people,
                departments, services, requesting access and support, policies,
                documents, news, events, and more. Please&nbsp;bear in mind it’s
                for internal use only.
              </p>
              <p>
                If you have questions or suggestions regarding the corporate
                portal, please contact us at{" "}
                <a
                  className={styles.footer__email}
                  href="mailto:marketing_web@exante.eu"
                >
                  marketing_web@exante.eu
                </a>
              </p>
            </div>
          </Col>
          <Col xs={1}></Col>
          <Col xs={6} className={styles.footer__links}>
            <Row className={styles.footer__blocks}>
              {links.map((item, index) => {
                return (
                  <Col xs={4} key={index}>
                    <ul>
                      {item.map((el, elIndex) => {
                        return (
                          <li key={elIndex}>
                            {el.external ? (
                              <a href={el.url} target="_blank">
                                {el.name}
                              </a>
                            ) : (
                              <Link href={el.url}>{el.name}</Link>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
        <div className={styles.footer__version} aria-hidden="true">
          Version {version.version}
        </div>
      </Container>
    </footer>
  )
}
