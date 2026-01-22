'use client';

import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
import BlurText from "@/components/BlurText";

export default function Home() {
  return (
    <>
      {/* Hero Section - ohne pt-20 da es die erste Section ist */}
      <div className="-mt-20" style={{ position: 'relative' }}>
        <Hero />
        {/* Smooth Gradient Transition */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to bottom, rgba(15, 45, 82, 0) 0%, rgba(15, 45, 82, 0.3) 30%, rgba(15, 45, 82, 0.7) 60%, var(--primary) 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }}></div>
      </div>

      {/* About the Firm - Brief Introduction */}
      <section className="section" style={{ backgroundColor: 'var(--primary)' }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <BlurText
                text="Your Law Firm for Legal Matters"
                delay={150}
                animateBy="words"
                direction="top"
                className="section-title mb-8"
                style={{ color: 'var(--gold)', textAlign: 'left' } as any}
              />
              <div className="gold-border">
                <p className="text-lg text-gray-300" style={{ marginBottom: '1.5rem' }}>
                  Katalin combines legal expertise with diligence. Her goal is to find the best solution for you – competent, dedicated, and confidentially.
                </p>
                <p className="text-lg text-gray-300" style={{ marginBottom: '3rem' }}>
                  With years of experience and a deep understanding of her clients' needs, she stands by your side in all legal matters.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <Link 
                    href="/about-us" 
                    style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.875rem 2rem',
                      backgroundColor: 'transparent',
                      color: 'var(--gold)',
                      border: '2px solid var(--gold)',
                      borderRadius: '50px',
                      fontWeight: 600,
                      fontSize: '1rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--gold)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateX(5px)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--gold)';
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Learn more about us
                    <svg style={{ width: '18px', height: '18px', transition: 'transform 0.3s ease' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
                alt="Law Firm"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Practice Overview */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <BlurText
              text="Our Areas of Practice"
              delay={150}
              animateBy="words"
              direction="top"
              className="section-title"
              style={{ marginBottom: '1.5rem', textAlign: 'center' } as any}
            />
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <p className="section-subtitle" style={{ maxWidth: '42rem', textAlign: 'center' }}>
                We provide competent advice and representation in various areas of law.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
            <div className="grid md:grid-cols-3 gap-10" style={{ maxWidth: '80rem', width: '100%' }}>
              {[
                {
                  title: "Dispute Resolution",
                  description: "Expert support through challenging legal disputes",
                  href: "/services#dispute-resolution",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  ),
                },
                {
                  title: "Legal Advice",
                  description: "Comprehensive business and personal legal guidance",
                  href: "/services#legal-advice",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
                {
                  title: "Compliance",
                  description: "Strategic compliance measures for your business",
                  href: "/services#compliance",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href}
                  className="card hover:shadow-xl transition-all duration-300 hover:scale-105" 
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', textDecoration: 'none' }}
                >
                  <div
                    style={{ 
                      width: '64px', 
                      height: '64px', 
                      marginBottom: '1.5rem',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary)', 
                      color: 'white' 
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <Link href="/services" className="btn-outline-dark">
              View all areas of practice
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ backgroundColor: 'var(--primary)' }}>
        <div className="container mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <BlurText
              text="Why Advokatur KuK AG (in Gründung)?"
              delay={150}
              animateBy="words"
              direction="top"
              className="section-title"
              style={{ color: '#ffffff', marginBottom: '1.5rem' } as any}
            />
            <BlurText
              text="Katalin focuses on quality, effectiveness and confidentiality."
              delay={120}
              animateBy="words"
              direction="top"
              style={{ fontSize: '1.25rem', color: '#ffffff', maxWidth: '42rem', textAlign: 'center', lineHeight: '1.75' } as any}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="grid md:grid-cols-4 gap-10" style={{ maxWidth: '72rem', width: '100%' }}>
              {[
                {
                  title: "Experience",
                  text: "Years of expertise in various areas of law",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Competence",
                  text: "Solid expertise and continuous professional development",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                },
                {
                  title: "Trust",
                  text: "Discretion and reliability in every situation",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
                {
                  title: "Personal",
                  text: "Individual care and open communication",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem' }}>
                  <div
                    style={{ 
                      width: '80px', 
                      height: '80px', 
                      marginBottom: '1.5rem',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      borderRadius: '50%',
                      backgroundColor: 'var(--gold)', 
                      color: 'var(--black)' 
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#ffffff' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#d1d5db', fontSize: '0.875rem', lineHeight: '1.625' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
