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

  const logoSize = shrink
    ? { width: 100, height: 100 }
    : { width: 170, height: 170 };
  return (
    <div className="fixed bg-white border-b inset-x-0 top-0 z-50">
      <header className="container relative mx-auto flex items-stretch justify-between z-50 max-w-7xl overflow-visible">
        <div
          className="absolute mr-auto top-0 ease-in-out duration-300"
          style={{ width: logoSize.width, height: logoSize.height }}
        >
          <Link href="/" className="block w-full h-full relative">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              quality={100}
              unoptimized={true}
            ></Image>
          </Link>
        </div>
        <nav className="flex ml-auto justify-end items-stretch text-gray-700 text-nowrap text-sm font-bold">
          <div className="group flex items-stretch relative">
            <Link
              href="/services"
              className="flex px-5 items-center group-hover:bg-orange-600 group-hover:text-white"
            >
              Services
              <span className="transition-transform group-hover:rotate-180">
                ▾
              </span>
            </Link>
            <div className="absolute opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 ">
              <Link href="/services#repipe">Copper & PEX Repipe</Link>
              <Link href="/#water-heater">Water Heater Installation</Link>
              <Link href="/#gas">Gas Line Installation & Repair</Link>
              <Link href="/#unclog-drain">Unclog Drain</Link>
              <Link href="/#=fixture">Water Heater Installation</Link>
            </div>
          </div>
          <Link
            href="/company"
            className="flex px-5 items-center hover:text-white hover:bg-orange-600"
          >
            Company
          </Link>
          <Link
            href="/contact"
            className="flex px-5 items-center hover:text-white  hover:bg-orange-600"
          >
            Contact Us
          </Link>
          <span className="text-orange-600 text-2xl mx-5 my-8 font-bold">
            {" "}
            Call (888) 888-1403
          </span>
        </nav>
      </header>
    </div>
  );
}
