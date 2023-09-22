import { store } from "@/store"
import { dispatchBAmboo } from "@/services/BambooHRStore"
import type { People } from "@/types"
import Intro from "../GettingStarted/Intro"
import Checklist from "../GettingStarted/Checklist"
import LearningPlans from "../GettingStarted/LearningPlans"
import Platforms from "../GettingStarted/Platforms"
import Contacts from "../GettingStarted/Contacts"

export default async function GettingStartedPage() {
  await dispatchBAmboo()

  const personsArray: People[] = store.getState().bambooHRSlice.personsArray

  const contacts = [
    {
      people: [personsArray.find((item) => item.displayName == "Cobby, Daiga")],
    },
    {
      name: "Sales, Velexa",
      people: [
        personsArray.find((item) => item.displayName == "Djakovic, Olesya"),
      ],
    },
    {
      name: "Technology, Financial Instruments, HR",
      people: personsArray.filter(
        (item) => ["Surina, Marika"].indexOf(item.displayName) >= 0
      ),
    },
    {
      name: "Other",
      desc: "Business operations, Marketing, Payments, Compliance, Legal, Group Administration & Offices, Corporate Finance, Family Office",
      people: [
        personsArray.find((item) => item.displayName == "Straumina, Daiga"),
      ],
    },
  ]
  // [
  //   {
  //     name: "Sales, Velexa",
  //     people: [
  //       {
  //         img: "olesya.png",
  //         name: "Olesya Djakovic",
  //         position: "HR Manager",
  //         links: [{ name: "@djol" }],
  //       },
  //     ],
  //   },
  //   {
  //     name: "Technology, Financial Instruments, HR",
  //     people: [
  //       {
  //         img: "marika.png",
  //         name: "Olesya Djakovic",
  //         position: "HR Manager",
  //         links: [{ name: "@msur" }],
  //       },
  //       {
  //         img: "irina.png",
  //         name: "Irina Kopylova-Noak",
  //         position: "HR Generalist",
  //         links: [{ name: "@iko" }],
  //       },
  //     ],
  //   },
  //   {
  //     name: "Other",
  //     desc: "Business operations, Marketing, Payments, Compliance, Legal, Group Administration & Offices, Corporate Finance, Family Office",
  //     people: [
  //       {
  //         img: "daiga-b.png",
  //         name: "Daiga Bandere",
  //         position: "HR Manager, Deputy Head of HR/TA",
  //         links: [{ name: "@daib" }],
  //       },
  //     ],
  //   },
  // ],
  // [
  //   {
  //     name: "Sales, Velexa",
  //     people: [
  //       {
  //         img: "olesya.png",
  //         name: "Olesya Djakovic",
  //         position: "HR Manager",
  //         links: [{ name: "@djol" }],
  //       },
  //     ],
  //   },
  //   {
  //     name: "Technology, Financial Instruments, HR",
  //     people: [
  //       {
  //         img: "marika.png",
  //         name: "Olesya Djakovic",
  //         position: "HR Manager",
  //         links: [{ name: "@msur" }],
  //       },
  //       {
  //         img: "irina.png",
  //         name: "Irina Kopylova-Noak",
  //         position: "HR Generalist",
  //         links: [{ name: "@iko" }],
  //       },
  //     ],
  //   },
  //   {
  //     name: "Other",
  //     desc: "Business operations, Marketing, Payments, Compliance, Legal, Group Administration & Offices, Corporate Finance, Family Office",
  //     people: [
  //       {
  //         img: "daiga-b.png",
  //         name: "Daiga Bandere",
  //         position: "HR Manager, Deputy Head of HR/TA",
  //         links: [{ name: "@daib" }],
  //       },
  //     ],
  //   },
  // ],
  // [
  //   {
  //     name: "Sales, Velexa",
  //     people: [
  //       {
  //         img: "olesya.png",
  //         name: "Olesya Djakovic",
  //         position: "HR Manager",
  //         links: [{ name: "@djol" }],
  //       },
  //     ],
  //   },
  //   {
  //     name: "Technology, Financial Instruments, HR",
  //     people: [
  //       {
  //         img: "marika.png",
  //         name: "Olesya Djakovic",
  //         position: "HR Manager",
  //         links: [{ name: "@msur" }],
  //       },
  //       {
  //         img: "irina.png",
  //         name: "Irina Kopylova-Noak",
  //         position: "HR Generalist",
  //         links: [{ name: "@iko" }],
  //       },
  //     ],
  //   },
  //   {
  //     name: "Other",
  //     desc: "Business operations, Marketing, Payments, Compliance, Legal, Group Administration & Offices, Corporate Finance, Family Office",
  //     people: [
  //       {
  //         img: "daiga-b.png",
  //         name: "Daiga Bandere",
  //         position: "HR Manager, Deputy Head of HR/TA",
  //         links: [{ name: "@daib" }],
  //       },
  //     ],
  //   },
  // ],

  return (
    <>
      <Intro />
      {/* <Platforms /> */}
      <Checklist />
      <LearningPlans />
      <Contacts contacts={contacts} />
    </>
  )
}
