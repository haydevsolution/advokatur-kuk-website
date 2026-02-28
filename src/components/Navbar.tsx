'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

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
  { name: 'About KuK', href: '/about-us' },
  { 
    name: 'References', 
    href: '/references',
    dropdown: [
      { name: 'Cases', href: '/references#cases' },
      { name: 'Publications', href: '/references#publications' }
    ]
  },
  { name: 'Contact', href: '/kontakt' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollYRef = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setMobileDropdown(null);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const prevScrollY = lastScrollYRef.current;

          if (currentScrollY <= 64) {
            setIsScrolled(false);
            setIsVisible(true);
          } else if (currentScrollY > prevScrollY) {
            setIsScrolled(true);
            setIsVisible(false);
          } else {
            setIsScrolled(true);
            setIsVisible(true);
          }

          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (itemName: string) => {
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      <div style={{ height: '64px', backgroundColor: 'rgb(10, 31, 61)' }} />
      <nav
        className="shadow-sm w-full fixed top-0"
        style={{
          backgroundColor: isScrolled ? 'rgba(10, 31, 61, 0.75)' : 'rgba(10, 31, 61, 0.95)',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          borderBottomLeftRadius: isScrolled ? '16px' : '0',
          borderBottomRightRadius: isScrolled ? '16px' : '0',
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease-in-out, background-color 0.3s ease',
          zIndex: 50
        }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex items-center justify-between h-16">

            {/* Desktop: Logo */}
            <Link href="/" className="hidden md:flex items-center group transition-transform duration-300 hover:scale-105 w-[240px]" style={{ backgroundColor: 'transparent', marginLeft: '38px' }}>
              <Image
                src="/images/LOGO-Photoroom(1).png"
                alt="Advokatur KuK Logo"
                width={180}
                height={60}
                className="h-14 w-auto"
                style={{ backgroundColor: 'transparent' }}
                priority
              />
            </Link>

            {/* Mobile: Hamburger Button (left) */}
            <button
              type="button"
              className="md:hidden relative flex items-center justify-center"
              style={{ 
                width: '60px', 
                height: '60px', 
                zIndex: 100001,
                cursor: 'pointer',
                border: 'none',
                background: 'transparent'
              }}
              onClick={() => {
                console.log('CLICK! Changing from', mobileMenuOpen, 'to', !mobileMenuOpen);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
            >
              <div style={{ width: '30px', height: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <span style={{ 
                  display: 'block', 
                  height: '3px', 
                  backgroundColor: mobileMenuOpen ? '#0f2d52' : 'white',
                  borderRadius: '2px',
                  transition: 'all 0.3s',
                  transform: mobileMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none'
                }} />
                <span style={{ 
                  display: 'block', 
                  height: '3px', 
                  backgroundColor: mobileMenuOpen ? '#0f2d52' : 'white',
                  borderRadius: '2px',
                  transition: 'all 0.3s',
                  opacity: mobileMenuOpen ? 0 : 1
                }} />
                <span style={{ 
                  display: 'block', 
                  height: '3px', 
                  backgroundColor: mobileMenuOpen ? '#0f2d52' : 'white',
                  borderRadius: '2px',
                  transition: 'all 0.3s',
                  transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
                }} />
              </div>
            </button>

            {/* Mobile: Logo (center) */}
            <Link 
              href="/" 
              className="md:hidden flex items-center"
              style={{ 
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 100000
              }}
            >
              <Image
                src="/images/LOGO-Photoroom(1).png"
                alt="Advokatur KuK Logo"
                width={140}
                height={48}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop: Navigation Links */}
            <div className="hidden md:flex items-center justify-center" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
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

            {/* Right: Spacer */}
            <div className="hidden md:block w-[240px]"></div>
            <div className="md:hidden w-10"></div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU - COMPLETELY OUTSIDE NAVBAR */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(10, 31, 61, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 100000,
            paddingTop: '100px',
            overflowY: 'auto'
          }}
        >
          <div style={{ padding: '30px 20px' }}>
            
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                width: '50px',
                height: '50px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                zIndex: 100001
              }}
            >
              <div style={{ position: 'relative', width: '30px', height: '30px' }}>
                <span style={{ 
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  width: '100%',
                  height: '3px',
                  backgroundColor: '#ffffff',
                  transform: 'rotate(45deg)'
                }} />
                <span style={{ 
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  width: '100%',
                  height: '3px',
                  backgroundColor: '#ffffff',
                  transform: 'rotate(-45deg)'
                }} />
              </div>
            </button>

            {/* Logo */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <Image
                src="/images/LOGO-Photoroom(1).png"
                alt="Advokatur KuK Logo"
                width={160}
                height={55}
                style={{ margin: '0 auto' }}
                priority
              />
            </div>

            {/* Menu Items */}
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
              
              {/* Services */}
              <div style={{ marginBottom: '25px' }}>
                <div 
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '15px 0',
                    borderBottom: '2px solid rgba(212, 175, 55, 0.3)',
                    cursor: 'pointer'
                  }}
                  onClick={() => setMobileDropdown(mobileDropdown === 'services' ? null : 'services')}
                >
                  <Link 
                    href="/services" 
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileMenuOpen(false);
                    }}
                    style={{ 
                      fontSize: '22px',
                      fontWeight: 'bold',
                      color: 'var(--gold)',
                      textDecoration: 'none'
                    }}
                  >
                    Services
                  </Link>
                  <svg 
                    style={{ 
                      width: '24px', 
                      height: '24px', 
                      color: 'var(--gold)',
                      transition: 'transform 0.3s ease',
                      transform: mobileDropdown === 'services' ? 'rotate(180deg)' : 'rotate(0deg)'
                    }} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div style={{ 
                  paddingLeft: '20px', 
                  marginTop: '10px',
                  maxHeight: mobileDropdown === 'services' ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease'
                }}>
                  <Link href="/services#dispute-resolution" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 0', fontSize: '18px', color: '#d1d5db', textDecoration: 'none' }}>
                    → Dispute Resolution
                  </Link>
                  <Link href="/services#legal-advice" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 0', fontSize: '18px', color: '#d1d5db', textDecoration: 'none' }}>
                    → Legal Advice
                  </Link>
                  <Link href="/services#compliance" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 0', fontSize: '18px', color: '#d1d5db', textDecoration: 'none' }}>
                    → Compliance
                  </Link>
                </div>
              </div>

              {/* About us */}
              <div style={{ marginBottom: '25px' }}>
                <Link 
                  href="/about-us" 
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ 
                    display: 'block',
                    fontSize: '22px',
                    fontWeight: 'bold',
                    color: 'var(--gold)',
                    textDecoration: 'none',
                    padding: '15px 0',
                    borderBottom: '2px solid rgba(212, 175, 55, 0.3)'
                  }}
                >
                  About KuK
                </Link>
              </div>

              {/* References */}
              <div style={{ marginBottom: '25px' }}>
                <div 
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '15px 0',
                    borderBottom: '2px solid rgba(212, 175, 55, 0.3)',
                    cursor: 'pointer'
                  }}
                  onClick={() => setMobileDropdown(mobileDropdown === 'references' ? null : 'references')}
                >
                  <Link 
                    href="/references" 
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileMenuOpen(false);
                    }}
                    style={{ 
                      fontSize: '22px',
                      fontWeight: 'bold',
                      color: 'var(--gold)',
                      textDecoration: 'none'
                    }}
                  >
                    References
                  </Link>
                  <svg 
                    style={{ 
                      width: '24px', 
                      height: '24px', 
                      color: 'var(--gold)',
                      transition: 'transform 0.3s ease',
                      transform: mobileDropdown === 'references' ? 'rotate(180deg)' : 'rotate(0deg)'
                    }} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div style={{ 
                  paddingLeft: '20px', 
                  marginTop: '10px',
                  maxHeight: mobileDropdown === 'references' ? '150px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease'
                }}>
                  <Link href="/references#cases" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 0', fontSize: '18px', color: '#d1d5db', textDecoration: 'none' }}>
                    → Cases
                  </Link>
                  <Link href="/references#publications" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 0', fontSize: '18px', color: '#d1d5db', textDecoration: 'none' }}>
                    → Publications
                  </Link>
                </div>
              </div>

              {/* Contact */}
              <div style={{ marginBottom: '25px' }}>
                <Link 
                  href="/kontakt" 
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ 
                    display: 'block',
                    fontSize: '22px',
                    fontWeight: 'bold',
                    color: 'var(--gold)',
                    textDecoration: 'none',
                    padding: '15px 0',
                    borderBottom: '2px solid rgba(212, 175, 55, 0.3)'
                  }}
                >
                  Contact
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}
      </>
  );
}
