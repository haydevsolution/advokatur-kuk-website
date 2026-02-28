'use client';

import Link from 'next/link';

export default function DatenschutzPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{ 
        paddingTop: '3.5rem', 
        paddingBottom: '3.5rem', 
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

      {/* Privacy Policy Content */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* Data protection at a glance */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  1. Data protection at a glance
                </h2>
                <div className="gold-border">
                  <h3 className="font-semibold text-gray-700 mb-2">General information</h3>
                  <p className="text-gray-600 mb-4">
                    The following information provides a simple overview of what happens to your personal data 
                    when you visit this website. Personal data is any data that can be used to identify you 
                    personally. For detailed information on the subject of data protection, please refer to 
                    our privacy policy listed below this text.
                  </p>
                  <h3 className="font-semibold text-gray-700 mb-2">Data collection on this website</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Who is responsible for data collection on this website?</strong>
                  </p>
                  <p className="text-gray-600 mb-4">
                    Data processing on this website is carried out by the website operator. Their contact 
                    details can be found in the legal notice on this website.
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>How do we collect your data?</strong>
                  </p>
                  <p className="text-gray-600">
                    On the one hand, your data is collected when you provide it to us. This may be data that 
                    you enter in a contact form, for example. Other data is collected automatically by our 
                    IT systems when you visit the website.
                  </p>
                </div>
              </div>

              {/* Responsible body */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  2. Responsible body
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600 mb-2">
                    The body responsible for data processing on this website is:
                  </p>
                  <p className="text-gray-600">Advokatur KuK AG (in Gründung)</p>
                  <p className="text-gray-600">Katalin Nemeth</p>
                  <p className="text-gray-600">Hauptstrasse 77</p>
                  <p className="text-gray-600">6260 Reiden, Switzerland</p>
                  <p className="text-gray-600 mt-4">Please use our <Link href="/kontakt" className="font-semibold hover:underline" style={{ color: 'var(--gold)' }}>contact form</Link> for contact requests.</p>
                </div>
              </div>

              {/* Hosting */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  3. Hosting
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600">
                    [Placeholder: Insert information about the hosting provider, server location, and 
                    relevant privacy policy of the hosting provider.]
                  </p>
                </div>
              </div>

              {/* General information and mandatory information */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  4. General information and mandatory information
                </h2>
                <div className="gold-border space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Data protection</h3>
                    <p className="text-gray-600">
                      The operators of these pages take the protection of your personal data very seriously. 
                      We treat your personal data confidentially and in accordance with the statutory data 
                      protection regulations and this privacy policy.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Information about the responsible body</h3>
                    <p className="text-gray-600">
                      The responsible body for data processing on this website is named in the section 
                      "Responsible body". The responsible body is the natural or legal person who, alone 
                      or jointly with others, decides on the purposes and means of processing personal data.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Revocation of your consent to data processing</h3>
                    <p className="text-gray-600">
                      Many data processing operations are only possible with your express consent. You can 
                      revoke any consent you have already given at any time. To do so, simply send us an 
                      informal email. The legality of the data processing carried out until the revocation 
                      remains unaffected by the revocation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Your rights */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  5. Your rights
                </h2>
                <div className="gold-border space-y-4">
                  <p className="text-gray-600">
                    You have the following rights with regard to your personal data:
                  </p>
                  <ul className="text-gray-600 list-disc list-inside space-y-2">
                    <li>Right to information (Art. 15 GDPR)</li>
                    <li>Right to correction (Art. 16 GDPR)</li>
                    <li>Right to deletion (Art. 17 GDPR)</li>
                    <li>Right to restriction of processing (Art. 18 GDPR)</li>
                    <li>Right to data portability (Art. 20 GDPR)</li>
                    <li>Right to object (Art. 21 GDPR)</li>
                  </ul>
                  <p className="text-gray-600">
                    If you believe that the processing of your data violates data protection law or that 
                    your data protection rights have been violated in any other way, you can lodge a 
                    complaint with the supervisory authority.
                  </p>
                </div>
              </div>

              {/* Data collection on this website */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  6. Data collection on this website
                </h2>
                <div className="gold-border space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Cookies</h3>
                    <p className="text-gray-600">
                      Our websites use so-called "cookies." Cookies are small text files and do not cause 
                      any damage to your device. They are either stored temporarily for the duration of a 
                      session (session cookies) or permanently (permanent cookies) on your device. Session 
                      cookies are automatically deleted at the end of your visit. Permanent cookies remain 
                      stored on your device until you delete them yourself or your web browser automatically 
                      deletes them.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Server log files</h3>
                    <p className="text-gray-600 mb-2">
                      The provider of the pages automatically collects and stores information in so-called 
                      server log files, which your browser automatically transmits to us. These are:
                    </p>
                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                      <li>Browser type and browser version</li>
                      <li>Operating system used</li>
                      <li>Referrer URL</li>
                      <li>Host name of the accessing computer</li>
                      <li>Time of the server request</li>
                      <li>IP address</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Contact form</h3>
                    <p className="text-gray-600">
                      If you send us inquiries via the contact form, your details from the inquiry form, 
                      including the contact details you provided there, will be stored by us for the purpose 
                      of processing the inquiry and in case of follow-up questions. We will not pass on this 
                      data without your consent. The processing of this data is based on Art. 6 (1) lit. b GDPR.
                    </p>
                  </div>
                </div>
              </div>

              {/* Attorney-client privilege */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  7. Attorney-client privilege
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600">
                    As a law firm, we are subject to professional confidentiality obligations in accordance 
                    with § 43a BRAO (Federal Lawyers' Act). All information entrusted to us within the scope 
                    of a mandate will be treated as strictly confidential and will not be disclosed to third 
                    parties unless you have expressly authorized us to do so or there is a legal obligation 
                    to disclose it.
                  </p>
                </div>
              </div>

              {/* Up-to-dateness and changes */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  8. Up-to-dateness and changes to this privacy policy
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600">
                    This privacy policy is currently valid and was last updated on January 2026. Due to the 
                    further development of our website and the services offered on it, or due to changes in 
                    legal or regulatory requirements, it may become necessary to amend this privacy policy. 
                    The current privacy policy can be accessed at any time on this website.
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
