import CelebrationsPage from "@/components/Pages/CelebrationsPage"

export const revalidate = 10

export const metadata = {
  title: "Celebrations – EXANTE Intranet",
  description:
    "We are proud to create a global united team of professionals working in divisions.",
  openGraph: {
    title: "Celebrations – EXANTE Intranet",
    description:
      "We are proud to create a global united team of professionals working in divisions.",
  },
}
export default function celebrationsPage() {
  return <CelebrationsPage />
}
