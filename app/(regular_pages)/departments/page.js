import DepartmentsPage from "@/components/Pages/DepartmentsPage"

export const revalidate = 60

export const metadata = {
  title: "Departments – EXANTE Intranet",
  description:
    "We are proud to create a global united team of professionals working in divisions.",
  openGraph: {
    title: "Departments – EXANTE Intranet",
    description:
      "We are proud to create a global united team of professionals working in divisions.",
  },
}

export default async function DepartmentsPageApp() {
  return <DepartmentsPage />
}
