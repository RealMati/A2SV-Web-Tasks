"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="text-lg p-2 text-center my-32">
        <p className="">
          Welcome, <span className="font-bold">{session.user?.name}</span>!
        </p>
        <button
          className="bg-blue-700 px-3 py-1 rounded-md text-white mt-2"
          onClick={() => signOut({ callbackUrl: "/auth/login" })}
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="text-lg p-2 text-center my-32">
      <p>You are not signed in.</p>
      <button
        className="bg-blue-700 px-3 py-1 rounded-md text-white mt-2"
        onClick={() => signIn("google", { callbackUrl: "/home" })}
      >
        Sign in with Google
      </button>
    </div>
  );
}
