"use client";

import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "ABOUT", href: "/#about" },
    { label: "EXPERIENCE", href: "/#experience" },
    { label: "SKILLS", href: "/#skills" },
    { label: "EDUCATION", href: "/#education" },
    { label: "BLOGS", href: "/blog" },
    { label: "PROJECTS", href: "/#projects" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#081412]/70 backdrop-blur-md border-b border-emerald-900/30">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
        >
          Muhammad Ali
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2 text-sm font-medium tracking-wide">
          {links.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="group relative px-4 py-2 text-gray-200 transition-colors duration-300 hover:text-emerald-300"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-[1px] bg-gradient-to-r from-emerald-400 to-teal-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden rounded-lg border border-emerald-800/40 p-2 text-emerald-400 hover:bg-emerald-900/20 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            className="h-6 w-6"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>

        {/* ✅ Mobile Overlay Menu */}
        <div
          className={`absolute left-0 right-0 top-full origin-top transform transition-all duration-500 ease-out
          ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
        >
          <ul className="mx-4 mt-3 rounded-2xl border border-emerald-900/30 bg-[#081412]/95 backdrop-blur-xl p-4 shadow-xl">
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-200 transition-all duration-300 hover:bg-emerald-900/20 hover:text-emerald-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
