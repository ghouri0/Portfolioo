// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Education() {
  return (
    <div
  id="education"
  className="relative my-12 lg:my-24 border-t border-[#16f2b3]/20"
>
  {/* Background pattern */}
  <Image
    src="/section.svg"
    alt="Section background"
    width={1572}
    height={795}
    className="absolute top-0 -z-10 opacity-70"
  />

  {/* top divider */}
  <div className="flex justify-center -translate-y-[1px]">
    <div className="w-3/4">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3]/40 to-transparent" />
    </div>
  </div>

  {/* Section heading */}
  <div className="flex justify-center my-6 lg:py-10">
    <div className="flex items-center gap-4">
      <span className="w-20 h-[1px] bg-[#16f2b3]/30" />
      <span className="bg-[#0f1e1a] text-[#16f2b3] px-6 py-2 text-sm tracking-widest uppercase rounded-md border border-[#16f2b3]/20">
        Education
      </span>
      <span className="w-20 h-[1px] bg-[#16f2b3]/30" />
    </div>
  </div>

  {/* Content */}
  <div className="py-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      
      {/* Animation */}
      <div className="flex justify-center items-start">
        <div className="w-3/4 h-3/4 opacity-90">
          <AnimationLottie animationPath={lottieFile} />
        </div>
      </div>

      {/* Education cards */}
      <div>
        <div className="flex flex-col gap-6">
          {educations.map((education) => (
            <GlowCard
              key={education.id}
              identifier={`education-${education.id}`}
              className="bg-[#0b1a16]/80 border border-[#16f2b3]/10 hover:border-[#16f2b3]/30 transition-all"
            >
              <div className="p-5 relative text-white/80">
                
                {/* subtle bottom blur */}
                <Image
                  src="/blur-23.svg"
                  alt=""
                  width={1080}
                  height={200}
                  className="absolute bottom-0 opacity-40 pointer-events-none"
                />

                <div className="flex justify-center mb-2">
                  <p className="text-xs tracking-widest text-[#16f2b3] uppercase">
                    {education.duration}
                  </p>
                </div>

                <div className="flex items-start gap-x-6 px-2 py-4">
                  <div className="text-[#16f2b3]/70">
                    <BsPersonWorkspace size={32} />
                  </div>

                  <div>
                    <p className="text-base sm:text-lg font-medium uppercase text-white">
                      {education.title}
                    </p>
                    <p className="text-sm sm:text-base text-white/70 mt-1">
                      {education.institution}
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

export default Education;