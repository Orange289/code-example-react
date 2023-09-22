import { store } from "@/store"
import { dispatchBAmboo } from "@/services/BambooHRStore"
import type { People as PeopleType } from "@/types"
import Greetings from "../Celebrations/Greetings"

export default async function CelebrationsPage() {
  await dispatchBAmboo()

  const personsArray: PeopleType[] = store.getState().bambooHRSlice.personsArray

  return (
    <Greetings
      items={personsArray}
      isNewPeople={true}
      title="New People"
      pageName="New People"
      date={false}
    />
  )
}
