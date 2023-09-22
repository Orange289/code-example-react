import { useState, useEffect } from "react"
import styles from "./CheckItems.module.scss"
import { Row, Col } from "react-grid-system"

export default function CheckItems({ item, localStorageName }) {
  const [checkedCount, setCheckedCount] = useState(0)
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

  return (
    <div className={`${styles.checkitems} ${item.isBig ? styles.big : ""}`}>
      <div className={styles.checkitems__title}>
        <strong>{item.name}</strong>
        <span>
          {checkedCount} of {item.items.length} completed
        </span>
      </div>
      <div className={styles.checkitems__desc}>
        {item.isBig ? (
          <Row>
            <Col xs={6}>
              <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
            </Col>

            <Col xs={6}>
              <div className={styles.checkitems__link}>
                <a href={item.linkUrl} target="_blank">
                  {item.linkName}
                </a>
                <span>with your Exante credentials</span>
              </div>
            </Col>
          </Row>
        ) : (
          <>
            <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
            {item.linkName && (
              <div>
                <div className={styles.checkitems__link}>
                  <a href={item.linkUrl} target="_blank">
                    {item.linkName}
                  </a>
                  <span>with your Exante credentials</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className={styles.checkitems__list}>
        <Row className={styles.checklist__row}>
          {item.items.map((el, index) => {
            return item.isBig ? (
              <Col xs={6} key={index} className={styles.checkitems__item}>
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => onCheck(e.target, index)}
                    checked={checkedArray.includes(index)}
                  />
                  <span className={styles.checkitems__tick}>
                    <img
                      loading="lazy"
                      src="/images/icons/checkbox-tick.svg"
                      alt="checkbox tick"
                    />
                  </span>
                  <strong dangerouslySetInnerHTML={{ __html: el }}></strong>
                </label>
              </Col>
            ) : (
              <div key={index} className={styles.checkitems__item}>
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => onCheck(e.target, index)}
                    checked={checkedArray.includes(index)}
                  />
                  <span className={styles.checkitems__tick}>
                    <img
                      loading="lazy"
                      src="/images/icons/checkbox-tick.svg"
                      alt="checkbox tick"
                    />
                  </span>
                  <strong dangerouslySetInnerHTML={{ __html: el }}></strong>
                </label>
              </div>
            )
          })}
        </Row>
      </div>
      {/* <div
        className={styles.dropdown__progress}
        style={{ width: `${(checkedCount / item.items.length) * 100}%` }}
      ></div> */}
    </div>
  )
}
