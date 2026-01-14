import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Advokatur-KuK",
  description: "Impressum der Rechtsanwaltskanzlei Advokatur-KuK.",
};

export default function ImpressumPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="py-20 text-center text-white"
        style={{ backgroundColor: 'var(--primary)' }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Impressum</h1>
        </div>
      </section>

      {/* Impressum Content */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* Angaben gemäß § 5 TMG */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600">Advokatur-KuK</p>
                  <p className="text-gray-600">[Name der Anwältin]</p>
                  <p className="text-gray-600">Musterstraße 123</p>
                  <p className="text-gray-600">12345 Musterstadt</p>
                </div>
              </div>

              {/* Kontakt */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  Kontakt
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600">Telefon: +49 123 456789</p>
                  <p className="text-gray-600">Telefax: +49 123 456780</p>
                  <p className="text-gray-600">E-Mail: info@advokatur-kuk.de</p>
                </div>
              </div>

              {/* Berufsbezeichnung und berufsrechtliche Regelungen */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  Berufsbezeichnung und berufsrechtliche Regelungen
                </h2>
                <div className="gold-border space-y-4">
                  <div>
                    <p className="font-semibold text-gray-700">Berufsbezeichnung:</p>
                    <p className="text-gray-600">Rechtsanwältin (verliehen in der Bundesrepublik Deutschland)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Zuständige Kammer:</p>
                    <p className="text-gray-600">[Platzhalter: Rechtsanwaltskammer]</p>
                    <p className="text-gray-600">[Platzhalter: Adresse der Kammer]</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Es gelten folgende berufsrechtliche Regelungen:</p>
                    <ul className="text-gray-600 list-disc list-inside mt-2">
                      <li>Bundesrechtsanwaltsordnung (BRAO)</li>
                      <li>Berufsordnung für Rechtsanwälte (BORA)</li>
                      <li>Fachanwaltsordnung (FAO)</li>
                      <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
                      <li>Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE)</li>
                    </ul>
                    <p className="text-gray-600 mt-2">
                      Die Regelungen können eingesehen werden unter:{' '}
                      <a
                        href="https://www.brak.de/fuer-anwaelte/berufsrecht/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                        style={{ color: 'var(--primary)' }}
                      >
                        www.brak.de
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Umsatzsteuer-ID */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  Umsatzsteuer-ID
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
                  </p>
                  <p className="text-gray-600">[Platzhalter: DE XXX XXX XXX]</p>
                </div>
              </div>

              {/* Berufshaftpflichtversicherung */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  Berufshaftpflichtversicherung
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600">[Platzhalter: Name der Versicherung]</p>
                  <p className="text-gray-600">[Platzhalter: Adresse der Versicherung]</p>
                  <p className="text-gray-600 mt-2">
                    Räumlicher Geltungsbereich: [Platzhalter: z.B. Deutschland / EU / weltweit]
                  </p>
                </div>
              </div>

              {/* Streitschlichtung */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  Streitschlichtung
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600 mb-4">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                    <a
                      href="https://ec.europa.eu/consumers/odr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                      style={{ color: 'var(--primary)' }}
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p className="text-gray-600 mb-4">
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>
                  <p className="text-gray-600">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                    vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </div>

              {/* Haftungshinweis */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  Haftung für Inhalte
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600 mb-4">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
                    auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
                    §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                    übermittelte oder gespeicherte fremde Informationen zu überwachen oder
                    nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p className="text-gray-600">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
                    nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
                    Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                    Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                    Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>

              {/* Haftung für Links */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  Haftung für Links
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren
                    Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
                    Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                    Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
                    verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
                    auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
                    Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                    Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                    einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                    Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>
              </div>

              {/* Urheberrecht */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  Urheberrecht
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                    Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                    Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                    jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
                    sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
                    werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                    Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                    Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                    entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                    werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
