'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Footer Section */}
      <div style={{ backgroundColor: '#ffffff', color: 'var(--primary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          {/* CTA in Footer */}
          <div style={{ 
            marginBottom: '4rem',
            padding: '3.5rem 2.5rem', 
            background: 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)',
            borderRadius: '16px', 
            textAlign: 'center',
            border: '2px solid var(--gold)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Dezenter Gold-Akzent oben */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '4px',
              backgroundColor: 'var(--gold)',
              borderRadius: '0 0 4px 4px'
            }}></div>
            
            <h3 style={{ 
              fontSize: '1.875rem', 
              fontWeight: 'bold', 
              marginBottom: '1.25rem', 
              color: 'var(--primary)',
              letterSpacing: '-0.02em'
            }}>
              Do you have legal questions?
            </h3>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#6b7280', 
              marginBottom: '2rem', 
              maxWidth: '36rem', 
              margin: '0 auto 2.5rem auto', 
              lineHeight: '1.75',
              fontWeight: '400'
            }}>
              Contact us for a non-binding initial consultation. We are here for you and provide competent advice on all legal matters.
            </p>
            <Link 
              href="/kontakt" 
              className="footer-cta-button"
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.125rem 3rem',
                fontSize: '1.125rem',
                fontWeight: '600',
                borderRadius: '9999px',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                backgroundColor: 'var(--gold)',
                color: 'var(--primary)',
                boxShadow: '0 4px 14px rgba(212, 175, 55, 0.35)',
                border: 'none'
              }}
            >
              Contact us now
            </Link>
            <style jsx>{`
              .footer-cta-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(212, 175, 55, 0.45);
              }
            `}</style>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', justifyItems: 'center', textAlign: 'center' }}>
            {/* Kanzlei Info */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--gold)' }}>
                Advokatur-KuK
              </h3>
              <p style={{ color: '#4b5563', marginBottom: '1.5rem', lineHeight: '1.625' }}>
                Your competent legal advice for all legal matters.
              </p>
              <div style={{ color: '#4b5563' }}>
                <p style={{ marginBottom: '0.5rem' }}>Tel: +49 123 456789</p>
                <p>Email: info@advokatur-kuk.de</p>
              </div>
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--gold)' }}>
                Navigation
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>
                  <Link
                    href="/services"
                    style={{ color: '#4b5563', textDecoration: 'none', transition: 'all 0.3s' }}
                    className="hover:text-primary hover:underline"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    style={{ color: '#4b5563', textDecoration: 'none', transition: 'all 0.3s' }}
                    className="hover:text-primary hover:underline"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/references"
                    style={{ color: '#4b5563', textDecoration: 'none', transition: 'all 0.3s' }}
                    className="hover:text-primary hover:underline"
                  >
                    References
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakt"
                    style={{ color: '#4b5563', textDecoration: 'none', transition: 'all 0.3s' }}
                    className="hover:text-primary hover:underline"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--gold)' }}>
                Legal
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>
                  <Link
                    href="/impressum"
                    style={{ color: '#4b5563', textDecoration: 'none', transition: 'all 0.3s' }}
                    className="hover:text-primary hover:underline"
                  >
                    Imprint
                  </Link>
                </li>
                <li>
                  <Link
                    href="/datenschutz"
                    style={{ color: '#4b5563', textDecoration: 'none', transition: 'all 0.3s' }}
                    className="hover:text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)', marginTop: '4rem', paddingTop: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '1rem', textAlign: 'center', flexWrap: 'wrap' }}>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>
                © {currentYear} Advokatur-KuK. All rights reserved.
              </p>
              <span style={{ color: '#6b7280' }}>•</span>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>
                Here for you with care.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
