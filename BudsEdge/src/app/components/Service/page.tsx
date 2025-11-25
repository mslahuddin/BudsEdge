'use client';
import { Brush, Code, Smartphone, Bot } from "lucide-react";
import bg_stars from "../assets/bg2.png";

export default function Services() {
  const services = [
    {
      title: "UI/UX Design",
      desc: "Crafting elegant, user-centered interfaces with seamless experiences.",
      icon: Brush,
    },
    {
      title: "Web Development",
      desc: "Responsive, high-performing websites built with modern and scalable technologies.",
      icon: Code,
    },
    {
      title: "Mobile App Development",
      desc: "iOS and Android apps that deliver smooth performance and high user engagement.",
      icon: Smartphone,
    },
    {
      title: "AI Integration",
      desc: "Implement smart AI chatbots, automation tools, and intelligent workflows.",
      icon: Bot,
    },
  ];

  return (
    <section
      id="services"
      className={`
        relative py-24 text-center 
        bg-cover bg-top bg-no-repeat
        overflow-hidden
      `}
      style={{ backgroundImage: `url(${bg_stars.src})` }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg"
          style={{ fontFamily: "var(--font-exo2)" }}
        >
          Our Services
        </h2>

        <p className="mb-16 max-w-2xl mx-auto text-gray-300">
          At <span className="text-[var(--btn-color)] font-semibold">BudsEdge™</span>, 
          we provide end-to-end digital transformation services tailored to grow your business efficiently.
        </p>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <div
                key={i}
                style={{ "--delay": `${i * 0.15}s` }}
                className={`
                  group p-8 rounded-2xl
                  bg-[#0a1628c6] backdrop-blur-xl
                  border border-[#1f3b57]
                  shadow-[0_0_12px_rgba(0,224,255,0.15)]
                  hover:border-[#00e0ff]
                  hover:shadow-[0_0_25px_rgba(0,224,255,0.4)]
                  hover:-translate-y-2
                  transition-all duration-500
                  opacity-0 animate-fadeUp
                `}
              >
                {/* ICON */}
                <div className="flex justify-center mb-6">
                  <Icon className="w-12 h-12 text-[#00e0ff] group-hover:scale-110 transition-all duration-300" />
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-semibold text-[#00e0ff] mb-3">
                  {s.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="leading-relaxed text-gray-300">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ANIMATION STYLES */}
      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(15px);
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
