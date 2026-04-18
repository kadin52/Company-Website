"use client";
import { usePathname } from "next/navigation";

export default function DisplayIfCustomer({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "";
  if (pathname.startsWith("/admin") || pathname.startsWith("support"))
    return null;
  return <>{children}</>;
}
