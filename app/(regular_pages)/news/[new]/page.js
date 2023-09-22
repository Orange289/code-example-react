import NewPage from "@/components/Pages/NewPage"

export const revalidate = 60

export default function serverNewsPage({ params }) {
  return <NewPage slug={params.new} />
}
