"use client";

import { motion } from "framer-motion";
import { HiOutlineDownload } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { personalData } from "@/utils/data/personal-data";

/* ---------------- ANIMATION VARIANTS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------------- COMPONENT ---------------- */

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-24" id="hero">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 flex flex-col gap-6 text-center lg:text-left"
          >
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white"
            >
              Building modern web experiences
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto max-w-xl text-sm sm:text-base text-white/70 lg:mx-0"
            >
              I’m a full-stack developer specializing in scalable web
              applications using React, Next.js, and Node.js. I focus on clean
              architecture, performance, and long-term maintainability.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
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
            </motion.div>
          </motion.div>

          {/* ================= RIGHT CARD ================= */}
          <motion.div
            variants={scaleFade}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="order-1 lg:order-2 relative rounded-2xl border border-emerald-900/30 bg-gradient-to-br from-[#07120f] via-[#0b1c16] to-[#07120f] p-6 sm:p-8 lg:p-10 shadow-[0_0_50px_rgba(16,185,129,0.08)]"
          >
            {/* Accent line */}
            <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

            <div className="flex flex-col gap-6">
              {/* Header */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  Muhammad Ali
                </h2>
                <p className="mt-1 text-sm text-emerald-400">
                  Full-Stack Developer · MERN
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
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-full border border-emerald-900/40 bg-emerald-900/10 px-3.5 py-1.5 text-xs sm:text-sm text-emerald-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <a
                  href="/CV.pdf"
                  download="Muhammad_Ali_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/40
  bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-300
  hover:bg-emerald-500/20 transition-all duration-300"
                >
                  <HiOutlineDownload className="text-lg" />
                  Get Resume
                </a>

                <div className="flex items-center gap-3">
                  <motion.a
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    href={personalData.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-full border border-emerald-900/40 p-2.5 text-white/70 hover:text-emerald-400 hover:border-emerald-400 transition-all duration-300"
                  >
                    <FaLinkedinIn className="text-lg" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="rounded-full border border-emerald-900/40 p-2.5 text-white/70 hover:text-emerald-400 hover:border-emerald-400 transition-all duration-300"
                  >
                    <FaGithub className="text-lg" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
