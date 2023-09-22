import BoxLink from "@/components/BoxLink/BoxLink"
import styles from "./Divisions.module.scss"

export default function Divisions({ department, items, className }) {
  if (!items) {
    return null
  }
  return (
    <div className={`${className}`}>
      {items.map((item) => (
        <BoxLink
          key={item.id}
          className={styles.division}
          onlight={true}
          item={{
            name: item.long_title ? item.long_title : item.title,
            url: `/departments/${department.meta.slug}/${
              item.meta ? item.meta.slug : ""
            }/`,
          }}
        ></BoxLink>
      ))}
    </div>
  )
}
