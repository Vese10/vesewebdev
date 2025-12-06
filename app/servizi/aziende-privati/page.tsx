import type { Metadata } from "next";
import { Globe, Database, Code2, Brain, CheckCircle, Clock, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Servizi per Aziende e Privati | Sviluppo Web Ferrara Bologna",
  description:
    "Creazione siti web professionali, gestionali personalizzati, web app e soluzioni AI per aziende e privati a Ferrara, Bologna e Emilia-Romagna. Soluzioni su misura per il tuo business.",
  keywords: [
    "creazione siti web Ferrara",
    "sviluppo gestionali Bologna",
    "web app personalizzate",
    "soluzioni AI aziende",
    "programmatore freelance Emilia-Romagna",
  ],
};

export default function AziendePrivatiPage() {
  const services = [
    {
      icon: Globe,
      title: "Siti Web Professionali",
      description:
        "Siti web responsive, veloci e ottimizzati per i motori di ricerca. Design moderno e user experience ottimale per convertire i visitatori in clienti.",
      features: [
        "Design responsive e moderno",
        "Ottimizzazione SEO avanzata",
        "Performance elevate",
        "CMS personalizzato o WordPress",
      ],
    },
    {
      icon: Database,
      title: "Gestionali Personalizzati",
      description:
        "Software gestionali su misura per le tue esigenze aziendali. Automazione processi, gestione clienti, inventario e molto altro.",
      features: [
        "Sviluppo su misura",
        "Integrazione con sistemi esistenti",
        "Dashboard intuitiva",
        "Reportistica avanzata",
      ],
    },
    {
      icon: Code2,
      title: "Web App",
      description:
        "Applicazioni web complesse e scalabili. Piattaforme SaaS, marketplace, portali aziendali e molto altro.",
      features: [
        "Architettura scalabile",
        "Real-time features",
        "API integration",
        "Cloud deployment",
      ],
    },
    {
      icon: Brain,
      title: "Soluzioni AI",
      description:
        "Integrazione di intelligenza artificiale nei tuoi prodotti. Chatbot, analisi predittiva, automazione e machine learning.",
      features: [
        "Chatbot intelligenti",
        "Analisi dati e ML",
        "Automazione processi",
        "Integrazione API AI",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Analisi",
      description: "Comprendiamo insieme le tue esigenze e definiamo gli obiettivi del progetto",
    },
    {
      number: "02",
      title: "Progettazione",
      description: "Creiamo wireframe e prototype per validare la soluzione prima dello sviluppo",
    },
    {
      number: "03",
      title: "Sviluppo",
      description: "Implementiamo la soluzione con metodologie agili e feedback continui",
    },
    {
      number: "04",
      title: "Lancio & Supporto",
      description: "Deploy in produzione e assistenza continuativa per garantire il successo",
    },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Qualità Garantita",
      description: "Codice pulito, testato e documentato per massima affidabilità",
    },
    {
      icon: Clock,
      title: "Consegna Puntuale",
      description: "Rispetto delle tempistiche concordate con aggiornamenti costanti",
    },
    {
      icon: Users,
      title: "Comunicazione Trasparente",
      description: "Report regolari e disponibilità per confronti e feedback",
    },
    {
      icon: Zap,
      title: "Performance Ottimali",
      description: "Soluzioni veloci, sicure e ottimizzate per le migliori prestazioni",
    },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-accent text-white py-20 mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">
              Servizi per Aziende e Privati
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Soluzioni digitali su misura per far crescere il tuo business a Ferrara, Bologna e oltre
            </p>
            <a
              href="#contatti"
              className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Richiedi un Preventivo Gratuito
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-300 via-black to-gray-300">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Cosa Posso Fare per Te
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Servizi completi per trasformare le tue idee in realtà digitali
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-tr from-gray-300 via-black to-gray-300">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Il Mio Processo di Lavoro
            </h2>
            <p className="text-xl text-gray-600">
              Un approccio strutturato per garantire il successo del tuo progetto
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-4 font-poppins">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 right-0 w-3/5 h-0.5 bg-primary transform translate-x-3/5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-300 via-black to-gray-300">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Perché Scegliermi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 font-poppins">
            Pronto a Iniziare il Tuo Progetto?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contattami per una consulenza gratuita e scopri come posso aiutarti a raggiungere i tuoi obiettivi
          </p>
          <a
            href="/#contatti"
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Contattami Ora
          </a>
        </div>
      </section>
    </div>
  );
}
