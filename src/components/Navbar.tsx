'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Kanzlei', href: '/kanzlei' },
  { name: 'Rechtsgebiete', href: '/rechtsgebiete' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Minimal Hamburger Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 transition-all duration-300 ease-in-out origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
                style={{ backgroundColor: mobileMenuOpen ? 'white' : 'var(--primary)' }}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ backgroundColor: 'var(--primary)' }}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ease-in-out origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
                style={{ backgroundColor: mobileMenuOpen ? 'white' : 'var(--primary)' }}
              />
            </div>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <span
              className="text-xl font-bold tracking-wide transition-colors duration-300"
              style={{ color: mobileMenuOpen ? 'white' : 'var(--primary)' }}
            >
              Advokatur-KuK
            </span>
          </Link>
        </div>
      </div>

      {/* Minimal Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 transition-all duration-400 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--primary)' }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen">
          <nav className="flex flex-col items-center gap-12">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-2xl tracking-wide text-white transition-all duration-300 hover:opacity-60 ${
                  mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 80}ms` : '0ms',
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

        </div>

        {/* Button ganz unten */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: mobileMenuOpen ? '350ms' : '0ms' }}
        >
          <Link
            href="/kontakt"
            className="btn-gold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </nav>
  );
}
