export default function FixedCostPage() {
  return (
    <section className="min-h-screen px-6 md:px-24 py-20 bg-[#061121] text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold">Fixed Cost</h1>

      <p className="mt-6 text-lg text-gray-300 max-w-3xl">
        The Fixed Cost model is ideal when you have clear, well-defined 
        requirements. We provide a fixed price and timeline, ensuring 
        predictability, transparency, and full peace of mind.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Why This Model?</h2>

      <ul className="mt-4 space-y-3 text-gray-300">
        <li>✔ Know the exact cost before the project starts</li>
        <li>✔ No surprises or hidden fees</li>
        <li>✔ Clear timelines and deliverables</li>
        <li>✔ Best for small/medium-sized projects</li>
        <li>✔ Predictable outcomes & quality control</li>
      </ul>

      <button className="mt-12 px-10 py-4 rounded-xl text-lg font-semibold 
        bg-[#007bff] hover:bg-[#0090ff] transition-all duration-300 shadow-lg">
        Contact Us
      </button>
    </section>
  );
}
