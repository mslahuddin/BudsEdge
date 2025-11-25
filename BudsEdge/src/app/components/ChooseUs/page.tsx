'use client';
import { CheckCircle, Shield, Users, Globe, Cpu } from "lucide-react";
import bg_stars from "../assets/bg3.png";

export default function WhyChooseUs() {
  const points = [
    { title: "UK Registered LTD Company", icon: Shield },
    { title: "Secure & Scalable Solutions", icon: Cpu },
    { title: "Client-Centered Approach", icon: Users },
    { title: "Experienced Development Team", icon: CheckCircle },
    { title: "Global Support, Local Expertise", icon: Globe },
  ];

  return (
    <section
      id="whyus"
      className={`
        relative py-24 text-center 
        bg-cover bg-top bg-no-repeat 
        overflow-hidden
      `}
      style={{ backgroundImage: `url(${bg_stars.src})` }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      {/* CONTENT */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-white mb-14 tracking-wide drop-shadow-lg">
          Why Choose BudsEdge
        </h2>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {points.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                 style={{ ["--delay" as any]: `${i * 0.15}s` } as React.CSSProperties}
                className={`
                  group p-8 rounded-2xl
                  border border-[#00e0ff33] 
                  bg-[#0a1628c9] backdrop-blur-md
                  hover:border-[#00e0ff]
                  hover:bg-[#0c1b33dd]
                  shadow-lg hover:shadow-[#00e0ff44]
                  transition-all duration-500
                  opacity-0 animate-fadeUp
                  cursor-default
                `}
              >
                {/* ICON */}
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-[#00e0ff] group-hover:scale-110 transition-all duration-300" />
                </div>

                {/* TEXT (unchanged) */}
                <p className="text-lg text-gray-300 font-medium tracking-wide">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 0.8s ease-out forwards;
          animation-delay: var(--delay);
        }
      `}</style>
    </section>
  );
}
