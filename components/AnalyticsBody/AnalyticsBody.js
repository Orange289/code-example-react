"use client"

export default function AnalyticsBody() {
  if (
    process.env.NEXT_PUBLIC_ENV &&
    process.env.NEXT_PUBLIC_ENV !== "production" &&
    process.env.NEXT_PUBLIC_ENV !== "stage"
  ) {
    return <></>
  }
  const GTM_ID = "GTM-K3PQX7X"

  return (
    <>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>
    </>
  )
}
