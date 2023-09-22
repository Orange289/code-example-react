export function getDivisions(item) {
  let divisions = []
  if (Object.values(item.children).length == 0) {
    return divisions
  }
  const childArray = Object.values(item.children)
  if (childArray.length == 0) {
    return divisions
  }
  childArray.map((child_item) => {
    divisions = divisions.concat(
      child_item.bamboohr_department,
      child_item.bamboohr_division,
      child_item.bamboohr_employee,
      child_item.department_managers_department_page
    )
  })
  return divisions
}

export function getItemDivisionsEmployee(item) {
  return [].concat(
    item.bamboohr_department,
    item.bamboohr_division,
    item.bamboohr_employee,
    item.department_managers_department_page
  )
}
