import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Programmatore Freelance Ferrara Bologna | Sviluppo Web, App & AI",
  description:
    "Sviluppatore web freelance specializzato in creazione siti web, gestionali personalizzati, web app e soluzioni AI. Servizi per aziende, privati e web agency a Ferrara, Bologna e Emilia-Romagna.",
  keywords: [
    "programmatore Ferrara",
    "sviluppatore web Bologna",
    "creazione siti web Ferrara",
    "web developer Emilia-Romagna",
    "sviluppo applicazioni Bologna",
    "programmatore freelance",
    "sviluppo gestionali",
    "web app personalizzate",
    "soluzioni AI",
    "collaborazioni web agency",
  ],
  authors: [{ name: "Vesewebdev" }],
  creator: "Vesewebdev",
  publisher: "Vesewebdev",
  metadataBase: new URL("https://vesewebdev.vercel.app"),
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://vesewebdev.vercel.app",
    title: "Programmatore Freelance Ferrara Bologna | Sviluppo Web & AI",
    description:
      "Sviluppatore web freelance specializzato in creazione siti web, gestionali, web app e soluzioni AI. Servizi a Ferrara, Bologna e Emilia-Romagna.",
    siteName: "Vesewebdev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programmatore Freelance Ferrara Bologna | Sviluppo Web & AI",
    description:
      "Sviluppatore web freelance specializzato in creazione siti web, gestionali, web app e soluzioni AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // Da aggiornare con il codice reale
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* JSON-LD Schema Markup for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://vesewebdev.vercel.app",
              name: "Vesewebdev - Programmatore Freelance",
              description:
                "Sviluppatore web freelance specializzato in creazione siti web, gestionali, web app e soluzioni AI",
              url: "https://vesewebdev.vercel.app",
              telephone: "+39-XXX-XXXXXXX", // Da aggiornare
              email: "info@vesewebdev.com", // Da aggiornare
              areaServed: [
                {
                  "@type": "City",
                  name: "Ferrara",
                  "@id": "https://www.wikidata.org/wiki/Q13362",
                },
                {
                  "@type": "City",
                  name: "Bologna",
                  "@id": "https://www.wikidata.org/wiki/Q1891",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Emilia-Romagna",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ferrara",
                addressRegion: "Emilia-Romagna",
                addressCountry: "IT",
              },
              priceRange: "$$",
              serviceType: [
                "Sviluppo Siti Web",
                "Creazione Gestionali",
                "Web App",
                "Soluzioni AI",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
