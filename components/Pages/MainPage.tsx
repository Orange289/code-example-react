import { store } from "@/store"
import { dispatchBAmboo } from "@/services/BambooHRStore"
import type { People as PeopleType } from "@/types"
import News from "../News/News"
import Services from "../Services/Services"
import Support from "../Support/Support"
import People from "@/components/People/People"
import Share from "../Share/Share"
// import Networks from "../Networks/Networks"
import DATA from "@/data/main"

export default async function MainPage() {
  await dispatchBAmboo()

  const personsArray: PeopleType[] = store.getState().bambooHRSlice.personsArray

  return (
    <>
      <Services items={DATA.services} />
      <News />
      <Support
        supportItems={DATA.support.supportItems}
        otherItems={DATA.support.otherItems}
        incidentItems={DATA.support.incidentItems}
      ></Support>
      {/* <People items={DATA.people} /> */}
      <People items={personsArray} />
      <Share />
      {/* <Networks items={DATA.networks} /> */}
    </>
  )
}
