'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showMinimized, setShowMinimized] = useState(false);

  useEffect(() => {
    // Prüfe ob Cookie-Zustimmung bereits gegeben wurde
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'accepted') {
      setShowMinimized(true);
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    setShowMinimized(true);
  };

  const openBanner = () => {
    setShowMinimized(false);
    setShowBanner(true);
  };

  return (
    <>
      {/* Vollständiger Cookie Banner */}
      {showBanner && (
        <div className="cookie-banner fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6" style={{ backgroundColor: 'var(--primary)' }}>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-2">
                  Cookie-Hinweis
                </h3>
                <p className="text-gray-300 text-sm">
                  Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
                  Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.
                  Weitere Informationen finden Sie in unserer{' '}
                  <Link href="/datenschutz" className="underline hover:text-white" style={{ color: 'var(--gold)' }}>
                    Datenschutzerklärung
                  </Link>.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={acceptCookies}
                  className="btn-gold px-6 py-2 font-semibold"
                >
                  Akzeptieren
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Minimierter Cookie Button */}
      {showMinimized && !showBanner && (
        <button
          onClick={openBanner}
          className="fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-lg transition-all hover:scale-110"
          style={{ backgroundColor: 'var(--primary)' }}
          aria-label="Cookie-Einstellungen öffnen"
          title="Cookie-Einstellungen"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </button>
      )}
    </>
  );
}
