"use client";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Dropdown from "@/components/navigation/Dropdown";
import { Button } from "@/components/ui/button";
// import GoogleBadge from "@/components/review/badge/GoogleBadge";

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
          className={`absolute top-0 mr-auto h-16 transition duration-300 ease-in-out $`}
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
        <div className="flex h-full items-center">
          <div
            className={`shrink-0 transition-all duration-50 ${shrink ? "md:w-10" : "md:w-16"}`}
            style={{ width: logoSize.width }}
            aria-hidden="true"
          />

          <div className="block flex-col">
            <div
              className="elfsight-app-d65e3e64-ad0a-4ea9-8a67-3210435771b5"
              data-elfsight-app-lazy
            />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex ml-auto gap-2 sm:gap-6 md:hidden items-center whitespace-nowrap">
          <a
            href="tel:+18888881403"
            className="relative hidden min-[500px]:flex items-center justify-center rounded-lg
             bg-orange-500 px-4 py-3 text-center text-md font-bold
             leading-tight text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 absolute left-2 top-3 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            Call Now <br />
            (888) 888-1403
          </a>

          <button
            type="button"
            className="shrink-0 rounded-md p-2 text-gray-700 hover:bg-gray-100 "
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
        </div>

        {/* Mobile Dropdown*/}
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
            <a
              href="tel:+18888881403"
              className="relative flex items-center justify-center rounded-lg
             bg-orange-500 px-4 py-1 text-center text-md font-bold
             leading-tight text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 absolute left-4 top-3 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              Call Now <br />
              (888) 888-1403
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
