'use client'; 
import Image from "next/image";
import Link from "next/link";
import AI_bot from "../assets/ai_WHTEbot.png";
import bg_stars from "../assets/bg.png";

export default function Hero() {
  return (
    <section
      className={`
        relative min-h-screen flex flex-col justify-center 
        px-6 md:px-24 py-20 
        bg-cover bg-top bg-no-repeat 
        overflow-hidden
      `}
      style={{ backgroundImage: `url(${bg_stars.src})` }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* LEFT TEXT */}
        <div className="flex-1 text-center md:text-left animate-slideUp">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Give Your Business{" "}
            <span className="text-[#00e0ff]">the Edge </span>
            It Deserves
          </h1>

          <p className="mt-6 max-w-xl mx-auto md:mx-0 text-base sm:text-lg md:text-xl text-gray-300">
            BudsEdge™ delivers scalable, secure, and innovative digital solutions
            that help startups and enterprises thrive in the modern world.
          </p>

          <Link href="/BookCall" prefetch>
            <button
              className={`
                mt-10 px-8 py-4 rounded-xl text-lg font-semibold text-white
                bg-[#007bff] hover:bg-[#00b7ff] transition-all duration-300 
                shadow-lg hover:shadow-[#00e0ff66]
              `}
            >
              Get a Free Consultation
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end animate-fadeIn">
          <Image
            src={AI_bot}
            alt="AI assistant illustration"
            width={380}
            height={380}
            priority
            className="w-[200px] sm:w-[260px] md:w-[350px] h-auto select-none"
          />
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        .animate-slideUp {
          opacity: 0;
          transform: translateY(20px);
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 1.2s ease-out forwards;
        }
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
