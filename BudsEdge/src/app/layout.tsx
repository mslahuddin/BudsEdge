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
    icon: "/BudsEdgeLogo.png",
    shortcut: "/BudsEdgeLogo.png",
    apple: "/BudsEdgeLogo.png",
  },
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
              "sameAs": []
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
