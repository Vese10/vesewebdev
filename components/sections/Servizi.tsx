"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Building2, Users, ArrowRight, Globe, Database, Brain, Code2 } from "lucide-react";

export default function Servizi() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Servizi per Aziende e Privati",
      description:
        "Creazione di siti web, gestionali personalizzati, web app e soluzioni AI su misura per le tue esigenze",
      icon: Building2,
      features: [
        { icon: Globe, text: "Siti Web Professionali" },
        { icon: Database, text: "Gestionali Personalizzati" },
        { icon: Code2, text: "Web App su Misura" },
        { icon: Brain, text: "Soluzioni AI" },
      ],
      href: "/servizi/aziende-privati",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Informazioni per Web Agency",
      description:
        "Collaborazioni professionali con web agency: competenze tecniche avanzate e massima affidabilità",
      icon: Users,
      features: [
        { icon: Code2, text: "Competenze Full-Stack" },
        { icon: Globe, text: "Sviluppo Progetti Complessi" },
        { icon: Users, text: "Collaborazioni a Lungo Termine" },
        { icon: Brain, text: "Consulenza Tecnica" },
      ],
      href: "/servizi/web-agency",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="servizi"
      ref={ref}
      className="bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins mb-4">
            I Miei Servizi
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluzioni professionali per ogni esigenza, dalla singola azienda alle web agency
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <Link
                href={service.href}
                className="block h-full group"
              >
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
                  {/* Header with Gradient */}
                  <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
                    <service.icon className="w-16 h-16 mb-4 relative z-10" />
                    <h3 className="text-2xl font-bold mb-2 relative z-10">
                      {service.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-gray-700">{feature.text}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center justify-between text-primary font-semibold group-hover:text-accent transition-colors">
                      <span>Scopri di più</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
