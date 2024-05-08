"use client";

import { SignUpButton, SignInButton, useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { isSignedIn } = useUser();
  return (
    <main className="flex flex-col justify-center items-center gap-5 p-24 bg-black h-screen">
      {isSignedIn ? (
        <>
          <UserButton />
          <Link href={"/dashboard"}>Go to Dashboard</Link>
        </>
      ) : (
        <>
          <h1 className="text-teal-50 pb-4 font-bold">
            Wellcome to Photo Booth Application
          </h1>
          <Link
            href={"/sign-in"}
            className="p-2 border rounded-md bg-slate-950 text-teal-50"
          >
            Get Started
          </Link>
        </>
      )}
    </main>
  );
}
