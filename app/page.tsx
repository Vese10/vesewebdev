import Hero from "@/components/sections/Hero";
import ChiSono from "@/components/sections/ChiSono";
import Servizi from "@/components/sections/Servizi";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import FAQ from "@/components/sections/FAQ";
import Contatti from "@/components/sections/Contatti";
import Cta from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quanto tempo serve per realizzare un sito web?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "I tempi dipendono dalla complessità del progetto. Per un sito vetrina standard (Landing Page o 5-6 pagine), solitamente occorrono 2-3 settimane. Per progetti più complessi come e-commerce o web app personalizzate, le tempistiche variano dalle 4 alle 8 settimane.",
                },
              },
              {
                "@type": "Question",
                name: "Lavori solo con clienti di Ferrara?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, anche se ho base a Ferrara e opero spesso su Bologna e l'Emilia-Romagna, lavoro regolarmente con clienti in tutta Italia da remoto.",
                },
              },
              {
                "@type": "Question",
                name: "Il sito sarà ottimizzato per SEO e Mobile?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Assolutamente sì. Tutti i siti sono sviluppati 'Mobile-First' e includono l'ottimizzazione SEO tecnica base per essere subito indicizzabili da Google.",
                },
              },
              {
                "@type": "Question",
                name: "Offri assistenza dopo il lancio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì, offro pacchetti di manutenzione mensile che includono aggiornamenti di sicurezza, backup e monitoraggio.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto costa un sito web?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ogni progetto è unico. Contattami per una consulenza gratuita: ti fornirò un preventivo trasparente e su misura per le tue reali esigenze.",
                },
              },
            ],
          }),
        }}
      />
      <Hero />
      <ChiSono />
      <Servizi />
      <PortfolioPreview />
      <FAQ />
      <Contatti />
      <Cta />
    </>
  );
}
