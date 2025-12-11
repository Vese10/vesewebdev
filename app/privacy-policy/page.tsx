import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Vesewebdev",
  description:
    "Informativa sulla privacy di Vesewebdev - Come trattiamo e proteggiamo i tuoi dati personali.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-6">
            <Shield size={40} className="text-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Privacy Policy
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
              La presente Privacy Policy descrive le modalità di trattamento dei
              dati personali degli utenti che consultano il sito{" "}
              <strong className="text-white">vesewebdev.it</strong> in
              conformità al Regolamento UE 2016/679 (GDPR) e al D.Lgs. 196/2003
              come modificato dal D.Lgs. 101/2018.
            </p>
          </section>

          {/* Titolare */}
          <section className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              2. Titolare del Trattamento
            </h2>
            <div className="space-y-2">
              <p className="text-white leading-relaxed">
                <strong className="text-white">Titolare:</strong> Veselin Hristov
              </p>
              <p className="text-white leading-relaxed">
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:veselin.hristov.10@gmail.com"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  veselin.hristov.10@gmail.com
                </a>
              </p>
              <p className="text-white leading-relaxed">
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

          {/* Dati Raccolti */}
          <section className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              3. Tipologie di Dati Raccolti
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  3.1 Dati di Navigazione
                </h3>
                <p className="text-white leading-relaxed">
                  I sistemi informatici e le procedure software preposte al
                  funzionamento di questo sito acquisiscono, nel corso del loro
                  normale esercizio, alcuni dati personali la cui trasmissione è
                  implicita nell'uso dei protocolli di comunicazione di Internet
                  (indirizzo IP, tipo di browser, sistema operativo, ecc.).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  3.2 Dati Forniti Volontariamente
                </h3>
                <p className="text-white  leading-relaxed">
                  L'invio facoltativo, esplicito e volontario di dati personali
                  attraverso il modulo di contatto presente sul sito comporta
                  l'acquisizione dei dati di contatto del mittente necessari per
                  rispondere alle richieste (nome, email, telefono, messaggio).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  3.3 Cookie e Dati di Utilizzo
                </h3>
                <p className="text-white leading-relaxed mb-2">
                  Il sito utilizza cookie e tecnologie simili. Per informazioni
                  dettagliate, consultare la{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-primary hover:text-primary-light transition-colors underline"
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Finalità */}
          <section className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              4. Finalità del Trattamento
            </h2>
            <p className="text-white leading-relaxed mb-4">
              I dati personali sono trattati per le seguenti finalità:
            </p>
            <ul className="text-white list-disc list-inside space-y-2 ml-4">
              <li>Rispondere alle richieste di contatto e informazioni</li>
              <li>Fornire preventivi e proposte commerciali</li>
              <li>Gestire la relazione contrattuale con i clienti</li>
              <li>
                Analizzare statistiche di navigazione in forma anonima e aggregata
              </li>
              <li>Adempiere agli obblighi di legge</li>
            </ul>
          </section>

          {/* Base Giuridica */}
          <section className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              5. Base Giuridica del Trattamento
            </h2>
            <p className="text-white leading-relaxed mb-4">
              Il trattamento dei dati personali si basa sulle seguenti basi
              giuridiche:
            </p>
            <ul className="text-white list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-white">Consenso dell'interessato</strong>{" "}
                - per l'invio di comunicazioni commerciali
              </li>
              <li>
                <strong className="text-white">Esecuzione di un contratto</strong>{" "}
                - per la gestione dei rapporti contrattuali
              </li>
              <li>
                <strong className="text-white">Legittimo interesse</strong> - per
                attività di analisi statistica e miglioramento dei servizi
              </li>
              <li>
                <strong className="text-white">Obblighi di legge</strong> - per
                adempimenti normativi
              </li>
            </ul>
          </section>

          {/* Conservazione */}
          <section className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              6. Periodo di Conservazione
            </h2>
            <p className="text-white leading-relaxed">
              I dati personali saranno conservati per il tempo strettamente
              necessario al conseguimento delle finalità per le quali sono stati
              raccolti. I dati di contatto forniti volontariamente saranno
              conservati per il tempo necessario a evadere la richiesta e, in caso
              di rapporto contrattuale, per i termini previsti dalla legge (10
              anni dalla cessazione del rapporto per obblighi fiscali).
            </p>
          </section>

          {/* Diritti */}
          <section className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              7. Diritti dell'Interessato
            </h2>
            <p className="text-white leading-relaxed mb-4">
              In qualità di interessato, hai il diritto di:
            </p>
            <ul className="text-white list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-white">Accesso:</strong> ottenere conferma
                dell'esistenza di dati personali e accedervi
              </li>
              <li>
                <strong className="text-white">Rettifica:</strong> richiedere la
                correzione di dati inesatti
              </li>
              <li>
                <strong className="text-white">Cancellazione:</strong> richiedere
                la cancellazione dei dati ("diritto all'oblio")
              </li>
              <li>
                <strong className="text-white">Limitazione:</strong> richiedere la
                limitazione del trattamento
              </li>
              <li>
                <strong className="text-white">Portabilità:</strong> ricevere i
                dati in formato strutturato
              </li>
              <li>
                <strong className="text-white">Opposizione:</strong> opporsi al
                trattamento dei dati
              </li>
              <li>
                <strong className="text-white">Revoca del consenso:</strong> in
                qualsiasi momento, senza pregiudicare la liceità del trattamento
                basata sul consenso prestato prima della revoca
              </li>
            </ul>
            <p className="text-white leading-relaxed mt-4">
              Per esercitare questi diritti, contattare il Titolare agli
              indirizzi indicati nella sezione 2.
            </p>
          </section>

          {/* Sicurezza */}
          <section className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              8. Sicurezza dei Dati
            </h2>
            <p className="text-white leading-relaxed">
              Il Titolare adotta misure di sicurezza tecniche e organizzative
              adeguate per proteggere i dati personali da accessi non autorizzati,
              divulgazione, modifica o distruzione. Il sito utilizza protocollo
              HTTPS per garantire la sicurezza delle comunicazioni.
            </p>
          </section>

          {/* Comunicazione */}
          <section className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              9. Comunicazione e Diffusione
            </h2>
            <p className="text-white leading-relaxed">
              I dati personali non saranno diffusi e potranno essere comunicati a
              terzi solo per finalità strettamente connesse alla gestione del
              rapporto contrattuale (es. fornitori di servizi hosting, strumenti
              di analisi) che operano in qualità di responsabili del trattamento.
            </p>
          </section>

          {/* Modifiche */}
          <section className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              10. Modifiche alla Privacy Policy
            </h2>
            <p className="text-white leading-relaxed">
              Il Titolare si riserva il diritto di modificare o aggiornare la
              presente Privacy Policy in qualsiasi momento. Le modifiche saranno
              pubblicate su questa pagina con indicazione della data di ultimo
              aggiornamento. Si consiglia di consultare periodicamente questa
              pagina per essere informati su eventuali modifiche.
            </p>
          </section>

          {/* Reclami */}
          <section className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              11. Reclami
            </h2>
            <p className="text-white leading-relaxed">
              Gli interessati che ritengono che il trattamento dei dati personali
              avvenga in violazione della normativa applicabile hanno il diritto
              di proporre reclamo al Garante per la Protezione dei Dati Personali
              (
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors underline"
              >
                www.garanteprivacy.it
              </a>
              ) o di adire le opportune sedi giudiziarie.
            </p>
          </section>

          {/* Contatti */}
          <section className="glass-dark rounded-2xl p-8 border-2 border-primary">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              12. Contatti
            </h2>
            <p className="text-white leading-relaxed mb-4">
              Per qualsiasi domanda o richiesta riguardante la presente Privacy
              Policy o il trattamento dei dati personali, è possibile contattare
              il Titolare:
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
