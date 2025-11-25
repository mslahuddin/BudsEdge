'use client';
import { Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className={`
        relative
        bg-gradient-to-r from-[#030A17] via-[#0a1a33] to-[#051225]
        text-gray-300 border-t border-[#1f3b57]
        shadow-[0_-2px_20px_rgba(0,224,255,0.15)]
        text-center overflow-hidden
      `}
    >
      {/* TOP LINE GLOW */}
      <div
        className={`
          absolute top-0 left-0 w-full h-[2px]
          bg-gradient-to-r from-transparent via-[#00e0ff77] to-transparent
          animate-glowLine
        `}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 space-y-4">
        {/* BRAND / YEAR */}
        <p className="text-sm sm:text-base font-medium text-white">
          © {new Date().getFullYear()} BudsEdge™ — BudsEdge is a trading name of SOURCESTREAM COMMERCE LTD.
        </p>

        {/* LEGAL DISCLOSURE */}
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
          SOURCESTREAM COMMERCE LTD is a company registered in England and Wales.
          Company Number: <span className="font-medium">16597800</span>.
          Registered Office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UNITED KINGDOM.
        </p>

        {/* TM LINE */}
        <p className="text-xs text-gray-500">
          BudsEdge™ is a trade mark asserted by SOURCESTREAM COMMERCE LTD.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 mt-6">
          {[Linkedin, Github, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className={`
                p-2 rounded-full bg-[#0f1e33]
                border border-[#1f3b57]
                hover:border-[#00e0ff] hover:text-[#00e0ff]
                transition-all duration-300 ease-out
                hover:scale-110
              `}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        @keyframes glowLine {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.5;
          }
        }

        .animate-glowLine {
          animation: glowLine 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
