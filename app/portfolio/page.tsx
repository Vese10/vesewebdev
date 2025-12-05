import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Folder } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio Progetti | Programmatore Ferrara Bologna",
  description:
    "Portfolio completo dei progetti sviluppati: siti web, gestionali, web app e soluzioni AI. Lavori per aziende e web agency a Ferrara, Bologna e Emilia-Romagna.",
  keywords: [
    "portfolio sviluppatore Ferrara",
    "progetti web Bologna",
    "lavori programmatore",
    "esempi siti web",
  ],
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna alla Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">
            Portfolio Progetti
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Una selezione dei progetti su cui ho lavorato
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Folder className="w-32 h-32 text-gray-300 mx-auto mb-8" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pagina in Costruzione
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Il portfolio completo sarà disponibile a breve. Nel frattempo, contattami
            per vedere esempi specifici dei miei lavori.
          </p>
          <a
            href="/#contatti"
            className="inline-block bg-gradient-primary text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Contattami
          </a>
        </div>
      </section>
    </div>
  );
}
