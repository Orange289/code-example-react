import styles from "./Division.module.scss"
import { Department } from "@/types"
import BoxLink from "@/components/BoxLink/BoxLink"

export default function Division({
  item,
  responsible = false,
  boxWhite = false,
  fullWidth = false,
}: {
  item: Department
  responsible?: any
  boxWhite?: boolean
  fullWidth?: boolean
}) {
  if (!item) {
    return null
  }

  return (
    <div
      // xs={3}
      className={`${styles.division__col} ${
        responsible ? styles.division__col_responsible : ""
      } ${fullWidth ? styles.fullWidth : ""}`}
    >
      <div
        className={styles.division__item}
        id={`${item.meta ? item.meta.html_url : ""}`}
      >
        <BoxLink
          isWhite={boxWhite}
          item={{
            name: item.long_title || item.title,
            url: `${item.meta ? item.meta.slug : ""}/`,
          }}
          onlight={true}
        />
        {item.body && (
          <p
            dangerouslySetInnerHTML={{
              __html: item.body,
            }}
          ></p>
        )}
      </div>
      {responsible && (
        <div className={styles.division__responsible}>
          <span>Responsible person </span>
          <a href={responsible.url}>{responsible.name}</a>
        </div>
      )}
    </div>
  )
}
