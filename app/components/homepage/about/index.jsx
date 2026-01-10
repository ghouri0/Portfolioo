// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
   <div id="about" className="relative my-14 lg:my-20">

  {/* Side Label (Desktop) */}
  <div className="hidden lg:flex flex-col items-center absolute top-20 -right-10">
    <span className="bg-[#0f1f1a] text-emerald-300 rotate-90 px-6 py-2 text-lg font-semibold tracking-wider rounded-md border border-emerald-800/40">
      ABOUT ME
    </span>
    <span className="mt-2 h-36 w-[2px] bg-gradient-to-b from-emerald-400/70 to-transparent"></span>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

    {/* Text Content */}
    <div className="order-2 lg:order-1">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
        Who I Am
      </p>

      <p className="text-gray-200/90 text-sm lg:text-lg leading-relaxed text-justify">
        {personalData.description}
      </p>
    </div>

    {/* Profile Image */}
    <div className="order-1 lg:order-2 flex justify-center">
      <div className="relative group">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-emerald-500/20 to-teal-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        <Image
          src={personalData.profile}
          width={350}
          height={320}
          alt="Muhammad Ali"
          className="relative rounded-xl border border-emerald-900/40 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 cursor-pointer"
        />
      </div>
    </div>

  </div>
</div>

  );
};

export default AboutSection;