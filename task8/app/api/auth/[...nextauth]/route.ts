import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { pages } from "next/dist/build/templates/app-page";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      id: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("inside authorize");
        if (!credentials) {
          throw new Error("Credentials are undefined");
        }

        const { email, password } = credentials;

        const userData = { email, password };
        const response = await fetch(
          `https://akil-backend.onrender.com/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );
        console.log("AUTHORIZE", response);
        const user = await response.json();

        if (!response.ok || !user) {
          return null;
        }

        return user.data;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      console.log("INSIDE CALLBACK", token);
      if (session.user.image) session.user.image = token.picture;
      if (token.accessToken) {
        session.accessToken = token.accessToken;
      } else if (token.customToken) {
        session.customToken = token.customToken;
      }
      session.user.id = token.id;
      return session;
    },
    async jwt({ token }: { token: any }) {
      return token;
    },
  },
  pages: {
    login: "/login",
    signUp: "/",
    verifyRequest: "/verify",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
export const { auth, signIn, signOut } = handler;
