// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
 <div className="relative border-t border-[#16f2b3]/20 bg-[#0b1a16] text-white">
  {/* subtle top divider */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-1/3 bg-gradient-to-r from-transparent via-[#16f2b3]/40 to-transparent" />

  <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-8">
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

      {/* Left */}
      <p className="text-xs md:text-sm text-white/70">
        © {new Date().getFullYear()} · Built & Designed by{" "}
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/muhammad-ali1122/"
          className="text-[#16f2b3] hover:underline underline-offset-4"
        >
          Muhammad Ali
        </Link>
      </p>

      {/* Right */}
      <p className="text-xs md:text-sm text-white/40 tracking-wide">
        Full-Stack Developer · MERN Stack
      </p>

    </div>
  </div>
</div>

  );
};

export default Footer;