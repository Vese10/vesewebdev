"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Chi Sono", href: "#chi-sono" },
  { name: "Servizi", href: "#servizi" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contatti", href: "#contatti" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-gray-100 shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="flex mx-auto px-4 w-full">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold gradient-text font-poppins"
          >
            Veselin Hristov
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-primary hover:text-primary-dark transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contatti"
              className="bg-primary text-black px-6 py-2 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 font-medium"
            >
              Contattami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contatti"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gradient-primary text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-200 font-medium text-center"
              >
                Contattami
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
