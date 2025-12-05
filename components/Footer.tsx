import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text font-poppins">
              Vesewebdev
            </h3>
            <p className="text-sm text-gray-400">
              Sviluppatore web freelance specializzato in soluzioni moderne e
              performanti.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Link Rapidi
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#chi-sono"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Chi Sono
                </a>
              </li>
              <li>
                <a
                  href="#servizi"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Servizi
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contatti"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Servizi</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servizi/aziende-privati"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Per Aziende e Privati
                </Link>
              </li>
              <li>
                <Link
                  href="/servizi/web-agency"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Per Web Agency
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Portfolio Completo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-primary" />
                <span className="text-sm">Ferrara, Emilia-Romagna</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-primary" />
                <span className="text-sm">+39 XXX XXXXXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-primary" />
                <span className="text-sm">info@vesewebdev.com</span>
              </li>
            </ul>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {currentYear} Vesewebdev. Tutti i diritti riservati. | Programmatore Freelance Ferrara - Bologna
          </p>
        </div>
      </div>
    </footer>
  );
}
