"use client"

import { useState, useEffect } from "react"
import styles from "./CheckDropdown.module.scss"

export default function CheckDropdown({ item, localStorageName }) {
  const [checkedCount, setCheckedCount] = useState(0)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [checkedArray, setCheckedArray] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedChecklistArray = localStorage.getItem(localStorageName)
      return storedChecklistArray ? JSON.parse(storedChecklistArray) : []
    } else {
      return []
    }
  })

  const onCheck = (el, index) => {
    if (el.checked) {
      setCheckedCount((prevCount) => prevCount + 1)
      setCheckedArray((prevArray) => [...prevArray, index])
    } else {
      setCheckedCount((prevCount) => prevCount - 1)
      setCheckedArray((prevArray) => prevArray.filter((item) => item !== index))
    }
  }

  useEffect(() => {
    localStorage.setItem(localStorageName, JSON.stringify(checkedArray))
    setCheckedCount(checkedArray.length)
  }, [checkedArray, localStorageName])

  if (dropdownOpen) {
    const dropdown = document.getElementById(
      `dropdown-${item.name.toLowerCase().replace(/ /g, "-")}`
    )

    document.addEventListener("click", (e) => {
      const isClickedInside = dropdown.contains(e.target)

      if (!isClickedInside) {
        setDropdownOpen(false)
      }
    })
  }

  return (
    <div
      className={styles.dropdown}
      id={`dropdown-${item.name.toLowerCase().replace(/ /g, "-")}`}
    >
      <div
        className={`${styles.dropdown__top} ${dropdownOpen ? styles.open : ""}`}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <strong>{item.name}</strong>
        <span>
          {checkedCount} of {item.items.length} completed
        </span>
      </div>
      <div
        className={styles.dropdown__list}
        style={{ display: dropdownOpen ? "block" : "none" }}
      >
        <ul className={styles.dropdown__list}>
          {item.items.map((el, index) => {
            return (
              <li key={index} className={styles.dropdown__item}>
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => onCheck(e.target, index)}
                    checked={checkedArray.includes(index)}
                  />
                  <span className={styles.dropdown__tick}>
                    <img
                      loading="lazy"
                      src="/images/icons/checkbox-tick.svg"
                      alt="checkbox tick"
                    />
                  </span>
                  <strong dangerouslySetInnerHTML={{ __html: el }}></strong>
                </label>
              </li>
            )
          })}
        </ul>
        <div
          className={styles.dropdown__progress}
          style={{ width: `${(checkedCount / item.items.length) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}
