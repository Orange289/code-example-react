import { store } from "@/store"
import { dispatchBAmboo } from "@/services/BambooHRStore"
import type { People } from "@/types"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Content from "../Whosout/Content"

export default async function WhosoutPage() {
  await dispatchBAmboo()
  const persons: People[] = store.getState().bambooHRSlice.personsArray

  return (
    <>
      <Breadcrumbs items={[{ name: "Who is out?" }]} />
      <Content persons={persons} />
    </>
  )
}
