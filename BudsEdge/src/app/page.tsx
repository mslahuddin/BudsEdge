import Hero from "./components/Hero/page";
import Services from "./components/Service/page";
import WhyChooseUs from "./components/ChooseUs/page";
import Contact from "./components/Contact/page";
import WhatWeOffer from "./components/WhatWeOffer/page";

export default function Home() {
  return (
    <main
      className="
        bg-gradient-to-r 
        from-[var(--bg-dark)] via-[var(--bg-mid)] to-[var(--bg-light)]
        text-white scroll-smooth
      "
    >
      <Hero />

      <Separator />

      <Services />

      <Separator />

      <WhatWeOffer />

      <Separator />

      <WhyChooseUs />

      <Separator />

      <Contact />
    </main>
  );
}

/* ---------------------------------- */
/* CLEAN REUSABLE SEPARATOR COMPONENT */
/* ---------------------------------- */
function Separator() {
  return (
    <hr
      className="
        w-full border-t border-[#0e2f5b]
        my-16 opacity-60
        transition-all duration-500
      "
    />
  );
}
