"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Quanto tempo serve per realizzare un sito web?",
    answer:
      "I tempi dipendono dalla complessità del progetto. Per un sito vetrina standard (Landing Page o 5-6 pagine), solitamente occorrono 2-3 settimane. Per progetti più complessi come e-commerce o web app personalizzate, le tempistiche variano dalle 4 alle 8 settimane. Definiamo sempre una timeline chiara all'inizio della collaborazione.",
  },
  {
    question: "Lavori solo con clienti di Ferrara?",
    answer:
      "No, anche se ho base a Ferrara e opero spesso su Bologna e l'Emilia-Romagna, lavoro regolarmente con clienti in tutta Italia da remoto. Utilizzo strumenti come Google Meet e Zoom per mantenere un contatto costante e aggiornarti sull'avanzamento del progetto.",
  },
  {
    question: "Il sito sarà ottimizzato per SEO e Mobile?",
    answer:
      "Assolutamente sì. Oltre al design, la mia priorità è la performance. Tutti i siti sono sviluppati 'Mobile-First' (perfetti su smartphone) e includono l'ottimizzazione SEO tecnica base (velocità, struttura dei tag, metadati, sitemap) per essere subito indicizzabili da Google.",
  },
  {
    question: "Offri assistenza dopo il lancio?",
    answer:
      "Sì, non ti lascio solo dopo la messa online. Offro pacchetti di manutenzione mensile che includono aggiornamenti di sicurezza, backup, piccole modifiche e monitoraggio delle performance. Cosi tu puoi concentrarti sul tuo business mentre io mi occupo della parte tecnica.",
  },
  {
    question: "Quanto costa un sito web?",
    answer:
      "Ogni progetto è unico. Un sito vetrina professionale parte generalmente da budget accessibili per piccole imprese, mentre soluzioni e-commerce o gestionali richiedono investimenti maggiori. Contattami per una consulenza gratuita: ti fornirò un preventivo trasparente e su misura per le tue reali esigenze, senza costi nascosti.",
  },
];

const AccordionItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-800">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-200 group-hover:text-primary transition-colors pr-8">
          {item.question}
        </span>
        <span className="flex-shrink-0 text-primary">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-400 leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-400 via-black to-gray-400"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white font-poppins mb-4">
            Domande Frequenti
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Risposte chiare ai dubbi più comuni su sviluppo web, tempi e modalità di lavoro.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-gray-800 shadow-xl"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
