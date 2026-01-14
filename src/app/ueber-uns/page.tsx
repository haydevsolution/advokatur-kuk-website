import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns | Advokatur-KuK",
  description: "Lernen Sie das Team von Advokatur-KuK kennen. Erfahren Sie mehr über unsere Qualifikationen und Erfahrung.",
};

export default function UeberUnsPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="py-20 text-center text-white"
        style={{ backgroundColor: 'var(--primary)' }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Über uns</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Das Team hinter Advokatur-KuK
          </p>
        </div>
      </section>

      {/* Hauptanwältin */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="h-96 flex items-center justify-center order-2 md:order-1"
              style={{ backgroundColor: 'var(--gray-light)' }}
            >
              <p className="text-gray-400">[Platzhalter für Portrait-Foto]</p>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="section-title">[Name der Anwältin]</h2>
              <p className="text-lg mb-2" style={{ color: 'var(--gold)' }}>
                Rechtsanwältin
              </p>
              <div className="gold-border">
                <p className="text-lg text-gray-600 mb-6">
                  [Platzhalter: Persönliche Vorstellung der Anwältin.
                  Werdegang, Ausbildung, Motivation für den Beruf.]
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  [Platzhalter: Spezialisierungen, besondere Qualifikationen,
                  Weiterbildungen, Mitgliedschaften in Fachverbänden.]
                </p>
                <p className="text-lg text-gray-600">
                  [Platzhalter: Persönliche Note - was der Anwältin wichtig ist,
                  ihre Philosophie bei der Mandantenbetreuung.]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifikationen */}
      <section className="section" style={{ backgroundColor: 'var(--gray-light)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Qualifikationen & Erfahrung</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                Ausbildung
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--gold)' }}>•</span>
                  [Platzhalter: Studium]
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--gold)' }}>•</span>
                  [Platzhalter: Referendariat]
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--gold)' }}>•</span>
                  [Platzhalter: Zulassung]
                </li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                Mitgliedschaften
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--gold)' }}>•</span>
                  [Platzhalter: Rechtsanwaltskammer]
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--gold)' }}>•</span>
                  [Platzhalter: Fachverband 1]
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--gold)' }}>•</span>
                  [Platzhalter: Fachverband 2]
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Unsere Werte</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              [Platzhalter: Einleitungstext zu den Werten der Kanzlei]
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Integrität", text: "[Platzhalter]" },
              { title: "Kompetenz", text: "[Platzhalter]" },
              { title: "Engagement", text: "[Platzhalter]" },
              { title: "Vertrauen", text: "[Platzhalter]" },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div
                  className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: 'var(--gold)' }}
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
    </>
  );
}
