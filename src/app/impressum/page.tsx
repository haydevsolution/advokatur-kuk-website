'use client';

import Link from 'next/link';

export default function ImpressumPage() {
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
            Imprint
          </h1>
        </div>
      </section>

      {/* Impressum Content */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* Company Information */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  Company Information
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600">Advokatur KuK AG (in Gründung)</p>
                  <p className="text-gray-600">Katalin Németh</p>
                  <p className="text-gray-600">Hauptstrasse 77</p>
                  <p className="text-gray-600">6260 Reiden, Switzerland</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  Contact
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600">Please use our <Link href="/kontakt" className="font-semibold hover:underline" style={{ color: 'var(--gold)' }}>contact form</Link> to get in touch with us.</p>
                </div>
              </div>

              {/* Professional Title and Regulations */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  Professional Title and Regulatory Framework
                </h2>
                <div className="gold-border space-y-4">
                  <div>
                    <p className="font-semibold text-gray-700">Professional Title:</p>
                    <p className="text-gray-600">Attorney-at-Law (admitted in Switzerland)</p>
                    <p className="text-gray-600">Esquire (admitted in California, passive)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Competent Bar Association:</p>
                    <p className="text-gray-600">Swiss Bar Association</p>
                    <p className="text-gray-600">California State Bar</p>
                  </div>
                </div>
              </div>

              {/* Liability for Content */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  Liability for Content
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600 mb-4">
                    As a service provider, we are responsible for our own content on these
                    pages in accordance with general legislation. However, we are not obliged
                    to monitor transmitted or stored third-party information or to investigate
                    circumstances that indicate illegal activity.
                  </p>
                  <p className="text-gray-600">
                    Obligations to remove or block the use of information under general law
                    remain unaffected. However, liability in this regard is only possible from
                    the point in time at which a concrete infringement of the law becomes known.
                    If we become aware of any such infringements, we will remove the relevant
                    content immediately.
                  </p>
                </div>
              </div>

              {/* Liability for Links */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  Liability for Links
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600">
                    Our website contains links to external third-party websites over whose
                    content we have no control. Therefore, we cannot accept any liability for
                    this third-party content. The respective provider or operator of the linked
                    pages is always responsible for the content of those pages. The linked pages
                    were checked for possible legal violations at the time of linking. No illegal
                    content was discernible at the time of linking. However, permanent monitoring
                    of the content of linked pages is not reasonable without concrete evidence of
                    a legal violation. If we become aware of any legal infringements, we will
                    remove such links immediately.
                  </p>
                </div>
              </div>

              {/* Copyright */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  Copyright
                </h2>
                <div className="gold-border">
                  <p className="text-gray-600">
                    The content and works created by the site operators on these pages are
                    subject to copyright law. Reproduction, editing, distribution, and any
                    form of use beyond the limits of copyright law require the written consent
                    of the respective author or creator. Downloads and copies of this site are
                    only permitted for private, non-commercial use. Where content on this site
                    was not created by the operator, the copyrights of third parties are
                    respected. In particular, third-party content is identified as such. Should
                    you nevertheless become aware of a copyright infringement, please notify us
                    accordingly. If we become aware of any infringements, we will remove such
                    content immediately.
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
