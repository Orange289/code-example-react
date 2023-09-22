import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return (
          profile.email_verified &&
          (profile.email.endsWith("@exante.eu") ||
            profile.email.endsWith("@stasis.net") ||
            // profile.email.endsWith("@velexa.com") ||
            profile.email.endsWith("@exan.tech"))
        )
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  },
  pages: {
    signIn: "/login/",
  },
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
