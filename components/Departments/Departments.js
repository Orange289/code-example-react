"use client"
import styles from "./Departments.module.scss"
import { default as DepartmentItem } from "./DepartmentsPageParts/Department"
import { Container } from "react-grid-system"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"

export default function Departments({ items }) {
  let itemsArray = []
  if (items.children) {
    itemsArray = Object.values(items.children)
  }
  if (!items) {
    return null
  }

  const RecursiveComponent = ({ columns, isBig = false }) => {
    // const itemsArray = Object.values(items)
    let allChildrenArray = []
    if (columns.length == 0) {
      return <></>
    }
    columns.map((column) => {
      Object.values(column).map((column_item) => {
        // if (getDivisions(column_item).length == 0) {
        if (
          Object.values(column_item.children).length > 0 &&
          columns.length == 1
        ) {
          // for directors lvl
          Object.values(column_item.children).map((dep) => {
            allChildrenArray.push([dep]) // push [dep] for make column
          })
          // } else if (getDivisions(column_item).length > 0) {
        } else {
          const childrens = Object.values(column_item.children).filter(
            (children) => Object.values(children.children).length > 0
          )
          allChildrenArray.push(childrens.length > 0 ? childrens : {})
        }
        // }
      })
    })
    if (allChildrenArray.length < columns.length) {
      allChildrenArray = []
    }

    return (
      <>
        <div className={styles.departments__department_level}>
          {columns.map((column, index) => (
            <div
              key={`department_${index}`}
              className={`${styles.departments__department} ${
                Object.values(column).length == 0
                  ? styles.departments__department_empty
                  : ""
              }`}
            >
              {column &&
                Object.values(column).map((column_item) => (
                  <DepartmentItem
                    isBig={isBig}
                    key={column_item.id}
                    item={column_item}
                  ></DepartmentItem>
                ))}
            </div>
          ))}
        </div>
        {allChildrenArray.length > 0 ? (
          <RecursiveComponent
            isBig={columns.length == 1}
            columns={allChildrenArray}
          />
        ) : null}
      </>
    )
  }

  return (
    <section
      className={`${styles.departments} ${
        itemsArray[0] && itemsArray[0].image ? "" : styles.department_noimage
      }`}
    >
      <Container>
        {/* <Breadcrumbs items={[{ name: department.title || "Org Chart" }]} /> */}
        {itemsArray[0] && (
          <Breadcrumbs
            items={[{ name: itemsArray[0].title }]}
            isDark={true}
            className={styles.departments__breadcrumbs}
          />
        )}
        {itemsArray[0] && (
          <div className={styles.departments__into}>
            <h1>{itemsArray[0].title}</h1>
          </div>
        )}

        <RecursiveComponent columns={[items.children]}></RecursiveComponent>

        {/* <div className={styles.departments__department_level}>
          <div className={styles.departments__department}>
            <DepartmentItem onlyName={true}>Supervisory Board</DepartmentItem>
          </div>
        </div>
        <div className={styles.departments__department_level}>
          <div className={styles.departments__department}>
            <DepartmentItem onlyName={true}>Executive Comitee</DepartmentItem>
          </div>
        </div>
        <div className={styles.departments__department_level}>
          <div className={styles.departments__department}>
            {[...Array(3).keys()].map((item) => (
              <DepartmentItem key={item} person={true} isBig={true}>
                Executive Comitee
              </DepartmentItem>
            ))}
          </div>
        </div>
        <div className={styles.departments__department_level}>
          <div className={styles.departments__department}>
            <DepartmentItem
              divisions={divisions}
              person={true}
            ></DepartmentItem>
            <DepartmentItem person={true}></DepartmentItem>
            <DepartmentItem person={true}></DepartmentItem>
          </div>
          <div className={styles.departments__department}>
            <DepartmentItem person={true}></DepartmentItem>
            <DepartmentItem person={true}></DepartmentItem>
          </div>
          <div className={styles.departments__department}>
            <DepartmentItem person={true}></DepartmentItem>
          </div>
        </div> */}
      </Container>
      {itemsArray[0] && itemsArray[0].image && (
        <img
          loading="lazy"
          className={styles.departments__image}
          src={itemsArray[0].image.meta.download_url}
          alt={itemsArray[0].image.title}
        ></img>
      )}
    </section>
  )
}
