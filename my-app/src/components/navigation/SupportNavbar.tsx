"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SupportNavbar() {
  return (
    <div className="fixed bg-gray-400 inset-x-0 top-0 z-50">
      <header className="relative mx-auto flex justify-between px-6 z-50 max-w-7xl overflow-visible py-1">
        <div className="">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
            quality={100}
            unoptimized={true}
          ></Image>
        </div>
        <nav className="flex items-center text-orange-600 text-nowrap text-lg font-bold">
          <div className="group flex relative ">
            <Link href="/support/login">Log Out</Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
