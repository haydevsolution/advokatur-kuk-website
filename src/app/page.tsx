import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section - ohne pt-20 da es die erste Section ist */}
      <div className="-mt-20">
        <Hero />
      </div>

      {/* Über die Kanzlei - Kurze Vorstellung */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Ihre Kanzlei für Rechtsfragen</h2>
              <div className="gold-border">
                <p className="text-lg text-gray-600 mb-6">
                  Bei Advokatur-KuK verbinden wir juristische Expertise mit persönlicher
                  Betreuung. Unser Ziel ist es, für Sie die beste Lösung zu finden –
                  kompetent, engagiert und vertrauensvoll.
                </p>
                <p className="text-lg text-gray-600">
                  [Platzhalter: Hier kommt ein individueller Text über die Kanzlei,
                  ihre Geschichte und ihre Werte.]
                </p>
              </div>
              <Link href="/kanzlei" className="btn-primary mt-6">
                Mehr über uns erfahren
              </Link>
            </div>
            <div
              className="h-80 flex items-center justify-center"
              style={{ backgroundColor: 'var(--gray-light)' }}
            >
              <p className="text-gray-400">[Platzhalter für Bild]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rechtsgebiete Übersicht */}
      <section className="section" style={{ backgroundColor: 'var(--gray-light)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Unsere Rechtsgebiete</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Wir beraten und vertreten Sie kompetent in verschiedenen Rechtsbereichen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Rechtsgebiet 1",
                description: "[Platzhalter: Beschreibung des ersten Rechtsgebiets]",
              },
              {
                title: "Rechtsgebiet 2",
                description: "[Platzhalter: Beschreibung des zweiten Rechtsgebiets]",
              },
              {
                title: "Rechtsgebiet 3",
                description: "[Platzhalter: Beschreibung des dritten Rechtsgebiets]",
              },
            ].map((item, index) => (
              <div key={index} className="card">
                <div
                  className="w-12 h-12 mb-4 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--primary)' }}
                >
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--primary)' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/rechtsgebiete" className="btn-outline-dark">
              Alle Rechtsgebiete ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Warum uns wählen */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Warum Advokatur-KuK?</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              [Platzhalter: Einleitungstext zu den Vorteilen der Kanzlei]
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Erfahrung", text: "[Platzhalter]" },
              { title: "Kompetenz", text: "[Platzhalter]" },
              { title: "Vertrauen", text: "[Platzhalter]" },
              { title: "Persönlich", text: "[Platzhalter]" },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div
                  className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: 'var(--gold)', color: 'var(--black)' }}
                >
                  <span className="font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--primary)' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt CTA */}
      <section
        className="section text-center text-white"
        style={{ backgroundColor: 'var(--primary)' }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Haben Sie rechtliche Fragen?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Kontaktieren Sie uns für eine unverbindliche Erstberatung.
          </p>
          <Link href="/kontakt" className="btn-gold">
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
