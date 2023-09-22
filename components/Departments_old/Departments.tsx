import styles from "./Departments.module.scss"
import { Department } from "@/types"
import Divisions from "./Divisions"
import { default as DepartmentItem } from "./Department"

export default function Departments({ items }: { items: Department[] }) {
  if (!items) {
    return null
  }

  return (
    <section className={`${styles.departments}`}>
      {/* <Container> */}
      {/* {withTitle && <h4>Divisions</h4>} */}

      {items.map((item: Department, index) => {
        return (
          <DepartmentItem item={item} key={item.meta.html_url}>
            <Divisions item={item} withParent={true}></Divisions>
          </DepartmentItem>
        )
      })}
      {/* </Container> */}
    </section>
  )
}
