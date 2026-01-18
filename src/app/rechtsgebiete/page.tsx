import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rechtsgebiete | Advokatur-KuK",
  description: "Unsere Rechtsgebiete und Spezialisierungen. Wir beraten Sie kompetent in verschiedenen Rechtsbereichen.",
};

const rechtsgebiete = [
  {
    title: "Rechtsgebiet 1",
    description: "[Platzhalter: Ausführliche Beschreibung des ersten Rechtsgebiets, typische Fälle und wie die Kanzlei helfen kann.]",
    icon: "1",
  },
  {
    title: "Rechtsgebiet 2",
    description: "[Platzhalter: Ausführliche Beschreibung des zweiten Rechtsgebiets, typische Fälle und wie die Kanzlei helfen kann.]",
    icon: "2",
  },
  {
    title: "Rechtsgebiet 3",
    description: "[Platzhalter: Ausführliche Beschreibung des dritten Rechtsgebiets, typische Fälle und wie die Kanzlei helfen kann.]",
    icon: "3",
  },
  {
    title: "Rechtsgebiet 4",
    description: "[Platzhalter: Ausführliche Beschreibung des vierten Rechtsgebiets, typische Fälle und wie die Kanzlei helfen kann.]",
    icon: "4",
  },
  {
    title: "Rechtsgebiet 5",
    description: "[Platzhalter: Ausführliche Beschreibung des fünften Rechtsgebiets, typische Fälle und wie die Kanzlei helfen kann.]",
    icon: "5",
  },
  {
    title: "Rechtsgebiet 6",
    description: "[Platzhalter: Ausführliche Beschreibung des sechsten Rechtsgebiets, typische Fälle und wie die Kanzlei helfen kann.]",
    icon: "6",
  },
];

export default function RechtsgebietePage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="pt-36 pb-20 text-center text-white"
        style={{ backgroundColor: 'var(--primary)' }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unsere Rechtsgebiete</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Kompetente Beratung in allen Rechtsfragen
          </p>
        </div>
      </section>

      {/* Einleitung */}
      <section className="section bg-white">
        <div className="container mx-auto px-6 flex justify-center">
          <div className="max-w-3xl w-full flex flex-col items-center text-center">
            <div
              className="w-16 h-0.5 mb-6"
              style={{ backgroundColor: 'var(--gold)' }}
            ></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: 'var(--primary)' }}>
              Unsere Expertise
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              [Platzhalter: Einleitungstext zu den Rechtsgebieten. Beschreibung der
              Spezialisierungen und der Erfahrung der Kanzlei in den verschiedenen
              Rechtsbereichen.]
            </p>
          </div>
        </div>
      </section>

      {/* Rechtsgebiete Grid */}
      <section className="section" style={{ backgroundColor: 'var(--gray-light)' }}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rechtsgebiete.map((gebiet, index) => (
              <div key={index} className="card">
                <div
                  className="w-14 h-14 mb-4 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--primary)' }}
                >
                  <span className="text-white font-bold text-xl">{gebiet.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--primary)' }}>
                  {gebiet.title}
                </h3>
                <p className="text-gray-600 mb-4">{gebiet.description}</p>
                <div
                  className="w-12 h-1"
                  style={{ backgroundColor: 'var(--gold)' }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section text-center text-white"
        style={{ backgroundColor: 'var(--primary)' }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Sie haben ein rechtliches Anliegen?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine erste Einschätzung Ihres Falls.
          </p>
          <Link
            href="/kontakt"
            className="btn-gold px-10 py-4 text-lg inline-block"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
