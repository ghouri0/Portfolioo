"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput
      );

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    };
  };

  return (
   <div>
  <p className="mb-4 text-sm tracking-widest uppercase text-[#16f2b3]">
    Contact with me
  </p>

  <div className="max-w-3xl rounded-lg border border-[#16f2b3]/20 bg-[#0f1e1a]/40 p-4 lg:p-6 text-white">
    <p className="text-sm text-white/70 leading-relaxed">
      If you have any questions or opportunities that match my skills, feel free to reach out.
      I’m always open to discussing meaningful work.
    </p>

    <div className="mt-6 flex flex-col gap-5">
      
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-white/80">Your Name</label>
        <input
          className="w-full rounded-md border border-[#16f2b3]/20 bg-[#0b1a16] px-3 py-2 text-sm text-white
          outline-none focus:border-[#16f2b3] focus:ring-1 focus:ring-[#16f2b3]/30 transition"
          type="text"
          maxLength="100"
          required
          value={userInput.name}
          onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
          onBlur={checkRequired}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-white/80">Your Email</label>
        <input
          className="w-full rounded-md border border-[#16f2b3]/20 bg-[#0b1a16] px-3 py-2 text-sm text-white
          outline-none focus:border-[#16f2b3] focus:ring-1 focus:ring-[#16f2b3]/30 transition"
          type="email"
          maxLength="100"
          required
          value={userInput.email}
          onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
          onBlur={() => {
            checkRequired()
            setError({ ...error, email: !isValidEmail(userInput.email) })
          }}
        />
        {error.email && (
          <p className="text-xs text-red-400">
            Please provide a valid email address
          </p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-white/80">Your Message</label>
        <textarea
          className="w-full rounded-md border border-[#16f2b3]/20 bg-[#0b1a16] px-3 py-2 text-sm text-white
          outline-none focus:border-[#16f2b3] focus:ring-1 focus:ring-[#16f2b3]/30 transition"
          rows={4}
          maxLength={500}
          required
          value={userInput.message}
          onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
          onBlur={checkRequired}
        />
      </div>

      {/* Errors + Button */}
      <div className="flex flex-col items-start gap-3 pt-2">
        {error.required && (
          <p className="text-xs text-red-400">
            All fields are required
          </p>
        )}

        <button
          onClick={handleSendMail}
          disabled={isLoading}
          className="inline-flex items-center gap-2 rounded-md border border-[#16f2b3]/30
          bg-[#0f1e1a] px-6 py-2.5 text-sm font-medium uppercase tracking-wider
          text-[#16f2b3] hover:bg-[#16f2b3]/10 transition disabled:opacity-60"
        >
          {isLoading ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <TbMailForward size={18} />
            </>
          )}
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default ContactForm;