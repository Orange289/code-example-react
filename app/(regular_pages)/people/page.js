// import { preloadEmployees, getAllEmployees } from "@/services/BambooHR"
import { store } from "@/store"
import ContactsPage from "@/components/Pages/ContactsPage"
import { dispatchBAmboo } from "@/services/BambooHRStore"
// const DATA_ALL = await getAllEmployees()

export const revalidate = 60

export const metadata = {
  title: "People – EXANTE Intranet",
  description:
    "We are proud to create a global united team of professionals working in divisions.",
  openGraph: {
    title: "People – EXANTE Intranet",
    description:
      "We are proud to create a global united team of professionals working in divisions.",
  },
}

export default async function Contacts() {
  // preloadEmployees() // starting loading the user data now
  // const { employees } = await getAllEmployees()
  await dispatchBAmboo()

  const personsArray = store.getState().bambooHRSlice.personsArray

  return <ContactsPage employees={personsArray} />
}
