// @flow strict

import React from "react";
import { experiences } from "@/utils/data/experience";
import { BsPersonWorkspace } from "react-icons/bs";

function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Experience
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white text-center">
          Professional Journey
        </h2>
        <div className="mt-3 w-24 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-col items-start bg-[#0f1f1a] border border-emerald-900/30 rounded-xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_25px_rgba(16,185,129,0.2)]"
          >
            {/* Icon and Duration */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-full text-emerald-400">
                <BsPersonWorkspace size={24} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-emerald-300">
                {exp.duration}
              </span>
            </div>

            {/* Title & Company */}
            <div className="mb-2">
              <p className="text-lg sm:text-xl font-semibold text-white">
                {exp.title}
              </p>
              <p className="text-sm sm:text-base text-gray-300">{exp.company}</p>
            </div>

            {/* Optional Description */}
            {exp.description && (
              <p className="text-sm sm:text-base text-white/70 leading-relaxed mt-2">
                {exp.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
