"use client"

import React, { useState, useEffect } from "react"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Loader from "../Loader/Loader"
import styles from "./Layout.module.scss"
import { useRouter } from "next/navigation"
import { useSession, signIn, signOut } from "next-auth/react"
import { Container, setConfiguration } from "react-grid-system"

setConfiguration({
  defaultScreenClass: "sm",
  breakpoints: [640, 960, 1280, 1440, 1599, 1900], // sm, md, lg, xl, xxl, xxxl
  containerWidths: [1185, 1185, 1185, 1185, 1456, 1456],
  // containerWidths: ["100%", 944, 1185, 1185, 1456, 1456],
})

export default function Layout(props) {
  const { data, status } = useSession()
  const router = useRouter()
  // if (typeof window === "undefined") return null

  if (["authenticated", "loading"].includes(status)) {
    return (
      <div className={styles.layout}>
        {status === "authenticated" && <Header />}
        <main>
          {status === "loading" ? (
            <section style={{ padding: "104px 0 56px" }}>
              <Container className={styles.layout__loader}>
                <Loader width={50} height={50} />
              </Container>
            </section>
          ) : status === "authenticated" ? (
            <>{props.children}</>
          ) : (
            <></>
          )}
        </main>
        {status === "authenticated" && <Footer />}
      </div>
    )
  }

  // if (status === "loading") return <h1> loading... please wait</h1>
  // if (status === "authenticated") {
  //   return (
  //     <div className={styles.layout}>
  //       <Header />
  //       <main>{props.children}</main>
  //       <Footer />
  //     </div>
  //   )
  // }
  router.push("/login/")

  // return (
  //   <div
  //     style={{
  //       padding: "100px",
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     <button onClick={() => signIn("google")}>sign in with gooogle</button>
  //   </div>
  // )
}
