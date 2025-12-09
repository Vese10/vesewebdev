"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/#hero" },
  { name: "Chi Sono", href: "/#chi-sono" },
  { name: "Servizi", href: "/#servizi" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Contatti", href: "/#contatti" },
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
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-gradient-to-b from-gray-50/95 to-gray-100/95 backdrop-blur-lg shadow-xl py-3"
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
                href="/#contatti"
                className="bg-primary text-black px-6 py-2 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 font-medium"
              >
                Contattami
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Full Screen Overlay */}
      <div
        className={cn(
          "fixed left-0 right-0 md:hidden bg-gradient-to-b from-gray-50/95 to-gray-100/95 backdrop-blur-lg shadow-xl transition-all duration-300 ease-in-out z-40",
          isMobileMenuOpen
            ? "top-[56px] opacity-100 translate-y-0"
            : "top-[56px] opacity-0 -translate-y-4 pointer-events-none"
        )}
        style={{ height: "calc(100vh - 56px)" }}
      >
        <div className="flex flex-col items-center justify-center h-full px-6 space-y-8">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-semibold text-foreground hover:text-primary transition-all duration-200 transform hover:scale-105"
              style={{
                animation: isMobileMenuOpen
                  ? `fadeInUp 0.4s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
