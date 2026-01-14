import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kanzlei | Advokatur-KuK",
  description: "Lernen Sie unsere Kanzlei kennen. Advokatur-KuK steht für kompetente Rechtsberatung mit persönlicher Betreuung.",
};

export default function KanzleiPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="py-20 text-center text-white"
        style={{ backgroundColor: 'var(--primary)' }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unsere Kanzlei</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Kompetenz trifft Engagement
          </p>
        </div>
      </section>

      {/* Kanzlei Vorstellung */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Über Advokatur-KuK</h2>
              <div className="gold-border">
                <p className="text-lg text-gray-600 mb-6">
                  [Platzhalter: Ausführliche Beschreibung der Kanzlei, Geschichte,
                  Gründung und Entwicklung. Hier kann die Anwältin ihre persönliche
                  Geschichte und die Philosophie der Kanzlei beschreiben.]
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  [Platzhalter: Weitere Informationen über die Arbeitsweise,
                  Spezialisierungen und das Team.]
                </p>
                <p className="text-lg text-gray-600">
                  [Platzhalter: Was die Kanzlei besonders macht, USPs,
                  besondere Qualifikationen oder Mitgliedschaften.]
                </p>
              </div>
            </div>
            <div
              className="h-96 flex items-center justify-center"
              style={{ backgroundColor: 'var(--gray-light)' }}
            >
              <p className="text-gray-400">[Platzhalter für Kanzlei-Bild]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section className="section" style={{ backgroundColor: 'var(--gray-light)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Unsere Philosophie</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Mandantenorientiert",
                text: "[Platzhalter: Beschreibung der mandantenorientierten Arbeitsweise]",
              },
              {
                title: "Transparent",
                text: "[Platzhalter: Beschreibung der transparenten Kommunikation und Kostenaufstellung]",
              },
              {
                title: "Engagiert",
                text: "[Platzhalter: Beschreibung des Engagements für jeden einzelnen Fall]",
              },
            ].map((item, index) => (
              <div key={index} className="card text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--gold)' }}
                >
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--primary)' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standort */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Unser Standort</h2>
              <div className="gold-border mb-6">
                <p className="text-lg text-gray-600 mb-4">
                  [Platzhalter: Beschreibung des Standorts, Erreichbarkeit,
                  Parkmöglichkeiten, öffentliche Verkehrsmittel.]
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold" style={{ color: 'var(--primary)' }}>Adresse</h3>
                  <p className="text-gray-600">Musterstraße 123</p>
                  <p className="text-gray-600">12345 Musterstadt</p>
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: 'var(--primary)' }}>Öffnungszeiten</h3>
                  <p className="text-gray-600">Montag - Freitag: 9:00 - 18:00 Uhr</p>
                  <p className="text-gray-600">Termine nach Vereinbarung</p>
                </div>
              </div>
            </div>
            <div
              className="h-80 flex items-center justify-center"
              style={{ backgroundColor: 'var(--gray-light)' }}
            >
              <p className="text-gray-400">[Platzhalter für Karte/Standort-Bild]</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
