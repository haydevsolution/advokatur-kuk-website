'use client';


export default function DatenschutzPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{ 
        paddingTop: '9rem', 
        paddingBottom: '5rem', 
        textAlign: 'center', 
        color: 'white',
        position: 'relative' as const,
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0a1f3d 0%, #0f2d52 50%, #1a4d7a 100%)'
      }}>
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '40%',
          height: '80%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-5%',
          width: '35%',
          height: '70%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700, 
            letterSpacing: '-0.02em',
            lineHeight: '1.2',
            background: 'linear-gradient(135deg, #ffffff 0%, #D4AF37 50%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1.5rem',
            filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.3))'
          }}>
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Datenschutz Content */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* Einleitung */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  1. Datenschutz auf einen Blick
                </h2>
                <div className="gold-border">
                  <h3 className="font-semibold text-gray-700 mb-2">Allgemeine Hinweise</h3>
                  <p className="text-gray-600 mb-4">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                    personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                    Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
                    werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
                    unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>
                  <h3 className="font-semibold text-gray-700 mb-2">Datenerfassung auf dieser Website</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                  </p>
                  <p className="text-gray-600 mb-4">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                    Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Wie erfassen wir Ihre Daten?</strong>
                  </p>
                  <p className="text-gray-600">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
                    Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.
                  </p>
                </div>
              </div>

              {/* Verantwortliche Stelle */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  2. Verantwortliche Stelle
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600 mb-2">
                    Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <p className="text-gray-600">Advokatur-KuK</p>
                  <p className="text-gray-600">[Name der Anwältin]</p>
                  <p className="text-gray-600">Musterstraße 123</p>
                  <p className="text-gray-600">12345 Musterstadt</p>
                  <p className="text-gray-600 mt-2">Telefon: +49 123 456789</p>
                  <p className="text-gray-600">E-Mail: info@advokatur-kuk.de</p>
                </div>
              </div>

              {/* Hosting */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  3. Hosting
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600">
                    [Platzhalter: Informationen zum Hosting-Anbieter, Serverstandort und
                    entsprechende Datenschutzhinweise des Hosting-Providers einfügen.]
                  </p>
                </div>
              </div>

              {/* Allgemeine Hinweise */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  4. Allgemeine Hinweise und Pflichtinformationen
                </h2>
                <div className="gold-border space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Datenschutz</h3>
                    <p className="text-gray-600">
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                      Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
                      gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Hinweis zur verantwortlichen Stelle</h3>
                    <p className="text-gray-600">
                      Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist im
                      Abschnitt „Verantwortliche Stelle" genannt. Verantwortliche Stelle ist die
                      natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
                      die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                    <p className="text-gray-600">
                      Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
                      möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.
                      Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der
                      bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rechte der Betroffenen */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  5. Ihre Rechte
                </h2>
                <div className="gold-border space-y-4">
                  <p className="text-gray-600">
                    Sie haben folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
                  </p>
                  <ul className="text-gray-600 list-disc list-inside space-y-2">
                    <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                    <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                    <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                    <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                    <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
                  </ul>
                  <p className="text-gray-600">
                    Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht
                    verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt
                    worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
                  </p>
                </div>
              </div>

              {/* Datenerfassung auf der Website */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  6. Datenerfassung auf dieser Website
                </h2>
                <div className="gold-border space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Cookies</h3>
                    <p className="text-gray-600">
                      Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine
                      Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder
                      vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft
                      (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach
                      Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem
                      Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung
                      durch Ihren Webbrowser erfolgt.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Server-Log-Dateien</h3>
                    <p className="text-gray-600 mb-2">
                      Der Provider der Seiten erhebt und speichert automatisch Informationen in so
                      genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                    </p>
                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                      <li>Browsertyp und Browserversion</li>
                      <li>Verwendetes Betriebssystem</li>
                      <li>Referrer URL</li>
                      <li>Hostname des zugreifenden Rechners</li>
                      <li>Uhrzeit der Serveranfrage</li>
                      <li>IP-Adresse</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Kontaktformular</h3>
                    <p className="text-gray-600">
                      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                      aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
                      zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
                      gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                      Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
                    </p>
                  </div>
                </div>
              </div>

              {/* Anwaltliche Verschwiegenheit */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  7. Anwaltliche Verschwiegenheit
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600">
                    Als Rechtsanwaltskanzlei unterliegen wir der berufsrechtlichen Verschwiegenheitspflicht
                    gemäß § 43a BRAO. Alle Informationen, die uns im Rahmen eines Mandats anvertraut werden,
                    werden streng vertraulich behandelt und nicht an Dritte weitergegeben, es sei denn,
                    Sie haben uns ausdrücklich dazu ermächtigt oder es besteht eine gesetzliche Pflicht
                    zur Offenbarung.
                  </p>
                </div>
              </div>

              {/* Aktualität */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  8. Aktualität und Änderung dieser Datenschutzerklärung
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600">
                    Diese Datenschutzerklärung ist aktuell gültig und hat den Stand [Platzhalter: Datum].
                    Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund
                    geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig
                    werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle
                    Datenschutzerklärung kann jederzeit auf dieser Website abgerufen werden.
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
