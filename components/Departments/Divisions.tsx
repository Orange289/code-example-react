"use client"

import { Container } from "react-grid-system"
import styles from "./Divisions.module.scss"
import { Department } from "@/types"
import Division from "./Division"
import { getItemDivisionsEmployee } from "./DepartmentsPageParts/utils"

export default function Divisions({
  item,
  className,
  items = [],
  withParent = false,
  boxWhite = false,
}: {
  item: Department
  className?: string
  withParent?: boolean
  items?: Department[] | []
  boxWhite?: boolean
}) {
  if (!item || !items) {
    return null
  }
  const divisions = items.filter((item) => {
    return getItemDivisionsEmployee(item).length > 0
  })

  return (
    <section>
      <Container>
        <div className={`${styles.divisions} ${className}`}>
          {withParent && <Division boxWhite={boxWhite} item={item}></Division>}

          {divisions.map((division: Department) => (
            <Division
              boxWhite={boxWhite}
              fullWidth={true}
              key={division.meta.html_url}
              item={division}
            ></Division>
          ))}
        </div>
      </Container>
    </section>
  )
}
