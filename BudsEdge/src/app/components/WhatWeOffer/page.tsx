"use client";

import { Users, Clock, Wallet, Shield } from "lucide-react";
import bg_stars from "../assets/bg5.png";
import Link from "next/link";

export default function WhatWeOffer() {
  const services = [
    {
      id: "01",
      title: "Dedicated Team",
      desc: "Unlock success with our Dedicated Team. Tailored excellence for end-to-end solutions or remote team augmentation.",
      link: "/Services/dedicated-team",
      icon: Users,
    },
    {
      id: "02",
      title: "Time & Material",
      desc: "Optimize costs with our dynamic time and material model. Pay only for engaged resources, ensuring optimal results.",
      link: "/Services/time-and-material",
      icon: Clock,
    },
    {
      id: "03",
      title: "Fixed Cost",
      desc: "Ensure budget certainty with our fixed-cost model for high-quality, predictable results and peace of mind.",
      link: "/Services/fixed-cost",
      icon: Wallet,
    },
    {
      id: "04",
      title: "Partnership",
      desc: "Achieve breakthroughs with our collaborative approach, crafting innovative solutions tailored to your business needs.",
      link: "/Services/partnership",
      icon: Shield,
    },
  ];

  return (
    <section
      id="whatweoffer"
      className={`
        relative px-6 md:px-24 py-24
        text-white bg-cover bg-top bg-no-repeat
        overflow-hidden
      `}
      style={{ backgroundImage: `url(${bg_stars.src})` }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* Heading */}
        <p className="text-center text-sm tracking-widest text-gray-300">
          WHAT WE OFFER
        </p>

        <h2 className="text-center text-3xl sm:text-5xl font-extrabold max-w-4xl mx-auto mt-3 drop-shadow-lg">
          We offer simple service models to make things easier for you.

        </h2>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-7xl mx-auto">
          {services.map((s, index) => {
            const Icon = s.icon;

            return (
              <div
                key={index}
                 style={{ ["--delay" as any]: `${index * 0.15}s` } as React.CSSProperties}

                className={`
                  relative p-8 rounded-xl
                  bg-[#0a1829e8] backdrop-blur-xl
                  border border-[#1f3b57]
                  shadow-[0_0_15px_rgba(0,224,255,0.12)]
                  hover:border-[#00e0ff] hover:shadow-[0_0_25px_rgba(0,224,255,0.3)]
                  hover:-translate-y-2 transition-all duration-500
                  opacity-0 animate-fadeUp
                  overflow-hidden
                `}
              >
                {/* Card Number */}
                <p className="absolute top-4 left-4 text-6xl font-extrabold text-gray-600 opacity-20 pointer-events-none">
                  {s.id}
                </p>

                {/* Title */}
                <h3 className="text-2xl font-bold mt-12">{s.title}</h3>

                {/* Description */}
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  {s.desc}
                </p>

                {/* Learn More */}
                <Link
                  href={s.link}
                  className="flex items-center gap-2 text-[#00e0ff] mt-6 font-semibold transition-all group hover:gap-3"
                >
                  → LEARN MORE
                </Link>

                {/* Bottom Icon Badge */}
                <div
                  className={`
                    absolute bottom-0 right-0 w-20 h-20
                    bg-[#14243a] rounded-tl-[200px]
                    flex items-center justify-center
                    border-t border-l border-[#1f3b57]
                  `}
                >
                  <Icon className="w-7 h-7 text-[#00e0ff]" />
                </div>
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
