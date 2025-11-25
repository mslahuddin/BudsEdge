"use client";

import { useState } from "react";
import { User, Mail, MessageCircle, Phone } from "lucide-react";
import toast from "react-hot-toast";
import bg_stars from "../assets/bg3.png";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-24 text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg_stars.src})` }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
          Get in Touch
        </h2>

        <p className="max-w-xl mx-auto text-gray-300 mb-12">
          Have a project in mind? Let’s discuss how BudsEdge can help your
          business grow.
        </p>

        {/* FORM */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);

            const form = new FormData(e.target);

            const res = await fetch("/api/contact", {
              method: "POST",
              body: JSON.stringify({
                name: form.get("name"),
                email: form.get("email"),
                phone: form.get("phone"),
                message: form.get("message"),
              }),
              headers: { "Content-Type": "application/json" },
            });

            setLoading(false);

            if (res.ok) {
              toast.success("Message sent successfully!");
              e.target.reset();
            } else {
              toast.error("Failed to send message. Try again.");
            }
          }}
          className={`
            max-w-xl mx-auto p-8 rounded-2xl 
            backdrop-blur-md bg-[#0a1628cc] 
            border border-[#1a2a3a] 
            shadow-lg shadow-[#00e0ff33]
            hover:shadow-[#00e0ff55] 
            transition-all duration-500
            animate-fadeInUp
          `}
        >
          {/* NAME */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-[#00e0ff] w-5 h-5" />
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className={`
                w-full p-3 pl-10 rounded-lg 
                bg-[#0f1e33] border border-gray-600 
                text-white outline-none 
                focus:border-[#00e0ff] transition-all
              `}
              required
            />
          </div>

          {/* EMAIL */}
          <div className="relative mt-4">
            <Mail className="absolute left-3 top-3 text-[#00e0ff] w-5 h-5" />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className={`
                w-full p-3 pl-10 rounded-lg 
                bg-[#0f1e33] border border-gray-600 
                text-white outline-none 
                focus:border-[#00e0ff] transition-all
              `}
              required
            />
          </div>

          {/* PHONE */}
          <div className="relative mt-4">
            <Phone className="absolute left-3 top-3 text-[#00e0ff] w-5 h-5" />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className={`
                w-full p-3 pl-10 rounded-lg
                bg-[#0f1e33] border border-gray-600
                text-white outline-none 
                focus:border-[#00e0ff] transition-all
              `}
              required
            />
          </div>

          {/* MESSAGE */}
          <div className="relative mt-4">
            <MessageCircle className="absolute left-3 top-3 text-[#00e0ff] w-5 h-5" />
            <textarea
              name="message"
              placeholder="Your Message"
              className={`
                w-full p-3 pl-10 rounded-lg h-32 
                bg-[#0f1e33] border border-gray-600 
                text-white outline-none 
                focus:border-[#00e0ff] transition-all resize-none
              `}
              required
            ></textarea>
          </div>

          {/* BUTTON */}
          <button
            disabled={loading}
            className={`
              mt-6 w-full py-3 rounded-lg text-white 
              font-semibold text-lg tracking-wide
              bg-gradient-to-r from-[#007bff] to-[#00c8ff]
              transition-all shadow-lg shadow-[#00e0ff55]
              flex items-center justify-center gap-3
              ${loading ? "opacity-70 cursor-not-allowed" : "hover:brightness-110"}
            `}
          >
            {loading ? (
              <>
                <span className="loader w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Loader Style */}
        <style jsx>{`
          .loader {
            display: inline-block;
          }
        `}</style>
      </div>
    </section>
  );
}
