import { store } from "@/store"
import { dispatchBAmboo } from "@/services/BambooHRStore"
import type { People } from "@/types"
import Intro from "../About/Intro"
import Principles from "../About/Principles"
import Ceo from "../About/Ceo"
import Board from "../About/Board"
import History from "../About/History"
import Values from "../About/Values"
import Team from "../About/Team"

export default async function AboutPage() {
  await dispatchBAmboo()

  const personsArray: People[] = store.getState().bambooHRSlice.personsArray
  const items = personsArray.filter(
    (item: People) => item.manager && item.department != "Board of Directors"
  )
  const countries = new Set()
  const nationalities = new Set()
  personsArray.forEach((person: People) => {
    if (person.location) {
      countries.add(person.location)
    }

    if (person.nationality) {
      nationalities.add(person.nationality)
    }
  })

  const aboutItems = [
    {
      num: personsArray.length,
      label: "professionals",
    },
    {
      num: countries.size,
      label: "countries of residence",
    },
    {
      num: nationalities.size,
      label: "nationalities",
    },
    {
      num: "2",
      prefix: "$",
      suffix: "bn",
      label: "cumulative AUM",
    },

    {
      num: "100",
      suffix: "+",
      label: "countries serviced",
    },
    {
      num: "1",
      suffix: "M",
      label: "instruments",
    },
  ]

  return (
    <>
      <Intro items={aboutItems} />
      <Principles />
      <Ceo />
      <History />
      <Values />
      <Board />
      <Team />
    </>
  )
}
