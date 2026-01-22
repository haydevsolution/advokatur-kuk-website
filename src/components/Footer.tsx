'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer>
      {/* Footer Section */}
      <div style={{ backgroundColor: '#ffffff', color: 'var(--primary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          {/* CTA in Footer - nur anzeigen wenn NICHT auf Kontaktseite */}
          {pathname !== '/kontakt' && (
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
          )}

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6rem' }}>
            {/* Kanzlei Info */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: 'var(--gold)' }}>
                Advokatur KuK AG (in Gründung)
              </h3>
              <div style={{ color: '#4b5563', lineHeight: '1.6' }}>
                <p style={{ fontWeight: '600', marginBottom: '0.25rem', color: 'var(--primary)' }}>Address:</p>
                <p style={{ marginBottom: '0.25rem' }}>Hauptstrasse 77</p>
                <p>6260 Reiden, Switzerland</p>
              </div>
            </div>

            {/* Legal */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: 'var(--gold)' }}>
                Legal
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
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
          <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)', marginTop: '2rem', paddingTop: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '1rem', textAlign: 'center', flexWrap: 'wrap' }}>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>
                © {currentYear} Advokatur KuK AG (in Gründung). All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
