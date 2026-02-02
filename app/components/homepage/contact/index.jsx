"use client";
// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from "./contact-form";

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-[#16f2b3]/20"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Get in Touch
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Contact Me
        </h2>
        <div className="mt-2 w-24 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded" />
        <p className="mt-4 text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
          I’m always open to discussing projects, opportunities, or collaborations. Reach out via email, phone, or my socials below.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Contact Form */}
        <ContactForm />

        {/* Contact Info & Socials */}
        <div className="flex flex-col justify-start gap-8">
          {/* Contact Methods */}
          <div className="flex flex-col gap-6">
            {/* Email */}
            <a
              href={`mailto:${personalData.email}`}
              className="group flex items-center gap-4 text-sm sm:text-base text-white/70 hover:text-emerald-400 transition"
            >
              <MdAlternateEmail className="p-2 rounded-full bg-[#0f1e1a] text-emerald-400 border border-emerald-900/20 transition-transform duration-300 group-hover:scale-110" size={28} />
              <span className="group-hover:underline underline-offset-4">{personalData.email}</span>
            </a>

            {/* Phone */}
            <a
              href={`tel:${personalData.phone}`}
              className="group flex items-center gap-4 text-sm sm:text-base text-white/70 hover:text-emerald-400 transition"
            >
              <IoMdCall className="p-2 rounded-full bg-[#0f1e1a] text-emerald-400 border border-emerald-900/20 transition-transform duration-300 group-hover:scale-110" size={28} />
              <span className="group-hover:underline underline-offset-4">{personalData.phone}</span>
            </a>

            {/* Location */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalData.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-sm sm:text-base text-white/70 hover:text-emerald-400 transition"
            >
              <CiLocationOn className="p-2 rounded-full bg-[#0f1e1a] text-emerald-400 border border-emerald-900/20 transition-transform duration-300 group-hover:scale-110" size={28} />
              <span className="group-hover:underline underline-offset-4">{personalData.address}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex gap-6">
            <Link href={personalData.github} target="_blank">
              <IoLogoGithub className="p-3 rounded-full bg-[#0f1e1a] text-emerald-400 border border-emerald-900/20 hover:bg-emerald-400/10 transition" size={40} />
            </Link>
            <Link href={personalData.linkedIn} target="_blank">
              <BiLogoLinkedin className="p-3 rounded-full bg-[#0f1e1a] text-emerald-400 border border-emerald-900/20 hover:bg-emerald-400/10 transition" size={40} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
