'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Nur nach oben scrollen wenn KEIN Hash in der URL ist
    // Bei Hash-Links (#dispute-resolution, etc.) soll der Browser zum Anchor scrollen
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    } else {
      // Bei Hash-Links: zum Element scrollen
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname]);

  // Beim ersten Laden: prüfe auch auf Hash
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
