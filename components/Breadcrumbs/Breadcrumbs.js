import Link from "next/link"
import styles from "./Breadcrumbs.module.scss"

export default function Breadcrumbs({ items, className = "", isDark = false }) {
  return (
    <div
      className={`${styles.breadcrumbs} ${isDark ? styles.isdark : ""} ${
        className ? className : ""
      }`}
    >
      <Link
        href="/"
        className={`${styles.breadcrumbs__item} ${styles.breadcrumbs__item_home}`}
      >
        Home
      </Link>
      {items.map((el, index) => {
        return el.link ? (
          <Link
            key={index}
            href={el.link}
            className={`${styles.breadcrumbs__item} ${styles.breadcrumbs__item_page}`}
          >
            {el.name}
          </Link>
        ) : (
          <span
            key={index}
            className={`${styles.breadcrumbs__item} ${styles.breadcrumbs__item_page}`}
          >
            <span>{el.name}</span>
          </span>
        )
      })}
    </div>
  )
}
