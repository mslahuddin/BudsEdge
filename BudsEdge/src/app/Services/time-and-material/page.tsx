export default function TimeAndMaterialPage() {
  return (
    <section className="min-h-screen px-6 md:px-24 py-20 bg-[#061121] text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold">Time & Material</h1>

      <p className="mt-6 text-lg text-gray-300 max-w-3xl">
        Our Time & Material model gives you maximum flexibility. You only pay 
        for the actual time and resources spent. It is ideal for evolving 
        projects, ongoing improvements, or tasks without fixed scope.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Benefits</h2>

      <ul className="mt-4 space-y-3 text-gray-300">
        <li>✔ Pay only for hours/materials used</li>
        <li>✔ Perfect for changing or uncertain requirements</li>
        <li>✔ Real-time control over progress & costs</li>
        <li>✔ Highly adaptable team allocation</li>
        <li>✔ Transparent billing and reporting</li>
      </ul>

      <button className="mt-12 px-10 py-4 rounded-xl text-lg font-semibold 
        bg-[#007bff] hover:bg-[#0090ff] transition-all duration-300 shadow-lg">
        Contact Us
      </button>
    </section>
  );
}
