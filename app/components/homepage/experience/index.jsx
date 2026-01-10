// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
  <div
  id="experience"
  className="relative z-40 my-16 lg:my-28 border-t border-emerald-900/30"
>
  {/* Background Accent */}
  <Image
    src="/section.svg"
    alt="section background"
    width={1572}
    height={795}
    className="absolute top-0 -z-10 opacity-50"
  />

  {/* Section Header */}
  <div className="flex justify-center py-6 lg:py-12">
    <div className="flex items-center gap-4">
      <span className="w-20 h-[1px] bg-gradient-to-r from-transparent to-emerald-400"></span>

      <span className="bg-[#0f1f1a] text-emerald-300 px-6 py-2 text-lg font-semibold tracking-widest rounded-md border border-emerald-800/40">
        EXPERIENCE
      </span>

      <span className="w-20 h-[1px] bg-gradient-to-l from-transparent to-teal-400"></span>
    </div>
  </div>

  {/* Content */}
  <div className="py-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

      {/* Lottie Animation */}
      <div className="flex justify-center items-start">
        <div className="w-full max-w-md">
          <AnimationLottie animationPath={experience} />
        </div>
      </div>

      {/* Experience Cards */}
      <div>
        <div className="flex flex-col gap-8">
          {experiences.map((exp) => (
            <GlowCard
              key={exp.id}
              identifier={`experience-${exp.id}`}
            >
              <div className="relative p-4 lg:p-5 rounded-xl">

                {/* Subtle Bottom Glow */}
                <Image
                  src="/blur-23.svg"
                  alt="blur"
                  width={1080}
                  height={200}
                  className="absolute bottom-0 left-0 w-full opacity-40 pointer-events-none"
                />

                {/* Duration */}
                <div className="flex justify-center mb-3">
                  <p className="text-xs sm:text-sm font-medium tracking-wide text-emerald-300">
                    {exp.duration}
                  </p>
                </div>

                {/* Card Content */}
                <div className="flex items-center gap-x-6 px-2 py-4">
                  <div className="text-emerald-400 transition-transform duration-300 hover:scale-110">
                    <BsPersonWorkspace size={34} />
                  </div>

                  <div>
                    <p className="text-base sm:text-lg font-semibold uppercase tracking-wide text-gray-100 mb-1">
                      {exp.title}
                    </p>
                    <p className="text-sm sm:text-base text-gray-300">
                      {exp.company}
                    </p>
                  </div>
                </div>

              </div>
            </GlowCard>
          ))}
        </div>
      </div>

    </div>
  </div>
</div>
  );
};

export default Experience;