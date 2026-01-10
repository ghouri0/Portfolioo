// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div
  id="skills"
  className="relative border-t my-12 lg:my-24 border-[#1e2a3a] overflow-hidden"
>
  {/* subtle green ambient glow */}
  <div className="w-[140px] h-[140px] bg-[#16f2b3]/10 rounded-full absolute top-10 left-1/2 -translate-x-1/2 blur-3xl pointer-events-none"></div>

  {/* top divider */}
  <div className="flex justify-center -translate-y-[1px]">
    <div className="w-3/4">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3]/40 to-transparent w-full" />
    </div>
  </div>

  {/* section heading */}
  <div className="flex justify-center my-5 lg:py-8">
    <div className="flex items-center gap-4">
      <span className="w-16 h-[1px] bg-[#16f2b3]/40"></span>

      <span className="bg-[#0f1e1a] text-[#16f2b3] px-5 py-2 text-sm tracking-widest uppercase rounded-md border border-[#16f2b3]/20">
        Skills
      </span>

      <span className="w-16 h-[1px] bg-[#16f2b3]/40"></span>
    </div>
  </div>

  {/* skills grid (no marquee styling change) */}
  <div className="w-full my-12">
    <Marquee gradient={false} speed={80} pauseOnHover pauseOnClick>
      {skillsData.map((skill, id) => (
        <div
          key={id}
          className="w-36 min-w-fit h-fit flex flex-col items-center justify-center m-3 sm:m-5 transition-transform duration-300 hover:scale-[1.08] cursor-pointer"
        >
          <div className="w-full rounded-lg border border-[#1f3a34] bg-[#0f172a]/70 backdrop-blur-sm transition-colors duration-300 hover:border-[#16f2b3]/50">
            {/* card top line */}
            <div className="flex justify-center">
              <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3]/40 to-transparent" />
            </div>

            <div className="flex flex-col items-center justify-center gap-3 p-6">
              <div className="h-9">
                <Image
                  src={skillsImage(skill)?.src}
                  alt={skill}
                  width={36}
                  height={36}
                  className="h-full w-auto opacity-90"
                />
              </div>

              <p className="text-sm sm:text-base text-gray-200 tracking-wide">
                {skill}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Marquee>
  </div>
</div>

  );
};

export default Skills;