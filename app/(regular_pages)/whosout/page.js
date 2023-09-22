import WhosoutPage from "@/components/Pages/WhosoutPage.tsx"

export const revalidate = 60

export const metadata = {
  title: "Who's out – EXANTE Intranet",
  description:
    "We are proud to create a global united team of professionals working in divisions.",
  openGraph: {
    title: "Who's out – EXANTE Intranet",
    description:
      "We are proud to create a global united team of professionals working in divisions.",
  },
}

export default function whosoutPage() {
  return <WhosoutPage />
}
