"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-500 via-black to-gray-500"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-black">
              Programmatore Freelance Ferrara & Bologna
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white font-poppins leading-tight"
          >
            Creo{" "}
            <span className="gradient-text">Soluzioni Digitali</span>
            <br />
            che Fanno la Differenza
          </motion.h1>

          {/* Subtitle */}  <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto"
          >
            Sviluppo{" "}
            <span className="font-semibold text-primary">siti web</span>,{" "}
            <span className="font-semibold text-primary">gestionali</span>,{" "}
            <span className="font-semibold text-primary">web app</span> e{" "}
            <span className="font-semibold text-primary">soluzioni AI</span>{" "}
            personalizzate per aziende, privati e web agency
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contatti"
              className="group bg-primary text-black px-8 py-4 rounded-full font-medium text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex justify-center items-center space-x-2 w-full md:w-1/4"
            >
              <span>Iniziamo a Collaborare</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="group bg-primary text-black px-8 py-4 rounded-full font-medium text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex justify-center items-center space-x-2 w-full md:w-1/4"
            >
              <span>Vedi i Miei Progetti</span>
              <Code className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12"
          >
            {[
              { value: "30+", label: "Progetti Completati" },
              { value: "20+", label: "Clienti Soddisfatti" },
              { value: "2+", label: "Anni di Esperienza" },
              { value: "100%", label: "Dedizione" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text font-poppins">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-1 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#chi-sono" className="flex flex-col items-center animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </div>
          <span className="text-xs text-gray-400 mt-2">Scorri</span>
        </a>
      </motion.div>
    </section>
  );
}
