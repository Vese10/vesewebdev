export default function Cta() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary-dark to-accent text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Hai un progetto in mente?
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Posso aiutarti a realizzare il sito o la web app che desideri.
        </p>
        <a
          href="https://wa.me/393806455771"
          className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          Scrivimi su WhatsApp
        </a>
      </div>
    </section>
  );
}
