import GettingStartedPage from "@/components/Pages/GettingStartedPage"

export const revalidate = 60

export const metadata = {
  title: "Getting Started – EXANTE Intranet",
  description:
    "We are proud to create a global united team of professionals working in divisions.",
  openGraph: {
    title: "Getting Started – EXANTE Intranet",
    description:
      "We are proud to create a global united team of professionals working in divisions.",
  },
}
export default function gettingStarted() {
  return <GettingStartedPage />
}
