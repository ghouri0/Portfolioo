// @flow strict
import { educations } from "@/utils/data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import lottieFile from '../../../assets/lottie/study.json';

function Education() {
  return (
    <section
      id="education"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Education
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
          My Academic Journey
        </h2>
        <div className="mt-2 w-24 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded" />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Lottie Animation */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-xs sm:max-w-sm">
            <AnimationLottie animationPath={lottieFile} />
          </div>
        </div>

        {/* Education Cards */}
        <div className="flex flex-col gap-6">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className="bg-[#0b1a16]/80 border border-[#16f2b3]/10 rounded-2xl p-6 hover:border-[#16f2b3]/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-[#16f2b3]/80 flex-shrink-0 mt-1">
                  <BsPersonWorkspace size={28} />
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-xs sm:text-sm font-medium tracking-widest text-emerald-400 uppercase">
                    {edu.duration}
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-white">
                    {edu.title}
                  </p>
                  <p className="text-sm sm:text-base text-white/70">
                    {edu.institution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
