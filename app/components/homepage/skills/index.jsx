// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-visible my-12"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center my-8 lg:my-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center">
          My Technical Skills
        </h2>
        <p className="mt-2 text-sm sm:text-base text-white/60 text-center max-w-xl">
          A snapshot of the technologies and tools I use to build modern,
          scalable web applications.
        </p>
        <div className="mt-4 w-24 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
      </div>

      {/* Skills Marquee */}
      <div className="w-full my-12">
      <Marquee gradient={false} speed={50} pauseOnHover pauseOnClick>
  {skillsData.map((skill, id) => (
    <div
      key={id}
      className="flex-shrink-0 w-32 sm:w-36 lg:w-40 mx-3 transform transition-transform hover:border-emerald-400 duration-300 origin-center hover:scale-90 hover:cursor-pointer"
    >
      <div className="relative flex flex-col items-center justify-center rounded-xl bg-[#0f1e1a]/80 border border-emerald-900/30 p-5 shadow hover:border-emerald-400/50 transition-all duration-300 overflow-visible">
        
        {/* Icon Circle */}
        <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-900/10 mb-3">
          <Image
            src={skillsImage(skill)?.src}
            alt={skill}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {/* Skill Name */}
        <p className="text-sm sm:text-base text-white font-medium text-center">
          {skill}
        </p>

        {/* Bottom accent line */}
        <div className="mt-2 w-12 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
      </div>
    </div>
  ))}
</Marquee>

      </div>
    </section>
  );
}

export default Skills;
