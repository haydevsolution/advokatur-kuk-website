import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontakt | Advokatur-KuK",
  description: "Kontaktieren Sie Advokatur-KuK für eine Rechtsberatung. Wir sind für Sie da.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="pt-36 pb-20 text-center text-white"
        style={{ backgroundColor: 'var(--primary)' }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontakt</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Wir freuen uns auf Ihre Nachricht
          </p>
        </div>
      </section>

      {/* Formular und Karte */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Kontaktformular */}
            <div>
              <div className="mb-8">
                <div
                  className="w-12 h-0.5 mb-4"
                  style={{ backgroundColor: 'var(--gold)' }}
                ></div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  Kontaktformular
                </h2>
                <p className="text-gray-600">
                  Schildern Sie uns Ihr Anliegen. Wir melden uns schnellstmöglich bei Ihnen.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-700">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ihr Vorname"
                      className="w-full px-5 py-4 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:bg-white shadow-sm focus:shadow-md transition-all duration-300"
                      style={{ '--tw-ring-color': 'var(--gold)' } as React.CSSProperties}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-700">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ihr Nachname"
                      className="w-full px-5 py-4 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:bg-white shadow-sm focus:shadow-md transition-all duration-300"
                      style={{ '--tw-ring-color': 'var(--gold)' } as React.CSSProperties}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-700">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ihre@email.de"
                      className="w-full px-5 py-4 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:bg-white shadow-sm focus:shadow-md transition-all duration-300"
                      style={{ '--tw-ring-color': 'var(--gold)' } as React.CSSProperties}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-700">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      placeholder="+49 123 456789"
                      className="w-full px-5 py-4 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:bg-white shadow-sm focus:shadow-md transition-all duration-300"
                      style={{ '--tw-ring-color': 'var(--gold)' } as React.CSSProperties}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700">
                    Betreff *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Worum geht es?"
                    className="w-full px-5 py-4 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:bg-white shadow-sm focus:shadow-md transition-all duration-300"
                    style={{ '--tw-ring-color': 'var(--gold)' } as React.CSSProperties}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    className="w-full px-5 py-4 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:bg-white shadow-sm focus:shadow-md transition-all duration-300 resize-none"
                    style={{ '--tw-ring-color': 'var(--gold)' } as React.CSSProperties}
                  ></textarea>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <input
                    type="checkbox"
                    required
                    id="datenschutz"
                    className="mt-1 w-5 h-5 rounded border-gray-300 accent-gold"
                    style={{ accentColor: 'var(--gold)' }}
                  />
                  <label htmlFor="datenschutz" className="text-sm text-gray-600 leading-relaxed">
                    Ich habe die{' '}
                    <Link
                      href="/datenschutz"
                      className="underline font-semibold hover:opacity-70 transition-opacity"
                      style={{ color: 'var(--primary)' }}
                    >
                      Datenschutzerklärung
                    </Link>{' '}
                    gelesen und stimme der Verarbeitung meiner Daten zu. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-4 text-lg mt-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Karte und Öffnungszeiten */}
            <div>
              <div className="mb-8">
                <div
                  className="w-12 h-0.5 mb-4"
                  style={{ backgroundColor: 'var(--gold)' }}
                ></div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  Unsere Kanzlei
                </h2>
                <p className="text-gray-600">
                  Besuchen Sie uns in unseren Räumlichkeiten im Herzen der Stadt.
                </p>
              </div>

              {/* Kanzlei Bild */}
              <div className="h-72 rounded-lg overflow-hidden mb-8 relative">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Moderne Kanzlei"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Advokatur-KuK</p>
                  <p className="text-sm text-gray-200">Musterstraße 123, 12345 Musterstadt</p>
                </div>
              </div>

              {/* Öffnungszeiten Card */}
              <div
                className="p-6 rounded-lg"
                style={{ backgroundColor: 'var(--gray-light)' }}
              >
                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  Öffnungszeiten
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Montag - Freitag</span>
                    <span className="font-medium text-gray-800">9:00 - 18:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Samstag</span>
                    <span className="font-medium text-gray-800">Nach Vereinbarung</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sonntag</span>
                    <span className="font-medium text-gray-800">Geschlossen</span>
                  </div>
                </div>
                <div
                  className="mt-4 pt-4 border-t"
                  style={{ borderColor: 'var(--gray)' }}
                >
                  <p className="text-sm text-gray-600">
                    Termine außerhalb der regulären Öffnungszeiten sind nach vorheriger Absprache möglich.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kontakt Cards */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary)' }}>So erreichen Sie uns</h2>
              <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: 'var(--gold)' }}></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Telefon */}
              <div
                className="text-center p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                <div
                  className="mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: 'var(--gold)', width: '4.5rem', height: '4.5rem' }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Rufen Sie uns an
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Montag - Freitag<br />9:00 - 18:00 Uhr
                </p>
                <a
                  href="tel:+49123456789"
                  className="text-xl font-bold hover:opacity-80 transition-opacity"
                  style={{ color: 'var(--gold)' }}
                >
                  +49 123 456789
                </a>
              </div>

              {/* E-Mail */}
              <div
                className="text-center p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                <div
                  className="mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: 'var(--gold)', width: '4.5rem', height: '4.5rem' }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Schreiben Sie uns
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Wir antworten in der Regel<br />innerhalb von 24 Stunden
                </p>
                <a
                  href="mailto:info@advokatur-kuk.de"
                  className="text-lg font-bold hover:opacity-80 transition-opacity"
                  style={{ color: 'var(--gold)' }}
                >
                  info@advokatur-kuk.de
                </a>
              </div>

              {/* Adresse */}
              <div
                className="text-center p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                <div
                  className="mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: 'var(--gold)', width: '4.5rem', height: '4.5rem' }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Besuchen Sie uns
                </h3>
                <p className="text-gray-300 text-sm">
                  Advokatur-KuK<br />
                  Musterstraße 123<br />
                  12345 Musterstadt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hinweis */}
      <section
        className="py-8"
        style={{ backgroundColor: 'var(--primary)' }}
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-300">
            <strong className="text-white">Hinweis:</strong> Die Kontaktaufnahme per E-Mail oder Kontaktformular
            begründet kein Mandatsverhältnis. Bitte senden Sie keine vertraulichen
            Informationen, bevor ein Mandatsverhältnis besteht.
          </p>
        </div>
      </section>
    </>
  );
}
