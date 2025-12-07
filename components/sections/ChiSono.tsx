"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Target, Lightbulb, Heart } from "lucide-react";
import Image from "next/image";

export default function ChiSono() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="chi-sono"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-tr from-gray-500 via-black to-gray-500"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-4">
            Chi Sono
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Image src="/profile.jpg" alt="Profile" fill className="object-cover rounded-2xl" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">Disponibile per progetti</span>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ciao, sono Veselin!<br />Sono un{" "}
                <span className="gradient-text">Programmatore Freelance</span>
              </h3>
              <p className="text-white leading-relaxed mb-4">
                Sono specializzato nello sviluppo di soluzioni web moderne e performanti.
                Con oltre 2 anni di esperienza, aiuto aziende, privati e web agency a
                trasformare le loro idee in prodotti digitali di successo.
              </p>
              <p className="text-white leading-relaxed">
                Lavoro principalmente nelle zone di{" "}
                <span className="font-semibold text-primary">Ferrara</span> e{" "}
                <span className="font-semibold text-primary">Bologna</span>, ma sono
                disponibile per collaborazioni in tutta l&apos;Emilia-Romagna e da remoto.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Target,
                  title: "Orientato ai Risultati",
                  description: "Focus su performance e obiettivi concreti",
                },
                {
                  icon: Lightbulb,
                  title: "Soluzioni Innovative",
                  description: "Tecnologie moderne e best practices",
                },
                {
                  icon: Heart,
                  title: "Passione per il Codice",
                  description: "Codice pulito e manutenibile",
                },
                {
                  icon: User,
                  title: "Approccio Collaborativo",
                  description: "Comunicazione chiara e trasparente",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-700 transition-colors bg-white border border-gray-800"
                >
                  <feature.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">{feature.title}</h4>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
