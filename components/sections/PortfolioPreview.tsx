"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Folder } from "lucide-react";

export default function PortfolioPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Smenoo - Menu Digitale",
      description: "Piattaforma completa di creazione locale e gestione menu digitale",
      tags: ["Next.js", "Tailwind", "Stripe", "Clerk"],
      color: "from-[#F9BD6B] via-[#FF6777] to-[#62DEDD]"
    },
    {
      title: "Gestionale Professionale",
      description: "Gestionale professionale per gestione clienti e cartelle cliniche per ostetriche.",
      tags: ["Next.js", "Tailwind", "Stripe", "Clerk"],
      color: "from-[#5A3C91] via-[#F8F5FC] to-[#3F2A66]"
    },
    {
      title: "ChatBot AI",
      description: "ChatBot AI per creazione preventivi personalizzati",
      tags: ["TypeScript", "OpenAI", "PHP", "MySQL"],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="portfolio"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-tr from-gray-300 via-black to-gray-300"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Alcuni dei progetti su cui ho lavorato
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 h-full flex flex-col">
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <Folder className="w-24 h-24 text-white/80 relative z-10" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-auto">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary text-black px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to full portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center"
        >
          <Link
            href="/portfolio"
            className="group bg-primary text-black px-8 py-4 rounded-full font-medium text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex justify-center items-center space-x-2 w-full md:w-1/4"
          >
            <span>Vedi Tutti i Progetti</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
