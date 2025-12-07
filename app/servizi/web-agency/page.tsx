import type { Metadata } from "next";
import { Code2, Users, Briefcase, TrendingUp, CheckCircle, Award, Target, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Collaborazioni Web Agency | Sviluppatore Freelance Ferrara Bologna",
  description:
    "Programmatore freelance per collaborazioni con web agency. Competenze full-stack, sviluppo progetti complessi, affidabilità e consulenza tecnica. Ferrara, Bologna, Emilia-Romagna.",
  keywords: [
    "collaborazioni web agency",
    "sviluppatore freelance web agency",
    "programmatore collaborazioni Bologna",
    "developer outsourcing Ferrara",
    "consulenza tecnica web",
  ],
};

export default function WebAgencyPage() {
  const competenze = [
    {
      category: "Frontend",
      skills: [
        "React & Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js & Express",
        "REST & GraphQL APIs",
        "Database Design",
        "Authentication & Security",
        "Cloud Services (AWS, Vercel)",
      ],
    },
    {
      category: "Tools & Workflow",
      skills: [
        "Git & GitHub",
        "Figma",
        "Canva",
        "ClickUp",
        "Documentazione Tecnica",
      ],
    },
    {
      category: "Specializzazioni",
      skills: [
        "Web Sites a codice e Wordpress",
        "Web App Complesse",
        "SaaS Platforms",
        "AI Integration",
        "Real-time Applications",
        "API Development",
      ],
    },
  ];

  const collaborationTypes = [
    {
      icon: Briefcase,
      title: "Progetti Spot",
      description: "Collaborazione per singoli progetti con deliverable definiti e timeline chiare",
    },
    {
      icon: Users,
      title: "Risorsa in Staff",
      description: "Integrazione nel team per periodi medio-lunghi su progetti complessi",
    },
    {
      icon: Code2,
      title: "Consulenza Tecnica",
      description: "Supporto architetturale, code review e mentoring del team",
    },
    {
      icon: TrendingUp,
      title: "Partnership Continuativa",
      description: "Collaborazione stabile per gestire overflow e picchi di lavoro",
    },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Codice di Qualità",
      description: "Best practices, clean code e documentazione completa",
    },
    {
      icon: Award,
      title: "Affidabilità Provata",
      description: "Track record di progetti consegnati in tempo e budget",
    },
    {
      icon: Target,
      title: "Comunicazione Efficace",
      description: "Aggiornamenti regolari, uso di strumenti project management",
    },
    {
      icon: Rocket,
      title: "Velocità di Esecuzione",
      description: "Capacità di muoversi rapidamente su nuove tecnologie e progetti",
    },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-accent text-white py-20 mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">
              Collaborazioni con Web Agency
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Sviluppatore full-stack affidabile e competente per i vostri progetti
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contatti"
                className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Iniziamo a Collaborare
              </a>
              <a
                href="/#portfolio"
                className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Vedi Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Competenze Tecniche */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-500 via-black to-gray-500">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Competenze Tecniche
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stack tecnologico completo per progetti di ogni complessità
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {competenze.map((comp, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-black mb-4 border-b border-gray-200 pb-2">
                  {comp.category}
                </h3>
                <ul className="space-y-2">
                  {comp.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipi di Collaborazione */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-tr from-gray-500 via-black to-gray-500">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Come Possiamo Collaborare
            </h2>
            <p className="text-xl text-gray-600">
              Modalità flessibili per adattarsi alle vostre esigenze
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {collaborationTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      {type.title}
                    </h3>
                    <p className="text-gray-300">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-500 via-black to-gray-500">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Perché Collaborare con Me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo di Collaborazione */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-tr from-gray-500 via-black to-gray-500">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Processo di Collaborazione
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                step: "1",
                title: "Conoscenza e Brief",
                description: "Discussione iniziale per comprendere le esigenze del progetto e le aspettative",
              },
              {
                step: "2",
                title: "Valutazione Tecnica",
                description: "Analisi dei requisiti tecnici e stima tempi/costi con proposta dettagliata",
              },
              {
                step: "3",
                title: "Setup e Kick-off",
                description: "Accesso a repository, strumenti di PM e allineamento con il vostro workflow",
              },
              {
                step: "4",
                title: "Sviluppo e Comunicazione",
                description: "Lavoro secondo metodologie agili con aggiornamenti regolari e code review",
              },
              {
                step: "5",
                title: "Delivery e Supporto",
                description: "Consegna del lavoro, documentazione e supporto post-delivery se necessario",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-accent text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 font-poppins">
            Cerchi un Partner Affidabile?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Lavoro con web agency di Ferrara, Bologna e tutta l'Emilia-Romagna. Contattiamoci per discutere del vostro prossimo progetto.
          </p>
          <a
            href="/#contatti"
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Contattami per una Call
          </a>
        </div>
      </section>
    </div>
  );
}
