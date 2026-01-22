'use client';

import SplitText from "@/components/SplitText";

export default function AboutUsPage() {
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
            text="About Us"
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

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Expertise Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-4 mt-0" style={{ color: 'var(--primary)', letterSpacing: '0.5px' }}>
                EXPERTISE & BACKGROUND
              </h3>
              <div style={{ height: '3px', width: '60px', backgroundColor: 'var(--gold)', marginBottom: '2rem' }}></div>
              
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#4b5563', lineHeight: '1.9' }}>
                Katalin is a <strong>dispute resolution expert</strong> qualified in <strong>Switzerland</strong> and <strong>California</strong> as Attorney-at-Law.
              </p>
              
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#4b5563', lineHeight: '1.9' }}>
                She previously worked at different commercial Swiss law firms in Switzerland, and an American arbitration/mediation service provider in California.
              </p>
              
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#4b5563', lineHeight: '1.9' }}>
                Katalin has over <strong>15 years experience</strong> in giving legal advice to private and institutional clients. She has been advising her clients on how to avoid disputes, how to prepare for litigation, and represented her clients in civil and criminal litigations including arbitrations.
              </p>
              
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#4b5563', lineHeight: '1.9' }}>
                She acted as <strong>Pro Bono Counsel</strong> to athletes at the <strong>Court of Arbitration for Sport (Lausanne)</strong>.
              </p>
              
              <p className="text-lg leading-relaxed" style={{ color: '#4b5563', lineHeight: '1.9' }}>
                In addition, Katalin has been working in-house focusing on international IP and IT matters, and advising companies on data protection and compliancy regulations for several years.
              </p>
            </div>

            {/* USP Section */}
            <div className="mb-16" style={{ marginTop: '5rem' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)', letterSpacing: '0.5px' }}>
                UNIQUE SELLING PROPOSITIONS
              </h3>
              <div style={{ height: '3px', width: '60px', backgroundColor: 'var(--gold)', marginBottom: '2rem' }}></div>
              
              <p className="text-base mb-8" style={{ color: '#6b7280', fontStyle: 'italic', fontSize: '1.1rem' }}>
                What sets Katalin apart:
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div style={{ minWidth: '12px', height: '12px', backgroundColor: 'var(--gold)', borderRadius: '50%', marginTop: '10px', flexShrink: 0 }}></div>
                  <p className="text-lg leading-relaxed" style={{ color: '#4b5563', lineHeight: '1.9' }}>
                    Her <strong>resilience</strong> in pursuing her client's best interests in a <strong>time and cost effective manner</strong>
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div style={{ minWidth: '12px', height: '12px', backgroundColor: 'var(--gold)', borderRadius: '50%', marginTop: '10px', flexShrink: 0 }}></div>
                  <p className="text-lg leading-relaxed" style={{ color: '#4b5563', lineHeight: '1.9' }}>
                    Her dual, <strong>civil and common law</strong> approach to legal problems
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div style={{ minWidth: '12px', height: '12px', backgroundColor: 'var(--gold)', borderRadius: '50%', marginTop: '10px', flexShrink: 0 }}></div>
                  <p className="text-lg leading-relaxed" style={{ color: '#4b5563', lineHeight: '1.9' }}>
                    Her <strong>empathetic listening skills</strong>
                  </p>
                </li>
              </ul>
            </div>

            {/* Education Section */}
            <div className="mb-16" style={{ marginTop: '5rem' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)', letterSpacing: '0.5px' }}>
                EDUCATION & PROFESSIONAL MEMBERSHIP
              </h3>
              <div style={{ height: '3px', width: '60px', backgroundColor: 'var(--gold)', marginBottom: '2rem' }}></div>
              
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#4b5563', lineHeight: '1.9' }}>
                Katalin holds an <strong>LL.M. degree</strong> from the <strong>University of California, Los Angeles</strong> and completed an <strong>Alternative Dispute Resolution Program</strong> at the <strong>Institute for U.S. Law, Washington D.C.</strong>
              </p>
              
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#4b5563', lineHeight: '1.9' }}>
                She is member of the <strong>Swiss Lawyer's Association</strong>.
              </p>
              
              <p className="text-lg leading-relaxed" style={{ color: '#4b5563', lineHeight: '1.9' }}>
                Katalin regularly publishes and speaks on dispute resolution matters.
              </p>
            </div>

            {/* Languages Section */}
            <div className="mb-0" style={{ marginTop: '5rem' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)', letterSpacing: '0.5px' }}>
                LANGUAGES
              </h3>
              <div style={{ height: '3px', width: '60px', backgroundColor: 'var(--gold)', marginBottom: '2rem' }}></div>
              
              <p className="text-lg leading-relaxed" style={{ color: '#4b5563', lineHeight: '1.9' }}>
                Katalin advises her clients in <strong>German, English, French</strong> and <strong>Hungarian</strong>.
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
