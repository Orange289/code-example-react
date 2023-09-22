import { useEffect, useRef } from "react"
import styles from "./SearchBar.module.scss"
import { useSearchParams } from "next/navigation"

export default function SearchBar({ onTextChange, placeholder, className }) {
  const inputRef = useRef(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const search = searchParams.get("search")
    inputRef.current.value = search
  }, [searchParams])

  return (
    <div className={`${styles.searchbar} ${className ? className : ""}`}>
      <img
        loading="lazy"
        className={styles.searchbar__icon}
        src="/images/icons/search.svg"
        alt="search icon"
      />
      <input
        type="text"
        placeholder={placeholder}
        ref={inputRef}
        onChange={(e) => {
          onTextChange(e.target.value)
        }}
      />
    </div>
  )
}
