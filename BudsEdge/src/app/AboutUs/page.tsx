'use client';
import Image from "next/image";
import bg6 from "../components/assets/bg7.png";

export default function AboutPage() {
  return (
    <section
      className="relative min-h-screen px-6 md:px-24 py-28 text-white bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${bg6.src})` }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-14 animate-fadeInUp">

        {/* MAIN HEADING */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl">
            About <span className="text-[#00e0ff]">BudsEdge™</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            The Digital Development Venture of 
            <span className="text-white font-bold"> SOURCESTREAM COMMERCE LTD</span>
          </p>
        </div>

        <hr className="border-gray-700 opacity-40" />

        {/* WHO WE ARE */}
        <div className="space-y-3">
          <h2 className="section-title">Who We Are</h2>
          <p className="section-text">
            BudsEdge™ was founded as the dedicated technology and innovation division 
            of <span className="font-semibold">SOURCESTREAM COMMERCE LTD</span>, bringing 
            together agile development with the corporate strength of a 
            registered UK limited company.
          </p>
        </div>

        {/* MISSION */}
        <div className="space-y-3">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            Our mission is simple: help businesses design, build, and scale digital 
            products that feel modern, intuitive, and reliable — all while ensuring 
            complete transparency, professionalism, and UK-regulated operational standards.
          </p>
        </div>

        {/* UK REGISTERED */}
        <div className="space-y-3">
          <h2 className="section-title">Backed by a UK-Registered Company</h2>
          <p className="section-text">
            We operate under the BudsEdge™ brand but are legally backed by 
            <span className="font-semibold"> SOURCESTREAM COMMERCE LTD</span>, 
            a company registered in England & Wales (Company No. <strong>16597800</strong>). 
            This means clients benefit from both the flexibility of a tech venture 
            and the credibility of a UK-regulated LTD.
          </p>
        </div>

        {/* VISION */}
        <div className="space-y-3">
          <h2 className="section-title">Our Vision</h2>
          <p className="section-text">
            To become the go-to partner for businesses seeking digital transformation — 
            blending beautiful design, powerful engineering, and forward-thinking innovation.
          </p>
        </div>

        {/* DIFFERENCE */}
        <div className="space-y-3">
          <h2 className="section-title">What Makes Us Different?</h2>

          <ul className="space-y-3 text-gray-300 text-lg pl-4 leading-relaxed">
            <li>✔ UK-registered parent company ensures compliance & trust</li>
            <li>✔ Modern, scalable digital solutions tailored for global clients</li>
            <li>✔ Startup agility backed by corporate stability</li>
            <li>✔ Expert designers, engineers, and AI specialists</li>
            <li>✔ Transparent communication & long-term commitment</li>
          </ul>
        </div>

      </div>

      {/* ADDITIONAL STYLES */}
      <style jsx>{`
        .section-title {
          font-size: 1.9rem;
          font-weight: 700;
          color: #00e0ff;
        }

        .section-text {
          font-size: 1.15rem;
          color: #d1d5db;
          line-height: 1.75rem;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
