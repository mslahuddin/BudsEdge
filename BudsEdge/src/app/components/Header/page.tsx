"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/BudsEdgeIcon.png";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
   <header className="w-full z-50 bg-gradient-to-r from-[var(--bg-dark)] via-[var(--bg-mid)] to-[var(--bg-light)] to-[var(--bg-light)] text-white shadow-lg backdrop-blur-md">



      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
       
          <Image
            src={Logo}
            alt="BudsEdge Logo"
            width={70}
            height={70}
            className="cursor-pointer"
          />
      

        {/* Navigation Links */}
        <nav
          className={`absolute md:static top-full left-0 w-full md:w-auto 
          bg-[var(--bg-dark)] md:bg-transparent md:flex items-center gap-8 
          text-lg font-medium transition-all duration-300 ease-in-out
          ${open ? "block py-6" : "hidden"} md:block`}
        >
          {[
            { href: "/#services", label: "Services" },
            { href: "/#whyus", label: "Why Us" },
            { href: "/#whatweoffer", label: "What we offer" },
            { href: "/#contact", label: "Contact" },
            { href: "AboutUs", label: "About us" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block md:inline-block px-6 md:px-0 py-2 md:py-0 
              hover:text-[var(--accent)] hover:scale-105 transition-all duration-200"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none hover:text-[var(--accent)] transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
