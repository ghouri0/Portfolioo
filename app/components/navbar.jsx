// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#081412]/70 backdrop-blur-md border-b border-emerald-900/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">

        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
        >
          Muhammad Ali
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-2 text-sm font-medium tracking-wide">

          {[
            { label: "ABOUT", href: "/#about" },
            { label: "EXPERIENCE", href: "/#experience" },
            { label: "SKILLS", href: "/#skills" },
            { label: "EDUCATION", href: "/#education" },
            { label: "BLOGS", href: "/blog" },
            { label: "PROJECTS", href: "/#projects" },
          ].map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="group relative px-4 py-2 text-gray-200 transition-colors duration-300 hover:text-emerald-300"
              >
                {item.label}

                {/* underline glow */}
                <span className="absolute inset-x-0 -bottom-0.5 h-[1px] bg-gradient-to-r from-emerald-400 to-teal-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Placeholder (future toggle) */}
        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            className="rounded-lg border border-emerald-800/40 p-2 text-emerald-400 hover:bg-emerald-900/20 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
