import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Cookie } from "lucide-react";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Cookie Policy | Vesewebdev",
  description:
    "Informazioni sui cookie utilizzati sul sito Vesewebdev e come gestire le tue preferenze.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-6">
            <Cookie size={40} className="text-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Cookie Policy
          </h1>
          <p className="text-white text-lg">
            Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-300">
          {/* Introduzione */}
          <section className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              1. Introduzione
            </h2>
            <p className="text-white leading-relaxed">
              Questo sito web utilizza cookie e tecnologie simili per garantire
              il corretto funzionamento delle procedure e migliorare
              l'esperienza di utilizzo delle applicazioni online. Il presente
              documento fornisce informazioni dettagliate sull'uso dei cookie e
              di tecnologie similari, su come sono utilizzati dal sito e su
              come gestirli.
            </p>
          </section>

          {/* Cosa sono i cookie */}
          <section className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              2. Cosa Sono i Cookie
            </h2>
            <p className="text-white leading-relaxed mb-4">
              I cookie sono piccoli file di testo che i siti visitati inviano
              al terminale dell'utente, dove vengono memorizzati per essere poi
              ritrasmessi agli stessi siti alla visita successiva.
            </p>
            <p className="text-white leading-relaxed">
              I cookie possono essere utilizzati per diverse finalità: esecuzione
              di autenticazioni informatiche, monitoraggio di sessioni,
              memorizzazione di informazioni su specifiche configurazioni
              riguardanti gli utenti che accedono al server, facilitazione
              nella navigazione, e analisi statistica.
            </p>
          </section>

          {/* Tipi di Cookie */}
          <section className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              3. Tipi di Cookie Utilizzati
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  3.1 Cookie Tecnici
                </h3>
                <p className="text-white leading-relaxed">
                  Sono i cookie necessari al funzionamento del sito e non
                  richiedono il consenso dell'utente. Questi cookie permettono
                  la navigazione e l'utilizzo delle funzionalità del sito.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  3.2 Cookie Analitici
                </h3>
                <p className="text-white leading-relaxed">
                  Utilizzati per raccogliere informazioni sull'utilizzo del
                  sito da parte degli utenti in forma aggregata e anonima.
                  Questi cookie ci aiutano a capire come i visitatori
                  interagiscono con il sito web.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  3.3 Cookie di Terze Parti
                </h3>
                <p className="text-white leading-relaxed mb-2">
                  Il sito potrebbe utilizzare servizi di terze parti che
                  installano cookie per le seguenti finalità:
                </p>
                <ul className="text-white list-disc list-inside space-y-2 ml-4">
                  <li>Vercel Analytics - Analisi del traffico e performance</li>
                  <li>Usercentrics - Gestione del consenso ai cookie</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Gestione Cookie */}
          <section className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              4. Come Gestire i Cookie
            </h2>
            <p className="text-white leading-relaxed mb-4">
              Puoi gestire le tue preferenze sui cookie in qualsiasi momento
              utilizzando il pannello di gestione delle preferenze. Puoi anche
              gestire i cookie direttamente dalle impostazioni del tuo browser.
            </p>
            <CookieSettingsButton />
          </section>

          {/* Browser Settings */}
          <section className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              5. Gestione tramite Browser
            </h2>
            <p className="text-white leading-relaxed mb-4">
              È possibile gestire i cookie anche attraverso le impostazioni del
              browser. Di seguito i link alle istruzioni dei browser più
              diffusi:
            </p>
            <ul className="text-white list-disc list-inside space-y-2 ml-4">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          {/* Contatti */}
          <section className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              6. Contatti
            </h2>
            <p className="text-white leading-relaxed mb-4">
              Per qualsiasi domanda o richiesta riguardante la nostra Cookie
              Policy, è possibile contattarci a:
            </p>
            <div className="space-y-2">
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:veselin.hristov.10@gmail.com"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  veselin.hristov.10@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-white">Telefono:</strong>{" "}
                <a
                  href="tel:+393806455771"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  +39 380 645 5771
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
