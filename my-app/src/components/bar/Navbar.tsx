"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Dropdown from "@/components/bar/Dropdown";

const serviceItems = [
  {
    label: "Copper & PEX Repipe",
    href: "/services#copper-pex-repipe",
  },
  {
    label: "Water Heater Installation",
    href: "/services#water-heater-installation",
  },
  {
    label: "Gas Line Installation & Repair",
    href: "/services#gas-line-installation-repair",
  },
  {
    label: "Unclog Drain",
    href: "/services#unclog-drain",
  },
  {
    label: "Fixture Installation & Repair",
    href: "/services#fixture-replacement-installation",
  },
];

const companyItems = [
  {
    label: "Who We Are",
    href: "/company#who-we-are",
  },
  {
    label: "Why Choose Us",
    href: "/company#why-choose-us",
  },
  {
    label: "Our Mission & Values",
    href: "/company#our-mission",
  },
  {
    label: "Our Company Culture",
    href: "/company#our-company-culture",
  },
];

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<
    "services" | "company" | null
  >(null);

  const logoSize = shrink
    ? { width: 100, height: 100 }
    : { width: 150, height: 150 };

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
    <div
      id="site-navbar"
      className="fixed inset-x-0 top-0 z-100 border-b bg-white"
    >
      <header className="relative mx-auto flex h-20 max-w-7xl items-stretch justify-between overflow-visible md:px-5">
        <div
          className="absolute top-0 mr-auto h-16 transition duration-300 ease-in-out"
          style={{
            width: logoSize.width,
            height: logoSize.height,
          }}
        >
          <Link href="/" className="relative block h-full w-full">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              quality={100}
              unoptimized
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="ml-auto rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-10 w-7"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile*/}
        {menuOpen && (
          <nav className="absolute inset-x-0 top-full flex flex-col border-t bg-white p-4 font-bold text-orange-600 shadow-md md:hidden">
            <button
              type="button"
              className="flex w-full items-center px-3 py-3 text-left"
              aria-expanded={mobileDropdownOpen === "services"}
              onClick={() =>
                setMobileDropdownOpen((current) =>
                  current === "services" ? null : "services",
                )
              }
            >
              Services
              <span
                className={`ml-auto transition-transform ${
                  mobileDropdownOpen === "services" ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {mobileDropdownOpen === "services" && (
              <div
                onClick={() => {
                  setMobileDropdownOpen(null);
                  setMenuOpen(false);
                }}
              >
                <Dropdown items={serviceItems} mobile />
              </div>
            )}

            <button
              type="button"
              className="flex w-full items-center px-3 py-3 text-left"
              aria-expanded={mobileDropdownOpen === "company"}
              onClick={() =>
                setMobileDropdownOpen((current) =>
                  current === "company" ? null : "company",
                )
              }
            >
              Company
              <span
                className={`ml-auto transition-transform ${
                  mobileDropdownOpen === "company" ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {mobileDropdownOpen === "company" && (
              <div
                onClick={() => {
                  setMobileDropdownOpen(null);
                  setMenuOpen(false);
                }}
              >
                <Dropdown items={companyItems} mobile />
              </div>
            )}

            <Link
              href="/contact"
              className="px-3 py-3"
              onClick={() => {
                setMobileDropdownOpen(null);
                setMenuOpen(false);
              }}
            >
              Contact Us
            </Link>
          </nav>
        )}

        {/* Desktop*/}
        <nav className="ml-auto hidden items-stretch justify-end text-nowrap text-sm font-bold text-gray-700 md:flex">
          <div className="group relative flex items-stretch">
            <Link
              href="/services"
              className="flex items-center px-5 group-hover:bg-orange-600 group-hover:text-white"
            >
              Services
              <span className="transition-transform group-hover:rotate-180">
                ▾
              </span>
            </Link>

            <Dropdown items={serviceItems} />
          </div>

          <div className="group relative flex items-stretch">
            <Link
              href="/company"
              className="flex items-center px-5 py-8 hover:bg-orange-600 hover:text-white"
            >
              Company
              <span className="transition-transform group-hover:rotate-180">
                ▾
              </span>
            </Link>

            <Dropdown items={companyItems} />
          </div>

          <Link
            href="/contact"
            className="flex items-center px-5 hover:bg-orange-600 hover:text-white"
          >
            Contact Us
          </Link>

          <div className="mx-5 hidden my-auto text-2xl font-bold text-orange-600 md:inline">
            <a href="tel:+18888881403" className="text-orange-600">
              Call (888) 888-1403
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
