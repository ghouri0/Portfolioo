// @flow strict

import { personalData } from "../../../../utils/data/personal-data.js";
import Image from "next/image";

function AboutSection() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
    >
      {/* ================= IMAGE ================= */}
      <div className="flex-shrink-0 flex justify-center lg:justify-start">
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-emerald-500">
          <Image
            src={personalData.profile}
            alt="Muhammad Ali"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>

      {/* ================= TEXT ================= */}
      <div className="flex-1 flex flex-col gap-4 text-center lg:text-left">
        {/* Section Header */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            About Me
          </p>
          <h2 className="mt-1 text-2xl sm:text-3xl font-semibold text-white">
            Building Reliable Web Products
          </h2>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-white/75 leading-relaxed">
          {personalData.description}
        </p>
        <p className="text-sm sm:text-base text-white/75 leading-relaxed">
          I enjoy working across the entire product lifecycle — from planning
          and architecture to development, optimization, and deployment. I
          value clean code, thoughtful UX, and collaboration within fast-moving
          teams.
        </p>

        {/* Highlights */}
        <div className="mt-4 flex flex-wrap gap-3 justify-center lg:justify-start">
          {[
            "Full-Stack Development",
            "Scalable Architecture",
            "Performance-Focused",
            "Team Collaboration",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-emerald-900/40 bg-emerald-900/10 px-3 py-1 text-xs sm:text-sm text-emerald-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
