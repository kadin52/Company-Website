"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function SupportAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setAuthorized(false);
        router.replace("/support/login");
        return;
      }
      setAuthorized(true);
    });
    return unsubscribe;
  }, [router]);

  if (!authorized) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
