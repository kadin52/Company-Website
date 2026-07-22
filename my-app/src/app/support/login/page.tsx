"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { auth } from "../../../lib/firebase";

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default function SupportLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (user) => {
  //     if (!user) return;
  //   });
  //   return () => unsubscribe();
  // }, [router]);

  const validatedForm = () => {
    if (!email || !password) {
      return "Please fill in all fields.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address.";
    }
    return null;
  };

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setError(null);

    const inputError = validatedForm();
    if (inputError) {
      setError(inputError);
      return;
    }
    setLoading(true);

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      router.replace("/support/support-chat");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className=" min-h-[65vh] w-full flex items-start justify-center ">
      <div
        // bg-radial-[at_50%_75%] from-indigo-200 via-indigo-50 to-indigo-300 to-90%
        className="bg-gray-300
       flex flex-col justify-center items-center shadow-lg max-w-3xl py-15 px-30 border-3 "
      >
        <div className="justify-center items-center flex-col flex mb-10">
          <h2 className="font-bold text-5xl text-orange-600 mt-2 mb-5">
            Sign In
          </h2>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg> */}
          <Image src="/assets/logo.png" alt="Logo" width={100} height={100} />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col ">
          <input
            className="p-2 mt-8 border w-full bg-white"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />
          <div className="relative">
            <input
              className="p-2 mt-3 border w-full bg-white"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
            />
          </div>

          <button
            className="Login-button rounded-xl text-black py-2 mt-10"
            disabled={loading}
            type="submit"
          >
            Continue
          </button>
          {error && (
            <p className="mt-4 text-sm text-center text-red-700" role="alert">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
