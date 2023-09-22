import { Roboto } from "next/font/google"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Loader from "@/components/Loader/Loader"

import styles from "./Signin.module.scss"
import { useEffect, useState } from "react"

const roboto = Roboto({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})
export default function SignInPage() {
  const router = useRouter()
  const { data, status } = useSession()
  const [avasArray, setAvasArray] = useState([])
  const [showAva, setShowAva] = useState(false)

  const avaArrayLength = 14
  const min = 1
  const max = 56

  const getAvaArray = () => {
    const numbersArray = Array.from(
      { length: max - min + 1 },
      (_, index) => min + index
    )

    for (let i = numbersArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[numbersArray[i], numbersArray[j]] = [numbersArray[j], numbersArray[i]]
    }

    return numbersArray.slice(0, avaArrayLength)
  }

  useEffect(() => {
    setAvasArray(getAvaArray())

    setTimeout(() => {
      setShowAva(true)
    }, 200)
  }, [])

  if (status === "loading") return <Loader width={50} height={50} />
  if (status === "authenticated") {
    // router.push("/")
    // return (
    //     <div>
    //       <h1> hi {data.user.name}</h1>
    //       <img src={data.user.image} alt={data.user.name + ' photo'} />
    //       <button onClick={signOut}>sign out</button>
    //     </div>
    //   );
  }

  return (
    <div className={`${styles.signin}`}>
      <img
        loading="lazy"
        className={styles.signin__logo}
        src="/images/exante-logo-flat.svg"
        alt="exante logo"
      />
      <div className={`${styles.signin__wrap}`}>
        <h1>Hello!</h1>
        <p>
          We are delighted to greet you in our friendly and professional family.
          This portal serves as your central hub for information exchange,
          collaboration, and achieving great results.
        </p>
        <button
          className={`${styles.button} ${styles.google} ${roboto.variable}`}
          type="button"
          onClick={() => signIn("google")}
        >
          <div className={styles.button__wrap}>
            <img
              loading="lazy"
              className={styles.button__icon}
              src="/images/icons/google-logo.svg"
              alt="google logo"
              width={18}
              height={18}
            />
            Sign in with Google
          </div>
        </button>
      </div>
      <div className={styles.signin__avas}>
        {avasArray.map((item, index) => {
          return (
            <div
              className={`${styles.signin__ava} ${
                showAva ? styles.show : ""
              } signin__ava_${index + 1}`}
              key={index}
              style={{
                opacity: 0,
                transition: "opacity 1s",
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <img
                loading="lazy"
                src={`/images/login/avas/${item}.png`}
                alt={item}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
