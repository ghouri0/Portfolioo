// @flow strict
"use client";

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

function Skills() {
  const containerRef = useRef(null);
  const x = useRef(0);

  useAnimationFrame((t, delta) => {
    if (!containerRef.current) return;

    // Speed control
    x.current -= delta * 0.03;

    // Reset for seamless loop
    if (Math.abs(x.current) >= containerRef.current.scrollWidth / 2) {
      x.current = 0;
    }

    containerRef.current.style.transform = `translateX(${x.current}px)`;
  });

  return (
    <section id="skills" className="relative my-20 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center">
          My Technical Skills
        </h2>
        <p className="mt-2 text-sm sm:text-base text-white/60 text-center max-w-xl">
          Technologies and tools I use to build scalable, modern applications.
        </p>
        <div className="mt-4 w-24 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
      </div>

      {/* Fade edges */}
      {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#07120f] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#07120f] to-transparent z-10" /> */}

      {/* Ticker */}
      <div className="relative overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex w-max gap-6 px-6"
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...skillsData, ...skillsData].map((skill, index) => (
            <motion.div
              key={`${skill}-${index}`}
              whileHover={{ y: -8, scale: 0.85 }}
              transition={{ type: "tween" , stiffness: 250, damping: 20 }}
              className="group"
            >
              <div className="w-36 sm:w-40 rounded-xl border border-emerald-900/30 p-5 flex flex-col items-center justify-center transition-all duration-300 group-hover:border-emerald-400/50 group-hover:shadow-[0_15px_40px_-15px_rgba(16,185,129,0.4)]">
                
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-900/10 mb-3">
                  <Image
                    src={skillsImage(skill)?.src}
                    alt={skill}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <p className="text-sm text-white font-medium text-center">
                  {skill}
                </p>

                {/* Accent */}
                <div className="mt-2 w-10 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
