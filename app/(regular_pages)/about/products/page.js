import ProductsPage from "@/components/Pages/ProductsPage"

export const revalidate = 60

export const metadata = {
  title: "Products - EXANTE Intranet",
  description:
    "We are proud to create a global united team of professionals working in divisions.",
  openGraph: {
    title: "Products - EXANTE Intranet",
    description:
      "We are proud to create a global united team of professionals working in divisions.",
  },
}
export default function about() {
  return <ProductsPage />
}
