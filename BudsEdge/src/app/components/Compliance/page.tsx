import { 
  SiIeee, 
  SiGoogleanalytics, 

  SiTrustpilot 
} from "react-icons/si";

export default function ComplianceSection() {
  return (
    <section className="bg-[#030A17] text-gray-200 py-16 px-6 border-t border-b border-[#1f3b57]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">Rating &amp; Compliance.</h2>

        <p className="text-gray-400 max-w-3xl">
          We follow global standards to ensure security, privacy, and
          performance across every solution we build. From GDPR compliance to
          IEEE-backed frameworks, our systems are engineered for trust.
        </p>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-16 mt-10">

          <div className="flex flex-col items-center">
            <SiIeee className="text-[#00e0ff] h-12 w-12 opacity-80 hover:opacity-100 transition" />
            <p className="mt-2 text-sm text-gray-400">IEEE</p>
          </div>

          <div className="flex flex-col items-center">
            <SiGoogleanalytics className="text-[#00e0ff] h-12 w-12 opacity-80 hover:opacity-100 transition" />
            <p className="mt-2 text-sm text-gray-400">GDPR</p>
          </div>

          <div className="flex flex-col items-center">
            <SiTrustpilot className="text-[#00e0ff] h-12 w-12 opacity-80 hover:opacity-100 transition" />
            <p className="mt-2 text-sm text-gray-400">Clutch</p>
          </div>

          <div className="flex flex-col items-center">
            <SiTrustpilot className="text-[#00e0ff] h-12 w-12 opacity-80 hover:opacity-100 transition" />
            <p className="mt-2 text-sm text-gray-400">HIPAA</p>
          </div>

        </div>
      </div>
    </section>
  );
}
