// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div
  id="contact"
  className="relative my-12 lg:my-20 mt-24 text-white"
>
  {/* Vertical section label */}
  <div className="hidden lg:flex flex-col items-center absolute top-24 -right-10">
    <span className="bg-[#0f1e1a] text-[#16f2b3] rotate-90 px-6 py-2 text-xs tracking-widest uppercase rounded-md border border-[#16f2b3]/20">
      Contact
    </span>
    <span className="h-36 w-[1px] bg-[#16f2b3]/30 mt-2" />
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
    
    {/* Form */}
    <ContactForm />

    {/* Info */}
    <div className="lg:w-3/4">
      <div className="flex flex-col gap-6 lg:gap-8">

        {/* Email */}
        <p className="flex items-center gap-4 text-sm md:text-lg text-white/80">
          <MdAlternateEmail
            size={32}
            className="p-2 rounded-full bg-[#0f1e1a] text-[#16f2b3] border border-[#16f2b3]/20"
          />
          <span>{personalData.email}</span>
        </p>

        {/* Phone */}
        <p className="flex items-center gap-4 text-sm md:text-lg text-white/80">
          <IoMdCall
            size={32}
            className="p-2 rounded-full bg-[#0f1e1a] text-[#16f2b3] border border-[#16f2b3]/20"
          />
          <span>{personalData.phone}</span>
        </p>

        {/* Location */}
        <p className="flex items-center gap-4 text-sm md:text-lg text-white/80">
          <CiLocationOn
            size={32}
            className="p-2 rounded-full bg-[#0f1e1a] text-[#16f2b3] border border-[#16f2b3]/20"
          />
          <span>{personalData.address}</span>
        </p>
      </div>

      {/* Social links */}
      <div className="mt-10 lg:mt-16 flex items-center gap-6">
        <Link target="_blank" href={personalData.github}>
          <IoLogoGithub
            size={44}
            className="p-3 rounded-full bg-[#0f1e1a] text-[#16f2b3] border border-[#16f2b3]/20 hover:bg-[#16f2b3]/10 transition"
          />
        </Link>

        <Link target="_blank" href={personalData.linkedIn}>
          <BiLogoLinkedin
            size={44}
            className="p-3 rounded-full bg-[#0f1e1a] text-[#16f2b3] border border-[#16f2b3]/20 hover:bg-[#16f2b3]/10 transition"
          />
        </Link>
      </div>
    </div>
  </div>
</div>

  );
};

export default ContactSection;