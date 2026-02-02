// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-24">
      {/* Background grid */}
      {/* <Image
        src="/hero-grid.svg"
        alt="Background Grid"
        width={1572}
        height={795}
        className="pointer-events-none absolute left-1/2 top-[-60px] -z-10 w-[1400px] -translate-x-1/2 opacity-60"
      /> */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ================= LEFT CONTENT ================= */}
          <div className="order-2 lg:order-1 flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Building modern web experiences
            </h1>

            <p className="mx-auto max-w-xl text-sm sm:text-base text-white/70 lg:mx-0">
              I’m a full-stack developer specializing in scalable web
              applications using React, Next.js, and Node.js. I focus on clean
              architecture, performance, and long-term maintainability.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="rounded-lg bg-emerald-500/10 px-6 py-3 text-sm font-medium text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all duration-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Contact Me →
              </a>
            </div>
          </div>

          {/* ================= RIGHT CARD ================= */}
          <div className="order-1 lg:order-2 relative rounded-2xl border border-emerald-900/30 bg-gradient-to-br from-[#07120f] via-[#0b1c16] to-[#07120f] p-6 sm:p-8 lg:p-10 shadow-[0_0_50px_rgba(16,185,129,0.08)]">
            {/* Accent line */}
            <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

            <div className="flex flex-col gap-6">
              {/* Header */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  Muhammad Ali
                </h2>
                <p className="mt-1 text-sm text-emerald-400">
                  Full-Stack Developer · MERN · Next.js
                </p>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                I build secure, high-performance applications using modern
                JavaScript frameworks and backend technologies. Passionate about
                solving real-world problems with clean solutions.
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2.5">
                {[
                  "React & Next.js",
                  "Node & NestJS",
                  "REST & GraphQL",
                  "Databases",
                  "Docker",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-emerald-900/40 bg-emerald-900/10 px-3.5 py-1.5 text-xs sm:text-sm text-emerald-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                {/* Resume */}
                <a
                  href={personalData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 transition-all duration-300"
                >
                  <HiOutlineDownload className="text-lg" />
                  Get Resume
                </a>

                {/* Socials */}
                <div className="flex items-center gap-3">
                  <a
                    href={personalData.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-full border border-emerald-900/40 p-2.5 text-white/70 hover:text-emerald-400 hover:border-emerald-400 transition-all duration-300"
                  >
                    <FaLinkedinIn className="text-lg" />
                  </a>

                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="rounded-full border border-emerald-900/40 p-2.5 text-white/70 hover:text-emerald-400 hover:border-emerald-400 transition-all duration-300"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
