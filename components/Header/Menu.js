import Icon from "../Icon/Icon"
import { useState } from "react"
import styles from "./Menu.module.scss"

export default function Menu({ items, isOpen, close }) {
  const [currentIndex, setCurrentIndex] = useState(-1)

  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      <button type="button" className={styles.menu__close} onClick={close} />
      <ul className={styles.menu__items}>
        {items.map((item, index) => {
          return (
            <li className={styles.menu__item} key={index}>
              {item.links ? (
                <div
                  className={`${styles.menu__itemtop} ${
                    index === currentIndex ? styles.open : ""
                  }`}
                  onClick={() => {
                    if (index !== currentIndex) {
                      setCurrentIndex(index)
                    } else {
                      setCurrentIndex(-1)
                    }
                  }}
                >
                  {item.name}
                  <span className={styles.menu__arrow}></span>
                </div>
              ) : (
                <div className={styles.menu__itemtop}>
                  <a href={item.url} target="_blank">
                    {item.name}
                  </a>
                </div>
              )}

              {item.links && (
                <ul
                  className={`${styles.menu__itemlist} ${
                    index === currentIndex ? styles.active : ""
                  }`}
                >
                  {item.links.map((link, linkIndex) => {
                    return (
                      <li key={linkIndex} className={styles.menu__link}>
                        <a href={link.url} target="_blank">
                          {/* <Icon
                          icon={link.img}
                          url="/images/icons/menu-sprite.svg"
                        /> */}
                          <strong>{link.name}</strong>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
