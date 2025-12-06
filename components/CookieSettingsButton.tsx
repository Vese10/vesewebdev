"use client";

import { Cookie } from "lucide-react";

export default function CookieSettingsButton() {
  return (
    <button
      onClick={() => {
        // @ts-ignore - Cookiebot global function
        if (typeof window !== "undefined" && window.Cookiebot) {
          // @ts-ignore
          window.Cookiebot.renew();
        }
      }}
      className="bg-gradient-primary text-black px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-200 inline-flex items-center space-x-2"
    >
      <Cookie size={20} />
      <span>Gestisci Preferenze Cookie</span>
    </button>
  );
}
