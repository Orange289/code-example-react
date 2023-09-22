"use client"

import Script from "next/script"

export default function AnalyticsHead() {
  if (
    process.env.NEXT_PUBLIC_ENV &&
    process.env.NEXT_PUBLIC_ENV !== "production" &&
    process.env.NEXT_PUBLIC_ENV !== "stage"
  ) {
    return <></>
  }
  const GTM_ID = "GTM-KKGR3LJ"
  // const MATOMO_CONTANER = "https://matomo.exante.eu/js/container_DWiOkEcy.js"

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
      <Script
        id="scriptMatomo"
        data-hid="matomo"
        strategy="beforeInteractive"
        async
        dangerouslySetInnerHTML={{
          __html: `var _paq = window._paq = window._paq || []; _paq.push(["setDocumentTitle", document.domain + "/" + document.title]); _paq.push(["setCookieDomain", "*.corp.exante.eu"]);_paq.push(["trackPageView"]);_paq.push(["enableLinkTracking"]); (function () {var u = "//matomo.exante.eu/"; _paq.push(["setTrackerUrl", u + "matomo.php"]); _paq.push(["setSiteId", "25"]); var d = document, g = d.createElement("script"), s = d.getElementsByTagName("script")[0];g.async = true;g.src = u + "matomo.js";s.parentNode.insertBefore(g, s);})()`,
        }}
        // dangerouslySetInnerHTML={{
        //   __html: `var _mtm=window._mtm=window._mtm||[],d=(_mtm.push({"mtm.startTime":(new Date).getTime(),event:"mtm.Start"}),document),g=d.createElement("script"),s=d.getElementsByTagName("script")[0];g.async=!0,g.src="${MATOMO_CONTANER}",s.parentNode.insertBefore(g,s)`,
        // }}
      />
    </>
  )
}
