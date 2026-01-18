"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function Navbar() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-white border-b">
      <div className="container relative fixed mx-auto flex items-center justify-between">
        <div
          className={`relative items-start justify-start mr-auto ${
            shrink ? "h-10 w-36" : "h-30 w-48"
          } transition-all duration-300`}
        >
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              fill
              className="object-contain"
            ></Image>
          </Link>
        </div>

        <nav className="flex ml-auto justify-end text-black text-nowrap text-lg font-medium">
          <div className="group">
            <Link
              href="/services"
              className="inline-flex px-5 py-10 group-hover:bg-orange-500"
            >
              Services
              <span className="transition-transform group-hover:rotate-180">
                ▾
              </span>
            </Link>
            <div className="absolute opacity-0 pointer-events-none transition-opacity group-hover:opacity-100">
              <Link href="/services#repipe">Copper & PEX Repipe</Link>
              <Link href="/#water-heater">Water Heater Installation</Link>
              <Link href="/#gas">Gas Line Installation & Repair</Link>
              <Link href="/#unclog-drain">Unclog Drain</Link>
              <Link href="/#=fixture">Water Heater Installation</Link>
            </div>
          </div>

          <Link href="/company" className="px-5 py-10 hover:bg-orange-500">
            Company
          </Link>
          <Link href="/contact" className="px-5 py-10 hover:bg-orange-500">
            Contact Us
          </Link>
          <span className="text-orange-600 px-5 py-10">
            {" "}
            Call (888) 888-1403
          </span>
        </nav>
      </div>
    </header>
  );
}
