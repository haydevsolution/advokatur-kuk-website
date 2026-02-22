'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SplitText from './SplitText';

// Professionelle Anwaltsbilder für die Diashow
const heroImages = [
  {
    url: '/images/Hero1.png',
    alt: 'Advokatur KuK',
  },
  {
    url: '/images/Hero2.png',
    alt: 'Rechtsberatung',
  },
  {
    url: '/images/Hero3.png',
    alt: 'Professionelle Beratung',
  },
  {
    url: '/images/Hero4.png',
    alt: 'Kanzlei',
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
    <section className="flex items-center justify-center relative overflow-hidden" style={{ minHeight: 'calc(100vh - 5rem)' }}>
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
            className="object-cover object-top"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Transparentes Marineblau Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(15, 45, 82, 0.75)' }}
      ></div>

      {/* Zusätzlicher dunkler Gradient für bessere Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>

      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        <div className="max-w-2xl w-full flex flex-col items-center text-center">
          {/* Gold Accent Line */}
          <div
            className="w-20 h-0.5 mb-10"
            style={{ backgroundColor: 'var(--gold)' }}
          ></div>

          {/* Begrüßung */}
          <div className="mb-8" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <SplitText
              text="Welcome to"
              tag="h1"
              delay={50}
              duration={1}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="center"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg"
            />
            <div style={{ color: 'var(--gold)' }}>
              <SplitText
                text="Advokatur KuK"
                tag="h1"
                delay={50}
                duration={1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 50, rotateX: -90 }}
                to={{ opacity: 1, y: 0, rotateX: 0 }}
                textAlign="center"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg"
              />
            </div>
          </div>

          <div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
            <SplitText
              text="The Swiss expert with in-depth experience, and a name you can trust."
              tag="p"
              delay={30}
              duration={0.7}
              ease="power2.out"
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="center"
              className="text-lg md:text-xl text-gray-200 font-light max-w-3xl drop-shadow-md leading-relaxed"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center" style={{ marginTop: '1rem' }}>
            <Link href="/kontakt" className="btn-gold">
              Get in Touch
            </Link>
            <Link href="/services" className="btn-outline">
              Our Services
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
