import React from "react"
import NewsPage from "@/components/Pages/NewsPage"

export const revalidate = 60

export const metadata = {
  title: "News – EXANTE Intranet",
  description:
    "We are proud to create a global united team of professionals working in divisions.",
  openGraph: {
    title: "News – EXANTE Intranet",
    description:
      "We are proud to create a global united team of professionals working in divisions.",
  },
}

export default function newsListPage() {
  return <NewsPage />
}
