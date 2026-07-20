"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Dropdown from "@/components/bar/Dropdown";
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
        <nav className="flex ml-auto justify-end items-stretch my-8 text-gray-700 text-nowrap text-sm font-bold">
          <div className="group relative flex items-stretch">
            <Link
              href="/customer/services"
              className="flex px-5 items-center group-hover:bg-orange-600 group-hover:text-white"
            >
              Services
              <span className="transition-transform group-hover:rotate-180">
                ▾
              </span>
            </Link>

            <Dropdown
              items={[
                {
                  label: "Copper & PEX Repipe",
                  href: "/customer/services#copper-pex-repipe",
                },
                {
                  label: "Water Heater Installation",
                  href: "/customer/services#water-heater-installation",
                },
                {
                  label: "Gas Line Installation & Repair",
                  href: "/customer/services#gas-line-installation-repair",
                },
                {
                  label: "Unclog Drain",
                  href: "/customer/services#unclog-drain",
                },
                {
                  label: "Fixture Installation & Repair",
                  href: "/customer/services#fixture-replacement-installation",
                },
              ]}
            />
          </div>
          <div className="group relative flex items-stretch">
            <Link
              href="/customer/company"
              className="flex px-5 items-center hover:text-white hover:bg-orange-600"
            >
              Company
              <span className="transition-transform group-hover:rotate-180">
                ▾
              </span>
            </Link>
            <Dropdown
              items={[
                { label: "Who We Are", href: "/customer/company#who-we-are" },
                {
                  label: "Why Choose Us",
                  href: "/customer/company#why-choose-us",
                },
                {
                  label: "Our Mission & Values",
                  href: "/customer/company#our-mission",
                },
                {
                  label: "Our Company Culture",
                  href: "/customer/company#our-company-culture",
                },
              ]}
            />
          </div>
          <Link
            href="/customer/contact"
            className="flex px-5 items-center hover:text-white  hover:bg-orange-600"
          >
            Contact Us
          </Link>
          <span className="hidden md:inline text-orange-600 text-2xl mx-5  font-bold">
            {" "}
            Call (888) 888-1403
          </span>
        </nav>
      </header>
    </div>
  );
}
