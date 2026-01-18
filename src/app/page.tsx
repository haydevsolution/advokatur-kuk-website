import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section - ohne pt-20 da es die erste Section ist */}
      <div className="-mt-20">
        <Hero />
      </div>

      {/* Über die Kanzlei - Kurze Vorstellung */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="section-title">Ihre Kanzlei für Rechtsfragen</h2>
              <div className="gold-border">
                <p className="text-lg text-gray-600 mb-6">
                  Bei Advokatur-KuK verbinden wir juristische Expertise mit persönlicher
                  Betreuung. Unser Ziel ist es, für Sie die beste Lösung zu finden –
                  kompetent, engagiert und vertrauensvoll.
                </p>
                <p className="text-lg text-gray-600">
                  Mit langjähriger Erfahrung und einem tiefen Verständnis für die
                  Bedürfnisse unserer Mandanten stehen wir Ihnen in allen rechtlichen
                  Angelegenheiten zur Seite.
                </p>
              </div>
              <div className="mt-10">
                <Link href="/kanzlei" className="btn-primary">
                  Mehr über uns erfahren
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
                alt="Anwaltskanzlei"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rechtsgebiete Übersicht */}
      <section className="section" style={{ backgroundColor: 'var(--gray-light)' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Unsere Rechtsgebiete</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Wir beraten und vertreten Sie kompetent in verschiedenen Rechtsbereichen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Vertragsrecht",
                description: "Beratung und Gestaltung von Verträgen aller Art sowie Durchsetzung vertraglicher Ansprüche.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: "Familienrecht",
                description: "Kompetente Begleitung bei Scheidung, Unterhalt, Sorgerecht und allen familienrechtlichen Fragen.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: "Arbeitsrecht",
                description: "Vertretung in arbeitsrechtlichen Streitigkeiten und Beratung zu Kündigungen und Verträgen.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow">
                <div
                  className="w-16 h-16 mb-6 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--primary)' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/rechtsgebiete" className="btn-outline-dark">
              Alle Rechtsgebiete ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Warum uns wählen */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Warum Advokatur-KuK?</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Wir setzen auf Qualität, Vertrauen und persönliche Betreuung.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                title: "Erfahrung",
                text: "Langjährige Expertise in verschiedenen Rechtsgebieten",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Kompetenz",
                text: "Fundiertes Fachwissen und stetige Weiterbildung",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: "Vertrauen",
                text: "Diskretion und Zuverlässigkeit in jeder Situation",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Persönlich",
                text: "Individuelle Betreuung und offene Kommunikation",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-8">
                <div
                  className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: 'var(--gold)', color: 'var(--black)' }}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--primary)' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Haben Sie rechtliche Fragen?
          </h2>
          <p className="text-xl text-gray-300 mb-14 max-w-2xl mx-auto">
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
