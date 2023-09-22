import { store } from "@/store"
import { People } from "@/types"
import PersonPage from "@/components/Pages/PersonPage"
import { notFound } from "next/navigation"
import { dispatchBAmboo } from "@/services/BambooHRStore"
import { findBackup } from "@/services/Persons"

export const revalidate = 60

export async function generateMetadata({ params }) {
  await dispatchBAmboo()

  const personUrl = params.person
  const personsArray = store.getState().bambooHRSlice.personsArray

  const person = personsArray.find(
    (el: People) =>
      el.url === personUrl || el.workEmail.split("@")[0] == personUrl
  )

  if (person) {
    return {
      title: `${person.firstName} ${person.lastName} - EXANTE Intranet`,
      openGraph: {
        title: `${person.firstName} ${person.lastName} - EXANTE Intranet`,
      },
    }
  }
  return {}
}

export default async function Person({ params }) {
  await dispatchBAmboo()
  const personUrl = params.person
  const personsArray = store.getState().bambooHRSlice.personsArray

  const person = personsArray.find((el: People) => el.url == personUrl)

  if (!person || typeof person == "undefined" || personsArray.length == 0) {
    notFound()
  }

  const backupPerson = findBackup(person, personsArray)
  const manager = personsArray.find(
    (el: People) => el.displayName == person.supervisor
  )
  return (
    <>
      {person && (
        <PersonPage content={person} backup={backupPerson} manager={manager} />
      )}
    </>
  )
}
