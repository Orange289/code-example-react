"use client" //react-grid-system

import Intro from "../Contact/Intro.tsx"
import Employees from "../Contact/Employees"

export default function PersonPage({ content, backup, manager }) {
  return (
    <>
      {content ? (
        <>
          <Intro item={content} backup={backup} manager={manager} />
          {content.employees && content.employees.length > 0 && (
            <Employees items={content.employees} />
          )}
        </>
      ) : (
        <></>
      )}
    </>
  )
}
