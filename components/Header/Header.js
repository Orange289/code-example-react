"use client" // cause useState

import Image from "next/image"
import styles from "./Header.module.scss"
import { Container, Row, Col } from "react-grid-system"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import RegularButton from "../RegularButton/RegularButton"
import LinkBlock from "./LinkBlock"
import Link from "next/link"
import Menu from "./Menu"

export default function Header() {
  const [isStatic, setIsStatic] = useState(false)
  const [headerFixed, setHeaderFixed] = useState(false)
  const [isDark, setHeaderDark] = useState(false)

  const links = [
    {
      url: "/news",
      name: "NEWS",
    },
    {
      url: "/about",
      name: "about",
      links: [
        {
          name: "About Exante",
          url: "/about",
          sublinks: [
            {
              name: "Company and Culture",
              url: "/about",
            },
            {
              name: "Guiding Principles",
              url: "/about#principles",
            },
            {
              name: "Our History",
              url: "/about#history",
            },
            {
              name: "Company Values",
              url: "/about#values",
            },
            {
              name: "Board of Directors",
              url: "/about#directors",
            },
          ],
        },

        {
          name: "Working Here",
          url: "/about/working-here",
        },
        {
          name: "Products",
          url: "/about/products",
        },
        {
          name: "Vacancies",
          url: "https://careers.exante.eu/",
          external: true,
        },
      ],
    },
    {
      url: "/getting-started",
      name: "GETTING STARTED",
      sublinks: [
        {
          name: "Welcome on Board",
          url: "/getting-started#welcome",
        },
        {
          name: "Systems We Use",
          url: "/getting-started#systems",
        },
        {
          name: "Onboarding Checklist",
          url: "/getting-started#checklist",
        },
        {
          name: "Learning Plans",
          url: "/getting-started#education",
        },
        {
          name: "Help",
          url: "/getting-started#contacts",
        },
      ],
    },
    {
      url: "/departments/",
      name: "DEPARTMENTS",
    },
    {
      url: "/people",
      name: "PEOPLE",
    },
  ]

  const menuItems = [
    {
      name: "IT Services",
      links: [
        // {
        //   name: "IT Services",
        //   url: "https://jira.exante.eu/plugins/servlet/desk/category/its",
        // },

        {
          name: "IT Service Desk",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/3",
        },
        {
          name: "Infrastructure",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/8",
        },
        {
          name: "Production Stability",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/2",
        },
        {
          name: "Jira Automation",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/18",
        },
        {
          name: "Instrument Support (IS)",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/50",
        },
        {
          name: "Feature Request",
          url: "https://jira.exante.eu/plugins/servlet/desk/project/IDEA",
        },
        {
          name: "CF Jira Projects Support",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/17?requestGroup=143",
        },
      ],
    },
    {
      name: "Compliance",
      links: [
        {
          name: "AML & Onboarding",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/33",
        },
        {
          name: "Compliance Services",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/42",
        },
      ],
    },
    {
      name: "HR Services",
      links: [
        {
          name: "General Requests",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/11",
        },
        {
          name: "Education Requests",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/11?requestGroup=64",
        },
        {
          name: "Corporate Benefits Requests",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/11?requestGroup=82",
        },
        {
          name: "Emerald Club Requests",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/11?requestGroup=133",
        },
        {
          name: "HR Team Requests",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/11?requestGroup=34",
        },
      ],
    },
    {
      name: "Legal Services",
      links: [
        {
          name: "HR Issues",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/23/create/638",
        },
        {
          name: "Velexa Issues",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/23/create/637",
        },
        {
          name: "Marketing Projects",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/23/create/636",
        },
        {
          name: "IP Infringements",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/23/create/635",
        },
        {
          name: "Maintenance of Offices",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/23/create/634",
        },
        {
          name: "Incorporation of New Offices / Corporate Services",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/23/create/633",
        },
        {
          name: "Crypto",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/23/create/632",
        },
        {
          name: "Payment Services",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/23/create/631",
        },
        {
          name: "Investment Services",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/23/create/630",
        },
        {
          name: "To Draft / Review a Document",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/23/create/352",
        },
        {
          name: "Other Requests and Questions",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/23/create/354",
        },
        {
          name: "Not Legal Related",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/23/create/836",
        },
      ],
    },
    {
      name: "Corporate Finance",
      links: [
        // {
        //   name: "Corporate Finance",
        //   url: "https://jira.exante.eu/plugins/servlet/desk/portal/17",
        // },
        {
          name: "Requests to Corporate Finance",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/17?requestGroup=85",
        },
        {
          name: "Corporate Payments",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/17?requestGroup=41",
        },
        {
          name: "Company Cards",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/17?requestGroup=114",
        },
        {
          name: "Dynamics365 Support",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/17?requestGroup=62",
        },
      ],
    },
    {
      name: "Office and Travel",
      links: [
        {
          name: "General Office Requests",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/43/create/746",
        },
        {
          name: "Business Cards Request",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/43/create/875",
        },
        {
          name: "Corporate Taxi",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/57/create/791",
        },
        {
          name: "Travel Request",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/57/create/789",
        },
        {
          name: "Sales Travel Request",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/57/create/796",
        },
        {
          name: "Travel: Research Request",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/57/create/867",
        },
        {
          name: "Travel: Your Feedback",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/57/create/868",
        },
      ],
    },
    {
      name: "Business Operations",
      links: [
        // {
        //   name: "Business Operations",
        //   url: "https://jira.exante.eu/plugins/servlet/desk/category/bo",
        // },
        {
          name: "BO Incidents",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/22",
        },
        {
          name: "PMO",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/51",
        },
        {
          name: "BI Reports",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/29",
        },
        {
          name: "Middle Office",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/28",
        },
        {
          name: "Regulatory Reporting",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/30",
        },
        {
          name: "Treasury",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/24",
        },
        {
          name: "Risk",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/35",
        },
        {
          name: "Transfer",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/26",
        },
        {
          name: "Bookings",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/36",
        },
        {
          name: "Reconciliations",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/39",
        },
        {
          name: "Corporate Actions",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/40",
        },
      ],
    },
    {
      name: "Brokerage",
      links: [
        // {
        //   name: "Brokerage",
        //   url: "https://jira.exante.eu/plugins/servlet/desk/category/brkg",
        // },
        {
          name: "Counterparty Onboarding",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/32",
        },
        {
          name: "Trading",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/55",
        },
      ],
    },
    {
      name: "Sales Admin Services",
      links: [
        // {
        //   name: "Sales Admin Services",
        //   url: "https://jira.exante.eu/plugins/servlet/desk/portal/54",
        // },
        {
          name: "Partnership",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/54?requestGroup=130",
        },
        {
          name: "Lead Management",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/54?requestGroup=136",
        },
        {
          name: "R&D",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/54?requestGroup=139",
        },
        {
          name: "Sales Management",
          url: "https://jira.exante.eu/plugins/servlet/desk/portal/54?requestGroup=142",
        },
      ],
    },
  ]

  const pathname = usePathname()

  // const staticHeaderRoutes = ["news", "whosout", "celebrations", "new_people"] //FIXME: to layouts
  const darkHeaderRoutes = [
    "news",
    "whosout",
    "celebrations",
    "new_people",
    "departments",
  ] //FIXME: to layouts
  const staticHeaderRoutes = [] //FIXME: to layouts

  useEffect(() => {
    if (staticHeaderRoutes.some((el) => pathname.includes(el))) {
      setIsStatic(true)
    } else {
      setIsStatic(false)
    }

    if (darkHeaderRoutes.some((el) => pathname.includes(el))) {
      setHeaderDark(true)

      // Extra condition for the internal departments pages

      if (pathname.includes("departments") && pathname.split("/").length > 3) {
        setHeaderDark(false)
      }
    } else {
      setHeaderDark(false)
    }
  }, [pathname])

  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => {
    setMenuOpen(true)

    document.body.classList.add("menuOpen")
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.classList.remove("menuOpen")
  }

  const headerHeight = 98

  const toggleFixed = () => {
    if (window.scrollY > headerHeight) {
      setHeaderFixed(true)
    } else {
      setHeaderFixed(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleFixed)
  }, [() => window.removeEventListener("scroll", toggleFixed)])

  return (
    <header
      className={`${styles.header} ${menuOpen ? styles.header_menuOpen : ""} ${
        isStatic ? styles.static : ""
      } ${headerFixed ? styles.fixed : ""} ${isDark ? styles.dark : ""}`}
    >
      <div
        className={`${styles.header__nav} ${menuOpen ? styles.menuOpen : ""}`}
      >
        <Container className={`container ${styles.header__container} `}>
          <Link href="/" className={styles.header__logowrap}>
            <Image
              src="/images/exante-logo-flat.svg"
              className={styles.header__logo}
              alt="logo"
              width={184}
              height={42}
            />
          </Link>

          <nav className={styles.header__links}>
            {links.map((el, index) => {
              return <LinkBlock el={el} key={index} />
            })}
          </nav>
          <div className={styles.header__account}>
            {/* <div className={styles.header__user}>
              <Image
                src="/images/icons/user.svg"
                width={32}
                height={32}
                alt="user"
              />
            </div> */}
            <RegularButton onClick={openMenu} text="Make a request" external />
          </div>
        </Container>
      </div>

      <Menu items={menuItems} isOpen={menuOpen} close={closeMenu} />
    </header>
  )
}
