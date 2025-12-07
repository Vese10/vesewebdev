"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export default function Contatti() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsLoading(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contatti"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-500 via-black to-gray-500"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-4">
            Contattami
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Hai un progetto in mente? Parliamone!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Informazioni di Contatto
              </h3>
              <p className="text-white mb-8">
                Sono disponibile per nuovi progetti e collaborazioni. Contattami
                tramite il form o usando le informazioni qui sotto.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Sede</h4>
                  <a href="https://www.google.com/maps/place/Siti+internet+da+Vese/@44.8046469,11.6806138,13.75z/data=!4m6!3m5!1s0x477e452fc82130bd:0x585947921928ce98!8m2!3d44.7962962!4d11.7251667!16s%2Fg%2F11ym3sntbd?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                    via Aurelio Zamboni, 99/C<br />
                    44124 Ferrara, Emilia-Romagna<br />
                    Operativo anche a Bologna e provincia
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Telefono</h4>
                  <a
                    href="tel:+393806455771"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    +39 380 645 5771
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a
                    href="mailto:info@vesewebdev.it"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    info@vesewebdev.it
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <p className="font-semibold text-gray-300">Disponibile per progetti</p>
                  <p className="text-sm text-gray-400">
                    Tempo di risposta: 24-48 ore
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6 border border-gray-800"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nome *
                </label>
                <input
                  {...register("name", { required: "Il nome è obbligatorio" })}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="Il tuo nome"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-error">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email *
                </label>
                <input
                  {...register("email", {
                    required: "L'email è obbligatoria",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email non valida",
                    },
                  })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="tua@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-error">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Telefono (opzionale)
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="+39 123 4567890"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Messaggio *
                </label>
                <textarea
                  {...register("message", {
                    required: "Il messaggio è obbligatorio",
                    minLength: {
                      value: 10,
                      message: "Il messaggio deve essere di almeno 10 caratteri",
                    },
                  })}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Raccontami del tuo progetto..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-error">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || isSubmitted}
                className="w-full bg-primary text-black px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Invio in corso...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Messaggio Inviato!</span>
                  </>
                ) : (
                  <>
                    <span>Invia Messaggio</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {isSubmitted && (
                <div className="bg-green-50 text-green-800 p-4 rounded-lg text-sm">
                  Grazie per il tuo messaggio! Ti risponderò al più presto.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
