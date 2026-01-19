'use client';

import SplitText from "@/components/SplitText";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{ 
        paddingTop: '10rem', 
        paddingBottom: '2rem', 
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
              Avoiding disputes is not always possible. Sometimes you need to go through a process to obtain your right. We are here to give you comprehensive support through this challenging process.
            </p>
            
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#4b5563' }}>
              Our focus is on <strong>amicable dispute resolution</strong> through mediation and similar techniques. We equally act as neutral – arbitrator, mediator or expert – in ADR proceedings.
            </p>
            
            <Link 
              href="/references#adr-experience" 
              className="inline-block mt-4 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              style={{ backgroundColor: 'var(--gold)', color: 'white' }}
            >
              Learn more
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
              Our business legal expertise includes a broad variety of fields such as <strong>company formation and corporate housekeeping, joint ventures, mergers & acquisitions, investments, international distribution, managing intellectual property rights, public bids</strong> (construction, telecommunication), <strong>sports & entertainment</strong> or <strong>aviation matters</strong>.
            </p>
            
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#4b5563' }}>
              Our business expertise stems from prior successful collaborations with clients from the pharmaceutical field, international distribution of IP, international sellers & buyers of commodities, individual products and services, and from the construction field.
            </p>
            
            <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
              Let's find the right solution for your individual legal question. Be it of a <strong>civil, criminal or administrative</strong> nature. We are here to listen to you confidentially.
            </p>
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
            
            <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
              The best way to avoid governmental investigations as an in-house counsel is establishing comprehensive compliancy measures. We can advise you on the current Swiss regulations in fields such as <strong>fraud/bribery, healthcare/pharmaceuticals</strong> and <strong>data protection</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
