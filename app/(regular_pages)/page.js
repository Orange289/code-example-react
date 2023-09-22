import MainPage from "@/components/Pages/MainPage"

export const revalidate = 60

export const metadata = {
  title: "Home - Corporate portal EXANTE",
  description: "Learn more about EXANTE and its services for employees.",
  openGraph: {
    title: "Home - Corporate portal EXANTE",
    description: "Learn more about EXANTE and its services for employees.",
  },
}

export default function Home() {
  return <MainPage />
}
