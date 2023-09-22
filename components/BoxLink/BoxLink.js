import Link from "next/link"
import styles from "./BoxLink.module.scss"

export default function BoxLink({
  item,
  onlight = false,
  className = "",
  isWhite = false,
}) {
  const boxClassName = `${styles.boxlink} ${onlight ? styles.onlight : ""} ${
    isWhite ? styles.white : ""
  } ${className}`
  const attrs = {
    href: item.url,
    className: boxClassName,
  }
  const LinkContent = () => (
    <span dangerouslySetInnerHTML={{ __html: item.name }}></span>
  )

  return item.url.startsWith("/") ? (
    <Link {...attrs}>
      <LinkContent></LinkContent>
    </Link>
  ) : (
    <a {...attrs}>
      <LinkContent></LinkContent>
    </a>
  )
}
