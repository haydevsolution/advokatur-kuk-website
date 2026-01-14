import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Advokatur-KuK",
  description: "Kontaktieren Sie Advokatur-KuK für eine Rechtsberatung. Wir sind für Sie da.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="py-20 text-center text-white"
        style={{ backgroundColor: 'var(--primary)' }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Wir sind für Sie da
          </p>
        </div>
      </section>

      {/* Kontakt Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Kontaktformular */}
            <div>
              <h2 className="section-title">Schreiben Sie uns</h2>
              <p className="text-gray-600 mb-8">
                Nutzen Sie das Kontaktformular für Ihre Anfrage. Wir melden uns
                schnellstmöglich bei Ihnen.
              </p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--primary)' }}>
                      Vorname *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gold"
                      style={{ borderColor: 'var(--gray)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--primary)' }}>
                      Nachname *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--primary)' }}>
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--primary)' }}>
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--primary)' }}>
                    Betreff *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--primary)' }}>
                    Ihre Nachricht *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none resize-none"
                  ></textarea>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 mr-3"
                  />
                  <label className="text-sm text-gray-600">
                    Ich habe die <a href="/datenschutz" className="underline" style={{ color: 'var(--primary)' }}>Datenschutzerklärung</a> gelesen
                    und stimme der Verarbeitung meiner Daten zu. *
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full py-4 text-lg"
                >
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Kontaktinformationen */}
            <div>
              <h2 className="section-title">Kontaktdaten</h2>
              <div className="space-y-8">
                <div className="gold-border">
                  <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--primary)' }}>
                    Adresse
                  </h3>
                  <p className="text-gray-600">Advokatur-KuK</p>
                  <p className="text-gray-600">Musterstraße 123</p>
                  <p className="text-gray-600">12345 Musterstadt</p>
                </div>

                <div className="gold-border">
                  <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--primary)' }}>
                    Telefon & E-Mail
                  </h3>
                  <p className="text-gray-600">Tel: +49 123 456789</p>
                  <p className="text-gray-600">Fax: +49 123 456780</p>
                  <p className="text-gray-600">E-Mail: info@advokatur-kuk.de</p>
                </div>

                <div className="gold-border">
                  <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--primary)' }}>
                    Öffnungszeiten
                  </h3>
                  <p className="text-gray-600">Montag - Freitag: 9:00 - 18:00 Uhr</p>
                  <p className="text-gray-600">Samstag & Sonntag: geschlossen</p>
                  <p className="text-gray-600 mt-2">Termine nach Vereinbarung auch außerhalb der Öffnungszeiten möglich.</p>
                </div>

                {/* Karte Platzhalter */}
                <div
                  className="h-64 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--gray-light)' }}
                >
                  <p className="text-gray-400">[Platzhalter für Google Maps]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hinweis */}
      <section className="py-8" style={{ backgroundColor: 'var(--gray-light)' }}>
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-600">
            <strong>Hinweis:</strong> Die Kontaktaufnahme per E-Mail oder Kontaktformular
            begründet kein Mandatsverhältnis. Bitte senden Sie keine vertraulichen
            Informationen, bevor ein Mandatsverhältnis besteht.
          </p>
        </div>
      </section>
    </>
  );
}
