"use client";
import { Linkedin, Github, Twitter } from "lucide-react";
import Compliance from "../Compliance/page"

export default function Footer() {
  return (
    <footer
      className={`
        relative
        bg-gradient-to-r from-[#030A17] via-[#0a1a33] to-[#051225]
        text-gray-300
        border-t border-[#1f3b57]
        overflow-hidden
      `}
    >
      {/* Glow Line */}
      <div
        className={`
          absolute top-0 left-0 w-full h-[2px]
          bg-gradient-to-r from-transparent via-[#00e0ff77] to-transparent
          animate-glowLine
        `}
      />
      

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* GRID */}
        <div className=" grid gap-8 md:grid-cols-3 ">
          {/* LOGO / COMPANY */}
          <div>
            <p className="text-white font-semibold text-lg">BudsEdge™</p>
            <p className="text-xs mt-2 text-gray-400">
              © {new Date().getFullYear()} BudsEdge — trading name of SOURCESTREAM COMMERCE LTD.
            </p>
            <p className="text-xs mt-1 text-gray-500">
              BudsEdge™ is a trademark asserted by SOURCESTREAM COMMERCE LTD.
            </p>
          </div>

          {/* ADDRESS */}
          <div>
            <h4 className="font-semibold text-white mb-2">Address</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              71-75 Shelton Street,<br />
              Covent Garden, London, WC2H 9JQ,<br />
              United Kingdom.
            </p>
          </div>

          {/* SOCIALS */}
          <div>
            <h4 className="font-semibold text-white mb-3">Follow Us</h4>
            <div className="flex gap-4">
              {[Linkedin, Github, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className={`
                    h-10 w-10
                    flex items-center justify-center
                    rounded-full
                    bg-[#0f1e33]
                    border border-[#1f3b57]
                    hover:border-[#00e0ff] hover:text-[#00e0ff]
                    hover:scale-110 shadow-lg
                    transition-all duration-300
                  `}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* STYLES */}
      <style jsx>{`
        @keyframes glowLine {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }
        .animate-glowLine {
          animation: glowLine 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
