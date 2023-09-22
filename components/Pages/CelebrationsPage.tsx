import { store } from "@/store"
import { dispatchBAmboo } from "@/services/BambooHRStore"
import type { People as PeopleType } from "@/types"
// import DATA from "@/data/celebrations"
import Greetings from "../Celebrations/Greetings"
import WhosNext from "../Celebrations/WhosNext"

export default async function CelebrationsPage() {
  await dispatchBAmboo()

  const personsArray: PeopleType[] = store.getState().bambooHRSlice.personsArray

  return (
    <>
      <Greetings isCelebrations={true} items={personsArray} />
      <WhosNext items={personsArray} />
    </>
  )
}
