import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header/page";
import Footer from "./components/Footer/page";

import { Toaster } from "react-hot-toast";

import { Poppins, Inter, Outfit, Exo_2 } from "next/font/google";

/* ===========================
   FONT LOADING (Optimized)
=========================== */
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-exo2",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

/* ===========================
   SITE METADATA
=========================== */
export const metadata: Metadata = {
  title: "BudsEdge™ | IT Solutions Company",
  description: "Empowering businesses with smart and scalable IT solutions.",
 icons: {
  apple: "/apple-touch-icon.png",
},
manifest: "/site.webmanifest",

};

/* ===========================
   ROOT LAYOUT
=========================== */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${exo2.variable} ${poppins.variable} ${inter.variable} ${outfit.variable}`}
    >
      <head>
  {/* ORGANIZATION */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: `
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "BudsEdge",
        "url": "https://budsedge.com",
        "logo": "https://budsedge.com/BudsEdgeLogo.png",
        "foundingDate": "2024",
        "description": "BudsEdge provides modern IT solutions, UI/UX, cloud services, and software development.",
        "sameAs": []
      }
      `,
    }}
  />

  {/* WEBSITE */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: `
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "BudsEdge",
        "url": "https://budsedge.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://budsedge.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
      `,
    }}
  />

  {/* BREADCRUMB */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: `
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://budsedge.com"
          }
        ]
      }
      `,
    }}
  />

  {/* SERVICES */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: `
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Software Development | UI/UX Design | Cloud Services",
        "provider": {
          "@type": "Organization",
          "name": "BudsEdge",
          "url": "https://budsedge.com"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "IT Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Dedicated Team",
                "description": "Full remote team to scale your business."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Time & Material",
                "description": "Pay only for development hours used."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fixed Cost Model",
                "description": "Predictable, fixed-price projects."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Partnership Development",
                "description": "Long-term collaboration for sustainable growth."
              }
            }
          ]
        }
      }
      `,
    }}
  />

  {/* FAQ SECTION */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: `
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does BudsEdge offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "BudsEdge offers software development, UI/UX design, cloud solutions, team augmentation, and IT consulting."
            }
          },
          {
            "@type": "Question",
            "name": "How can I contact BudsEdge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can contact us through our website’s contact page or by emailing info@budsedge.com."
            }
          }
        ]
      }
      `,
    }}
  />

  {/* OPTIONAL: LOCAL BUSINESS (BOOSTS TRUST + GOOGLE MAPS BEHAVIOR) */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: `
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "BudsEdge",
        "image": "https://budsedge.com/BudsEdgeLogo.png",
        "url": "https://budsedge.com",
        "telephone": "",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "PK"
        }
      }
      `,
    }}
  />
</head>


      <body className="bg-[var(--bg-dark)] text-[var(--text-light)]">
        <Header />
        {children}
        <Toaster position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
