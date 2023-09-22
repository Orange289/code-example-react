import AboutPage from "@/components/Pages/AboutPage.tsx"

export const revalidate = 60

export const metadata = {
  title: "About – EXANTE Intranet",
  description:
    "We are proud to create a global united team of professionals working in divisions.",
  openGraph: {
    title: "About – EXANTE Intranet",
    description:
      "We are proud to create a global united team of professionals working in divisions.",
  },
}

export default function About() {
  return <AboutPage />
}
