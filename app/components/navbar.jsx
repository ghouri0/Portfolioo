"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Education", href: "/#education" },
    { label: "Projects", href: "/#projects" },
    // { label: "Blogs", href: "/blog" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#081412]/80 backdrop-blur-xl border-b border-emerald-900/30">
      {/* subtle top accent */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="#hero" aria-label="Home" className="">
          <MALogo size={32} />


        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
          {links.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="relative px-4 py-2 text-white/70 transition-colors duration-300 hover:text-emerald-300"
              >
                {item.label}
                <span
                  className="absolute left-1/2 -bottom-1 h-[2px] w-0 -translate-x-1/2
                bg-emerald-400 transition-all duration-300 hover:w-full group-hover:w-full"
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
          className="md:hidden rounded-lg border border-emerald-900/40
          p-2 text-emerald-400 hover:bg-emerald-900/20 transition"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            className="h-6 w-6"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden border-t border-emerald-900/30 bg-[#081412]/95 backdrop-blur-xl"
          >
            <ul className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
              {links.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium
                    text-white/80 hover:bg-emerald-900/20 hover:text-emerald-300 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

const MALogo = ({ size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="10"
        stroke="url(#ma-gradient)"
        strokeWidth="2"
      />
      <path
        d="M11 26V14L20 22L29 14V26"
        stroke="url(#ma-gradient)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="ma-gradient" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>
    </svg>
  );
};

