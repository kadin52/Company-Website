"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db, auth } from "../../../lib/firebase";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function SuportLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) router.push("/support-chat");
    });
    return () => unsubscribe();
  }, [auth, router]);

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/support-chat");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-[#7ad3f62a] flex justify-center rounded-2xl shadow-lg max-w-3xl p-4 border-3">
        <div className="sm:w-1/2 px-16 border-4">
          <h2 className="font-bold text-2xl text-[#4527a5] text-center">
            Login
          </h2>
          <p className="text-sm mt-7 text-[#6c57b1] text-opacity-70 text-center">
            If you already a member, easily log in
          </p>

          <form className="flex flex-col gap-4" action="">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              name="email"
              placeholder="Your email"
            />
            <div className="relative">
              <input
                className="p-2 mt-8 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Your password"
              />

              <svg
                className="bi bi-eye-fill absolute top-1/2 right-4 
                    translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </div>

            <button className="Login-button rounded-xl text-white py-2">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
