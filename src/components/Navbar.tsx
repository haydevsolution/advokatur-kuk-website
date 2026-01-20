'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Dispute Resolution', href: '/services#dispute-resolution' },
      { name: 'Legal Advice', href: '/services#legal-advice' },
      { name: 'Compliance', href: '/services#compliance' }
    ]
  },
  { name: 'About us', href: '/about-us' },
  { 
    name: 'References', 
    href: '/references',
    dropdown: [
      { name: 'In-house Experience', href: '/references#in-house-experience' },
      { name: 'ADR experience', href: '/references#adr-experience' },
      { name: 'Cases', href: '/references#cases' },
      { name: 'Publications', href: '/references#publications' }
    ]
  },
  { name: 'Contact', href: '/kontakt' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleMouseEnter = (itemName: string) => {
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav 
      className="shadow-sm fixed w-full top-0 z-50" 
      style={{ 
        backgroundColor: 'rgba(10, 31, 61, 0.75)',
        backdropFilter: 'blur(10px)',
        borderBottom: '2px solid rgba(255, 255, 255, 0.5)',
        borderBottomLeftRadius: '16px',
        borderBottomRightRadius: '16px',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out'
      }}
    >
      <div className="max-w-7xl mx-auto px-10 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Left: Logo */}
          <Link href="/" className="hidden md:flex items-center group transition-transform duration-300 hover:scale-105 w-[240px]" style={{ backgroundColor: 'transparent', marginLeft: '38px' }}>
            <Image
              src="/images/Logo-KuK(1).png"
              alt="Advokatur-KuK Logo"
              width={180}
              height={60}
              className="h-14 w-auto"
              style={{ backgroundColor: 'transparent' }}
              priority
            />
          </Link>

          {/* Mobile: Hamburger Button (left) */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 transition-all duration-300 ease-in-out origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
                style={{ backgroundColor: '#ffffff' }}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ backgroundColor: '#ffffff' }}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ease-in-out origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
                style={{ backgroundColor: '#ffffff' }}
              />
            </div>
          </button>

          {/* Mobile: Logo (center) */}
          <Link href="/" className="md:hidden flex items-center z-50" style={{ backgroundColor: 'transparent' }}>
            <Image
              src="/images/Logo-KuK(1).png"
              alt="Advokatur-KuK Logo"
              width={140}
              height={48}
              className="h-10 w-auto"
              style={{ backgroundColor: 'transparent' }}
              priority
            />
          </Link>

          {/* Center: Navigation Links - Desktop */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.dropdown && item.dropdown.some(sub => pathname === sub.href));
                return (
                  <div 
                    key={item.name} 
                    className="relative group"
                    onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className={`nav-link-styled flex items-center gap-1 ${isActive ? 'nav-link-active' : ''}`}
                    >
                      {item.name}
                      {item.dropdown && (
                        <svg 
                          className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {item.dropdown && openDropdown === item.name && (
                      <div 
                        className="absolute top-full left-0 mt-3 w-72 bg-white rounded-2xl overflow-hidden"
                        style={{ 
                          zIndex: 100,
                          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                          border: '1px solid rgba(212, 175, 55, 0.2)',
                          animation: 'dropdownFadeIn 0.3s ease-out',
                          transformOrigin: 'top'
                        }}
                      >
                        <style>{`
                          @keyframes dropdownFadeIn {
                            from {
                              opacity: 0;
                              transform: translateY(-10px) scale(0.95);
                            }
                            to {
                              opacity: 1;
                              transform: translateY(0) scale(1);
                            }
                          }
                        `}</style>
                        
                        <div style={{ 
                          padding: '1rem 0',
                          background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)'
                        }}>
                          {item.dropdown.map((subItem, index) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center gap-4 px-6 py-4 text-base font-medium transition-all duration-300"
                              style={{ 
                                color: pathname === subItem.href ? 'var(--gold)' : 'var(--primary)',
                                backgroundColor: pathname === subItem.href ? 'rgba(212, 175, 55, 0.08)' : 'transparent',
                                borderLeft: pathname === subItem.href ? '4px solid var(--gold)' : '4px solid transparent',
                                position: 'relative' as const,
                                marginBottom: index < item.dropdown.length - 1 ? '0.25rem' : '0'
                              }}
                              onMouseEnter={(e) => {
                                if (pathname !== subItem.href) {
                                  e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.06)';
                                  e.currentTarget.style.color = 'var(--gold)';
                                  e.currentTarget.style.borderLeft = '4px solid var(--gold)';
                                  e.currentTarget.style.transform = 'translateX(4px)';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (pathname !== subItem.href) {
                                  e.currentTarget.style.backgroundColor = 'transparent';
                                  e.currentTarget.style.color = 'var(--primary)';
                                  e.currentTarget.style.borderLeft = '4px solid transparent';
                                  e.currentTarget.style.transform = 'translateX(0)';
                                }
                              }}
                            >
                              <svg 
                                className="w-5 h-5 flex-shrink-0" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                style={{ 
                                  color: pathname === subItem.href ? 'var(--gold)' : '#9ca3af',
                                  transition: 'all 0.3s ease'
                                }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                              <span style={{ letterSpacing: '0.02em' }}>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Spacer (invisible) - keeps layout symmetric */}
          <div className="hidden md:block w-[240px]"></div>

          {/* Mobile: Spacer */}
          <div className="md:hidden w-10"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ 
          background: 'linear-gradient(135deg, #0a1f3d 0%, #0f2d52 50%, #1a4d7a 100%)',
          paddingTop: '5rem'
        }}
      >
        <div className="flex flex-col px-6 py-8 space-y-2">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="block py-3 text-xl font-semibold text-white hover:text-yellow-400 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="pl-4 space-y-2 mt-2">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block py-2 text-base text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
