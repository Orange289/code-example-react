import NewPeoplePage from "@/components/Pages/NewPeoplePage"

export const revalidate = 60

export const metadata = {
  title: "New people – EXANTE Intranet",
  description:
    "We are proud to create a global united team of professionals working in divisions.",
  openGraph: {
    title: "New people – EXANTE Intranet",
    description:
      "We are proud to create a global united team of professionals working in divisions.",
  },
}
export default function NewPeople() {
  return <NewPeoplePage />
}
