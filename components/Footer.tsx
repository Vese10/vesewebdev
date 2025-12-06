import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center relative overflow-hidden bg-gradient-to-tr from-gray-300 via-black to-gray-300">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text font-poppins">
              Veselin Hristov
            </h3>
            <p className="text-sm text-white">
              Sviluppatore web freelance specializzato in soluzioni moderne e
              performanti.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Link Rapidi
            </h4>
            <ul className="text-white space-y-2">
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
            <ul className="text-white space-y-2">
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
            <ul className="text-white space-y-3">
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-primary" />
                <a href="tel:+393806455771" className="hover:text-primary transition-colors duration-200">+39 380 645 5771</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-primary" />
                <a href="mailto:info@vesewebdev.it" className="hover:text-primary transition-colors duration-200">info@vesewebdev.it</a>
              </li>
            </ul>
            {/* Social Links */}
            <div className="text-white flex space-x-4 mt-4">
              <a
                href="https://github.com/Vese10"
                className="hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/veselin-hristov-web-dev/"
                className="hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/vese.10/"
                className="hover:text-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/people/Veselin-Hristov/pfbid02eVPqWo21cM8zTKN51MCLAmcCuHzRaPMHrpvVQKJVMVYqmMVo8KSuCHgKtPk5rJyql/?rdid=i0WxxbfM5v62kaKj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17ZD4CeLRU%2F"
                className="hover:text-primary transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
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
