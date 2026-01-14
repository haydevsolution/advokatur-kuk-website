'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Professionelle Anwaltsbilder für die Diashow
const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80',
    alt: 'Anwalt bei der Arbeit',
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80',
    alt: 'Rechtsberatung im Büro',
  },
  {
    url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80',
    alt: 'Professionelle Beratung',
  },
  {
    url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80',
    alt: 'Vertragsunterzeichnung',
  },
  {
    url: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1920&q=80',
    alt: 'Rechtliche Dokumente',
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Wechselt alle 5 Sekunden

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Diashow Hintergrund */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Transparentes Lila Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(75, 35, 95, 0.7)' }}
      ></div>

      {/* Zusätzlicher dunkler Gradient für bessere Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Gold Accent Line */}
          <div
            className="w-24 h-1 mb-8"
            style={{ backgroundColor: 'var(--gold)' }}
          ></div>

          {/* Begrüßung */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Willkommen bei
            <br />
            <span style={{ color: 'var(--gold)' }}>Advokatur-KuK</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-6 drop-shadow-md">
            Kompetente Rechtsberatung mit persönlicher Betreuung
          </p>

          <p className="text-lg text-gray-200 mb-10 max-w-xl drop-shadow-md leading-relaxed">
            Wir stehen Ihnen mit Erfahrung, Engagement und Expertise zur Seite. Vertrauen Sie auf unsere langjährige Erfahrung in allen Rechtsfragen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/kontakt" className="btn-gold">
              Kontakt aufnehmen
            </Link>
            <Link href="/rechtsgebiete" className="btn-outline">
              Unsere Rechtsgebiete
            </Link>
          </div>
        </div>
      </div>

      {/* Diashow Indikatoren */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Bild ${index + 1} anzeigen`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg
          className="w-8 h-8 text-white opacity-70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
