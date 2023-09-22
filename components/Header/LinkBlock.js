"use client"

import { useRouter, usePathname } from "next/navigation"
// import { useRouter } from "next/router"
import { useState } from "react"
import Link from "next/link"
import styles from "./Header.module.scss"

export default function LinkBlock({ el }) {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  // const router = useRouter()

  const handleMouseEnter = () => {
    ;(el.links || el.sublinks) && setSubmenuOpen(true)
  }

  const handleMouseLeave = () => {
    ;(el.links || el.sublinks) && setSubmenuOpen(false)
  }

  const useCheckActiveLink = (el) => {
    const firstLevelCheck = usePathname().includes(
      el.name.toLowerCase().replace(/ /g, "-")
    )

    // There is no function in next/navigation to define the hash, so I think it's better to hide the second level for now

    // const secondLevelCheck =
    //   el.links &&
    //   el.links.some((item) =>
    //     usePathname()
    //       ? usePathname().includes(
    //           item.name.toLowerCase().replace(/ /g, "-")
    //         ) ||
    //         item.name
    //           .toLowerCase()
    //           .replace(/ /g, "-")
    //           .includes(usePathname().replace(/\//g, ""))
    //       : false
    //   )

    return firstLevelCheck
  }

  return (
    <div
      className={styles.header__linkwrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        onMouseEnter={handleMouseEnter}
        href={el.url}
        className={`${styles.header__link} ${
          el.img ? styles.header__link_logo : ""
        } ${useCheckActiveLink(el) ? styles.active : ""}
            ${el.links || el.sublinks ? styles.withSubmenu : ""}
            ${submenuOpen ? styles.submenuOpen : ""}
          `}
        rel="noreferrer"
      >
        <strong>{el.name}</strong>
      </Link>
      {el.links && submenuOpen && (
        <ul
          className={styles.header__sublinks}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {el.links.map((item, itemIndex) => {
            return (
              <>
                {item.sublinks ? (
                  <li key={itemIndex}>
                    <Link href={item.url}>{item.name}</Link>

                    <ul className={styles.header__subitems}>
                      {item.sublinks.map((link, linkIndex) => {
                        return (
                          <li key={linkIndex}>
                            <Link href={link.url}>{link.name}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                ) : (
                  <li key={itemIndex}>
                    {item.external ? (
                      <a href={item.url} target="_blank">
                        {item.name}
                      </a>
                    ) : (
                      <Link scroll={false} href={item.url}>
                        {item.name}
                      </Link>
                    )}
                  </li>
                )}
              </>
            )
          })}
        </ul>
      )}
      {el.sublinks && submenuOpen && (
        <ul className={`${styles.header__sublinks} ${styles.subitems}`}>
          {el.sublinks.map((link, linkIndex) => {
            return (
              <li key={linkIndex}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
