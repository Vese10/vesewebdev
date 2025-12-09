import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Folder } from "lucide-react";

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
  alternates: {
    canonical: "https://vesewebdev.it/portfolio",
  },
  openGraph: {
    title: "Portfolio Progetti | Programmatore Ferrara Bologna",
    description:
      "Portfolio completo dei progetti sviluppati: siti web, gestionali, web app e soluzioni AI. Lavori per aziende e web agency a Ferrara, Bologna e Emilia-Romagna.",
    url: "https://vesewebdev.it/portfolio",
    siteName: "Veselin Hristov",
    type: "website",
  },
};

type Project = {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  tags?: string[];
  external?: boolean;
};

const personalProjects: Project[] = [
  {
    title: "MyNava",
    description:
      "Uno dei lavori di cui sono più orgoglioso: gestionale SaaS per ostetriche libere professioniste pensato per rivoluzionare il metodo di lavoro e la qualità dei servizi.",
    href: "https://mynava.it/",
    image: "/my-nava.png",
    alt: "Sito web MyNava",
    tags: ["Landing Page", "Gestionale SaaS"],
  },
  {
    title: "Ostetrica Silvia Buzzoni",
    description:
      "Sito web professionale per un’ostetrica libera professionista che mi ha permesso di mettere in pratica molte delle mie competenze. SEO avanzato e struttura chiara.",
    href: "https://ostetricasilviabuzzoni.it/",
    image: "/silvia-buzzoni-web-min.png",
    alt: "Sito web Ostetrica Silvia Buzzoni",
    tags: ["Sito professionale", "Branding", "SEO Avanzata"],
  },
  {
    title: "Una Dietista Su Misura",
    description:
      "Restyling completo del sito di Chiara Carpanelli. Un nuovo sito WordPress, semplice e intuitivo, in linea con lo stile e le esigenze della cliente.",
    href: "https://unadietistasumisura.it/",
    image: "/dietista-web-min.png",
    alt: "Sito web Una Dietista Su Misura",
    tags: ["WordPress", "Restyling", "UX/UI"],
  },
  {
    title: "Meditate Like a Buddah",
    description:
      "Una delle prime web app che ho realizzato. Un progetto semplice ma funzionale, che è stato un ottimo allenamento per consolidare le basi.",
    href: "https://meditate-like-a-buddah.com/",
    image: "/meditate-web-min.png",
    alt: "Web app Meditate Like a Buddah",
    tags: ["Web app", "JavaScript", "Side project"],
  },
];

const collabProjects: Project[] = [
  {
    title: "Federico Merlin",
    description:
      "Sito istituzionale del Dott. Federico Merlin, oculista specialista a Rovigo e Legnago, con pagine dedicate alle visite oculistiche, esami diagnostici avanzati e prenotazione online, realizzato in collaborazione con Kraken Studio.",
    href: "https://federicomerlin.com/",
    image: "/federico-merlin.png",
    alt: "Sito web Dott. Federico Merlin",
    tags: ["PHP", "Custom theme", "Sanitario"],
    external: true,
  },
  {
    title: "Leonardo Rosa",
    description:
      "Sito vetrina di Leonardo Rosa, pensato per raccontare spettacoli, biografia e date live con un’esperienza WordPress veloce e ottimizzata.",
    href: "https://www.leonardorosa.it/",
    image: "/leonardo-rosa.png",
    alt: "Sito web Leonardo Rosa mentalista",
    tags: ["WordPress", "Performance", "Personal brand"],
    external: true,
  },
  {
    title: "ANDOS Ferrara",
    description:
      "Portale istituzionale del comitato ANDOS Ferrara, associazione a sostegno delle donne operate al seno, con informazioni sui servizi, iniziative di prevenzione e calendario eventi sul territorio.",
    href: "https://www.andosferrara.it/",
    image: "/andos-ferrara.png",
    alt: "Sito web ANDOS Ferrara",
    tags: ["WordPress", "No-profit", "Sanitario"],
    external: true,
  },
  {
    title: "Fast Track Italian Citizenship",
    description:
      "Website informativo per Fast Track Italian Citizenship, studio specializzato in pratiche di cittadinanza italiana, visti e traduzioni per un pubblico internazionale, con forte focus su lead generation e richiesta consulenze.",
    href: "https://fastrackitaliancitizenship.com/",
    image: "/fast-track-italian-citizenship.png",
    alt: "Sito web Fast Track Italian Citizenship",
    tags: ["WordPress", "Multilingua", "Lead generation"],
    external: true,
  },
  {
    title: "College Ferrara",
    description:
      "Sito ufficiale del College Ferrara, club e locale notturno di riferimento in città, progettato per promuovere serate, eventi e prevendite con una forte componente visual e orientata all’esperienza utente.",
    href: "https://www.collegeferrara.it/",
    image: "/college-ferrara.png",
    alt: "Sito web College Ferrara",
    tags: ["WordPress", "Eventi", "Entertainment"],
    external: true,
  },
  {
    title: "Servizi Consorzio Colibrì",
    description:
      "Portale servizi del Consorzio Colibrì, che raccoglie e organizza l’offerta delle strutture sanitarie consorziate in Emilia-Romagna con schede servizio, contatti e percorsi dedicati al cittadino.",
    href: "https://serviziconsorziocolibri.com/",
    image: "/consorzio-colibri.png",
    alt: "Portale servizi Consorzio Colibrì",
    tags: ["WordPress Custom", "Sanitario", "Portale servizi"],
    external: true,
  },
  {
    title: "Centro Mediro",
    description:
      "Landing page per Mediro, il primo co-working medico di Rovigo: ambulatori moderni chiavi in mano per professionisti della salute, con focus su spazi, vantaggi e contatto rapido.",
    href: "https://centromediro.it/landing",
    image: "/centro-mediro.png",
    alt: "Sito web Centro Mediro",
    tags: ["PHP", "Landing page", "Sanitario"],
    external: true,
  },
  {
    title: "Conti Legnami",
    description:
      "Sito aziendale di Conti Legnami, realtà storica specializzata in legname, pannelli, infissi e soluzioni su misura per edilizia e falegnameria, con ampia catalogazione prodotti e servizi.",
    href: "https://contilegnami.it",
    image: "/conti-legnami.png",
    alt: "Sito web Conti Legnami",
    tags: ["PHP", "Catalogo prodotti", "B2B"],
    external: true,
  },
  {
    title: "Eclipse Music Hub",
    description:
      "Sito per Eclipse Music Hub, studio di registrazione, sale prova e scuola di musica a Ferrara, pensato per presentare servizi, spazi e modalità di prenotazione a musicisti e band.",
    href: "https://eclipse-music-hub.com",
    image: "/eclipse-music-hub.png",
    alt: "Sito web Eclipse Music Hub",
    tags: ["PHP", "Musica", "Servizi"],
    external: true,
  },
  {
    title: "Ferrara Talent Playground",
    description:
      "Portale del progetto Ferrara Talent Playground, iniziativa del Comune di Ferrara e Laboratorio Aperto per attrarre e trattenere giovani talenti con servizi dedicati, eventi, formazione e supporto alle imprese.",
    href: "https://www.ferraratalentplayground.com/",
    image: "/ferrara-talent-playground.png",
    alt: "Sito web Ferrara Talent Playground",
    tags: ["WordPress", "Progetto locale", "Istituzionale"],
    external: true,
  },
];


function ProjectCard({ project }: { project: Project }) {
  const isExternal = project.external ?? project.href.startsWith("http");

  return (
    <article className="group relative flex flex-col rounded-3xl border border-white/10 bg-white p-5 shadow-lg shadow-black/30 backdrop-blur-md transition-transform transition-shadow duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-2xl">
      <a
        href={project.href}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noreferrer noopener" : undefined}
        className="relative block overflow-hidden rounded-2xl bg-slate-800"
      >
        <Image
          src={project.image}
          alt={project.alt}
          width={800}
          height={500}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-90"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />
      </a>

      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-300">
          {project.title}
          <ExternalLink className="h-4 w-4 text-gray-300  group-hover:text-accent" />
        </h3>
        <p className="mt-2 text-sm text-gray-400">{project.description}</p>

        {project.tags && project.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-primary px-3 py-1 text-xs font-medium text-black"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6">
          <a
            href={project.href}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noreferrer noopener" : undefined}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
          >
            {isExternal ? "Visita il sito" : "Vedi il progetto"}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20 mt-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">
            Portfolio Progetti
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Una selezione dei progetti su cui ho lavorato come sviluppatore
            freelance di siti web e web app tra Ferrara, Bologna e dintorni.
          </p>
        </div>
      </section>

      {/* Progetti personali */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-400 via-black to-gray-400">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <Folder className="h-4 w-4" />
                <span>Progetti personali</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Progetti 100% sviluppati da me
              </h2>
              <p className="mt-3 text-white max-w-2xl">
                Siti web e web app seguiti in prima persona: analisi, sviluppo,
                ottimizzazione performance e cura dei dettagli front-end.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {personalProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Progetti in collaborazione con Kraken Studio */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-tr from-gray-400 via-black to-gray-400">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                <span>In collaborazione</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Progetti con <a className="text-primary hover:text-accent transition-colors duration-200" href="https://krakenstudio.it" target="_blank" rel="noopener noreferrer">Kraken Studio</a>
              </h2>
              <p className="mt-3 text-white max-w-2xl">
                Siti realizzati insieme a Kraken Studio di Ferrara: lavoro di
                squadra tra design (di Alessio Montini), front-end e integrazioni WordPress/PHP (di Mattia Negrelli e mie).
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {collabProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-accent text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vuoi vedere qualcosa di simile per il tuo progetto?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Posso mostrarti casi studio più dettagliati o progettare insieme da
            zero il sito o la web app che hai in mente.
          </p>
          <a
            href="/#contatti"
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Contattami
          </a>
        </div>
      </section>
    </div>
  );
}
