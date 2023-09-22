import WorkingHerePage from "@/components/Pages/WorkingHerePage"

export const revalidate = 60

export const metadata = {
  title: "Working Here – EXANTE Intranet",
  description:
    "We are proud to create a global united team of professionals working in divisions.",
  openGraph: {
    title: "Working Here – EXANTE Intranet",
    description:
      "We are proud to create a global united team of professionals working in divisions.",
  },
}
export default function workingHerePage() {
  return <WorkingHerePage />
}
