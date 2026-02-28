'use client';

import SplitText from "@/components/SplitText";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{ 
        paddingTop: '3.5rem', 
        paddingBottom: '3.5rem', 
        textAlign: 'center', 
        color: 'white',
        position: 'relative' as const,
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0a1f3d 0%, #0f2d52 50%, #1a4d7a 100%)'
      }}>
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '40%',
          height: '80%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-5%',
          width: '35%',
          height: '70%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
          <SplitText
            text="Our Services"
            tag="h1"
            delay={50}
            duration={1}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 700, 
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
              background: 'linear-gradient(135deg, #ffffff 0%, #D4AF37 50%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1.5rem',
              filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.3))'
            } as any}
          />
        </div>
      </section>

      {/* Dispute Resolution */}
      <section id="dispute-resolution" className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--primary)' }}>
              Dispute Resolution
            </h2>
            <div style={{ height: '4px', width: '80px', backgroundColor: 'var(--gold)', marginBottom: '2rem' }}></div>
            
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#4b5563' }}>
              Avoiding disputes is not always possible. Sometimes you need to go through a process to obtain your right. Katalin is here to give you comprehensive support through these challenging times.
            </p>
            
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#4b5563' }}>
              Katalin&apos;s focus is on amicable dispute resolution through mediation and similar techniques. She equally acts as neutral – arbitrator, mediator or expert – in ADR proceedings.
            </p>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
                Katalin has managed complex, international business disputes in civil and common law arbitration, Swiss civil state court and mediation proceedings on behalf of clients from Europe, Middle East, Asia, North and South America. She drafted submissions and settlement agreements, analyzed evidence and legal questions, performed complex damage calculations, prepared witness examinations, and conducted arbitral hearings as counsel.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
                Katalin has negotiated and enforced R&D agreements, advised the set-up of investment vehicles on behalf of life science companies; drafted, analyzed and enforced legal documents related to marketing and distribution of biotechnological products; analyzed risks of potential disputes and estimate damages; collaborated with IP lawyers to manage disputes worldwide, and represented life science companies in disputes.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
                Katalin advised in-house counsel in pre-litigation phase to minimize risks, manage contract documentation and draft new solid supply and collaboration agreements.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
                Katalin acted as tribunal secretary in several international arbitrations under Swiss or other foreign law, involving amounts of dispute of up to USD 50m.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
                Katalin has specific experience in the fields of <strong>aviation</strong> (post mergers & acquisitions disputes, sale and lease back agreements), <strong>trade of commodities</strong> (supply agreements), <strong>constructions</strong> (contract law, licensing) and <strong>intellectual property</strong> (international publishing).
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
                Katalin represented athletes in proceedings at the <strong>Court of Arbitration for Sport, Lausanne</strong> as pro bono counsel.
              </p>
            </div>

            <Link
              href="/references#cases"
              className="learn-more-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1.5rem',
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
              Learn more
              <svg style={{ width: '18px', height: '18px', transition: 'transform 0.3s ease' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Legal Advice */}
      <section id="legal-advice" className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--primary)' }}>
              Legal Advice
            </h2>
            <div style={{ height: '4px', width: '80px', backgroundColor: 'var(--gold)', marginBottom: '2rem' }}></div>
            
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#4b5563' }}>
              Katalin's business legal expertise includes a broad variety of fields such as company formation and corporate housekeeping, joint ventures, mergers & acquisitions, private equity / investments, international distribution (incl. IP), trademarks, unfair competition, public bids (construction, telecommunication, publishing), sports & entertainment or aviation matters.
            </p>
            
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#4b5563' }}>
              Katalin's business expertise stems from prior successful collaborations with clients from the pharmaceutical field, international scientific publishing, international sale of goods and commodities, and from the construction field.
            </p>
            
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#4b5563' }}>
              Let's find the right solution for your individual legal question. Be it of a civil, criminal or administrative nature. Katalin is here to listen to you confidentially.
            </p>
            
            <Link 
              href="/references#in-house" 
              className="learn-more-btn"
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1.5rem',
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
              Learn more
              <svg style={{ width: '18px', height: '18px', transition: 'transform 0.3s ease' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section id="compliance" className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--primary)' }}>
              Compliance
            </h2>
            <div style={{ height: '4px', width: '80px', backgroundColor: 'var(--gold)', marginBottom: '2rem' }}></div>
            
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#4b5563' }}>
              The best way to avoid governmental investigations as an in-house counsel is establishing comprehensive compliancy measures. At the same time, measures must be cost effective and tailored to your business budget. Katalin can advise you in fields such as unfair competition, sanctions, anti-bribery, data protection, product liability or accessibility. Katalin further has extensive experience in international restructurings, reorganisations and HR related, sensitive matters. She is empathetic, has excellent communication skills, is result-oriented, and has a deep understanding of actual implementation of strategies and frameworks.
            </p>
            
            <Link 
              href="/references#in-house" 
              className="learn-more-btn"
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1.5rem',
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
              Learn more
              <svg style={{ width: '18px', height: '18px', transition: 'transform 0.3s ease' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
