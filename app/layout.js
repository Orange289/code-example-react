import "@/styles/globals.scss"
// import Layout from "@/components/Layout/Layout"
import { Inter } from "next/font/google"
import { NextAuthProvider } from "./providers"
import { ReduxProvider } from "@/store/provider"
import { Suspense } from "react"
import AnalyticsHead from "@/components/AnalyticsHead/AnalyticsHead"
import AnalyticsBody from "@/components/AnalyticsBody/AnalyticsBody"
// import Layout from "@/components/Layout/Layout"
// import { Html, Head, Main, NextScript } from "next/document"
// import Script from "next/script"
// import Head from "next/head"
// import { Metadata } from "next" // metadata: Metadata

const inter = Inter({
  weight: ["100", "200", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  robots: "noindex",
  title: "EXANTE Corporate Portal",
  // charSet: "utf-8",
  viewport: "width=1456",
  // "user-scalable=yes, width=device-width, initial-scale=1.0, maximum-scale=2",
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
}

export default async function App({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <Suspense>
          {/* in a Suspense boundary to avoid the "deopted into client-side rendering" error for static pages. https://dev.to/valse/how-to-setup-google-tag-manager-in-a-next-13-app-router-website-248p */}
          <AnalyticsHead />
        </Suspense>
      </head>
      <body>
        <Suspense>
          <AnalyticsBody />
        </Suspense>
        <ReduxProvider>
          <NextAuthProvider>{children}</NextAuthProvider>
        </ReduxProvider>
        {/* <BambooHRProvider></BambooHRProvider> */}
      </body>
    </html>
  )
}
