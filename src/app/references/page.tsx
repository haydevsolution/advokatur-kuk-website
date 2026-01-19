'use client';

import SplitText from "@/components/SplitText";

export default function ReferencesPage() {
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
            text="References"
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

      {/* In-house Experience */}
      <section id="in-house-experience" className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--primary)' }}>
              In-house Experience
            </h2>
            <div style={{ height: '4px', width: '80px', backgroundColor: 'var(--gold)', marginBottom: '2rem' }}></div>
            
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#4b5563' }}>
              As <strong>head of legal</strong> for almost five years with an internationally renowned publishing house, Katalin accumulated a wealth of experience in an IP driven, high-paced industry:
            </p>

            <div className="grid gap-4">
              {[
                'Negotiating international licensing agreements for academic institutions and healthcare businesses (including transformative deals, AI and TDM provisions)',
                'Advising on distribution and agency agreements in publishing worldwide',
                'Advising on business strategies',
                'Managing copyrights, including cease and desist letters, handling derivative products (animations, etc.)',
                'Restructurings worldwide (e.g. acquisition in the UK, bankruptcy proceedings in the US)',
                'Corporate work (e.g., merging two foundations under Swiss law)',
                'Advising business on unfair competition/antitrust, data protection, and trademark registrations',
                'Developing labour law, anti-child labor, sustainability, inclusion & diversity policies',
                'Advising IT on digital transformation agreements',
                'Establishing a global data protection policy and acting as global Data Privacy Officer, run internal education programs for employees',
                'Conducting legal research across multiple jurisdictions, leading outside counsel',
                'Handling corporate housekeeping, including insurance policies and whistleblowing strategies',
                'Leading internal investigations'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
                  <div style={{ minWidth: '6px', height: '6px', backgroundColor: 'var(--gold)', borderRadius: '50%', marginTop: '8px' }}></div>
                  <p className="text-base leading-relaxed" style={{ color: '#4b5563' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADR Experience */}
      <section id="adr-experience" className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--primary)' }}>
              ADR Experience
            </h2>
            <div style={{ height: '4px', width: '80px', backgroundColor: 'var(--gold)', marginBottom: '2rem' }}></div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
                Managed complex, international business disputes in civil and common law arbitration, Swiss civil state court and mediation proceedings on behalf of clients from Europe, Middle East, Asia, North and South America. Drafted submissions and settlement agreements, analyzed evidence and legal questions, performed complex damage calculations, prepared witness examinations, and conducted arbitral hearings as counsel.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
                Negotiated and enforced R&D agreements, advised the set-up of investment vehicles on behalf of life science companies; drafted, analyzed and enforced legal documents related to marketing and distribution of biotechnological products; analyzed risks of potential disputes and estimate damages; collaborated with IP lawyers to manage disputes worldwide; represented life science companies in disputes.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
                Advised in-house counsel in pre-litigation phase to minimize risks, manage contract documentation and draft new solid supply and collaboration agreements.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
                Acquired experience in the fields of <strong>aviation</strong> (post mergers & acquisitions disputes, sale and lease back agreements), <strong>trade of commodities</strong> (supply agreements), <strong>constructions</strong> (contract law, licensing).
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
                Advised foreign and national clients on Swiss civil contract law, agency, IP rights, licensing, liability/torts, enforcement law and compliance matters.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
                Analyzed and enforced entertainment related broadcasting agreements.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
                Analyzed aviation related legal documents related to compensation schemes and collective labor matters.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
                Advised various clients in data protection, anti-bribery and corruption matters.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
                Represented athletes in proceedings at the <strong>Court of Arbitration for Sport, Lausanne</strong> as pro bono counsel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: 'var(--primary)' }}>
              Cases
            </h2>
            <div style={{ height: '4px', width: '80px', backgroundColor: 'var(--gold)', marginBottom: '3rem', margin: '0 auto 3rem' }}></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
              {[
                { role: 'Counsel', type: 'joint venture/aviation dispute', ref: 'ICC No. 20816/ZF', amount: 'USD 41m' },
                { role: 'Counsel', type: 'public license dispute', ref: 'ad hoc arbitration', amount: 'CHF 20m (part. quantified)' },
                { role: 'Counsel', type: 'international sale contract dispute', ref: 'ICC No. 21888/GR', amount: 'USD 4m' },
                { role: 'Counsel', type: 'international sale contract mediation', ref: 'ICC ADR No. 241', amount: 'USD 4m' },
                { role: 'Counsel', type: 'international sale contract dispute', ref: 'Swiss Rules No. 600457', amount: 'USD 11.5m' },
                { role: 'Counsel', type: 'dispute related to pharmaceuticals', ref: 'ICC No. 19400/GFG/FS', amount: 'USD 700k (part. quantified)' },
                { role: 'Counsel', type: 'agency/debt collection dispute', ref: 'ICC No. 21709/GR', amount: 'USD 1.6m' },
                { role: 'Counsel', type: 'post mergers & acquisition dispute', ref: 'Swiss Rules No. 600380', amount: 'CHF 3.5m' },
                { role: 'Counsel', type: 'post mergers & acquisition dispute', ref: 'ICC No. 20175/GFG/FS', amount: 'USD 5m' },
                { role: 'Tribunal Secretary', type: 'international sale contract dispute (technical equipment)', ref: 'ICC No. 21602/FS', amount: 'USD 7.1m' },
                { role: 'Tribunal Secretary', type: 'trust dispute', ref: 'Swiss Rules 600472-2016 ER (emergency arbitration)', amount: 'no amount in dispute' },
                { role: 'Tribunal Secretary', type: 'agency dispute on pharmaceutical products', ref: 'ICC No. 20448/EMT/GR', amount: 'USD 4.3m' }
              ].map((caseItem, index) => (
                <div 
                  key={index} 
                  className="rounded-xl transition-all duration-300 hover:scale-105" 
                  style={{ 
                    padding: '2rem',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    border: '2px solid #e5e7eb',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--gold)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 175, 55, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  <div className="mb-4">
                    <span 
                      className="inline-block text-sm font-bold" 
                      style={{ 
                        padding: '0.4rem 1rem',
                        background: 'linear-gradient(135deg, var(--gold) 0%, #c9a961 100%)', 
                        color: 'white',
                        boxShadow: '0 2px 8px rgba(212, 175, 55, 0.3)',
                        whiteSpace: 'nowrap',
                        borderRadius: '9999px',
                        lineHeight: '1.2',
                        letterSpacing: '0.02em'
                      }}
                    >
                      {caseItem.role}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 leading-snug" style={{ color: 'var(--primary)', minHeight: '3rem' }}>
                    {caseItem.type}
                  </h3>
                  <div className="space-y-2 pt-3" style={{ borderTop: '1px solid #e5e7eb' }}>
                    <p className="text-base" style={{ color: '#6b7280' }}>
                      <strong style={{ color: '#4b5563' }}>Reference:</strong> {caseItem.ref}
                    </p>
                    <p className="text-base font-semibold" style={{ color: 'var(--primary)' }}>
                      <strong>Amount:</strong> {caseItem.amount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: 'var(--primary)' }}>
              Publications & Speaking Engagements
            </h2>
            <div style={{ height: '4px', width: '80px', backgroundColor: 'var(--gold)', marginBottom: '3rem', margin: '0 auto 3rem' }}></div>
            
            <div className="space-y-8">
              {[
                { authors: 'Meier, K.', title: 'On adjudication boards in construction matters, with specific focus on the new FIDIC dispute adjudication/avoidance board ("DAAB")', publication: 'IBA Real Estate Committee E-Bulletin', date: 'Spring 2020–work in progress', type: 'Publication' },
                { authors: 'Fehr-Bosshard, D. / Gassmann, J. D. / Meier, K. / Prinz, M. Ph. / Jäggy, M. / Tarolli Schmidt, N.', title: 'Lexology Getting the Deal Through - Sports Law 2020: Chapter on Switzerland', publication: 'Lexology.com', date: 'January, 2020', type: 'Publication' },
                { authors: 'Meier, K.', title: 'How to Effectively Advocate in International Arbitrations seated in Europe', publication: 'California Lawyer\'s Association, Litigation Section', date: 'November, 2019', type: 'Webinar' },
                { authors: 'Chernick, R. / Chedid, M. / Miller, H. B. / O\'Malley, N. / Meier, K. (Program Lead Research Attorney)', title: 'International Arbitration 2019: A New Era for California, Your Clients and You', publication: 'Thomson Reuters / The Rutter Group, San Francisco and Los Angeles', date: 'June, 2019', type: 'Conference' },
                { authors: 'Benton, G. / Meier, K.', title: 'California – A Rising Star Among International Arbitration Seats', publication: 'New York Dispute Resolution Law Journal Vol. 12 No. 1, 23-26', date: 'March, 2019', type: 'Journal Article' },
                { authors: 'Meier, K.', title: 'Rules of Evidence in International Arbitration, the current state of matters and do we need alternative approaches?', publication: 'Musick Peeler / USC Gould / CIAC, Los Angeles', date: 'March, 2019', type: 'Speaking Engagement' },
                { authors: 'Meier, K.', title: 'Motion Picture Arbitration: New Developments in Arbitration', publication: 'Independent Film and Television Alliance, Annual Arbitrator Meeting, Los Angeles', date: 'October, 2018', type: 'Speaking Engagement' },
                { authors: 'Meier, K.', title: 'A Beginner\'s Guide to Mediation', publication: 'ICC Young Arbitrators Forum, San Francisco', date: 'May, 2018', type: 'Speaking Engagement' },
                { authors: 'Gabriel, S. / Buhr, A. / Meier, K.', title: 'Switzerland, Law and Practice', publication: 'Chambers & Partners International Arbitration Guide', date: 'June, 2017', type: 'Publication' }
              ].map((pub, index) => (
                <div 
                  key={index} 
                  className="rounded-xl bg-white transition-all duration-300 hover:scale-[1.02]" 
                  style={{ 
                    padding: '2rem',
                    border: '1px solid #e5e7eb',
                    borderLeft: '5px solid var(--gold)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 175, 55, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase" 
                      style={{ 
                        backgroundColor: '#f0f2f5',
                        color: 'var(--primary)'
                      }}
                    >
                      {pub.type}
                    </span>
                    <span className="text-sm font-semibold" style={{ color: '#9ca3af' }}>
                      {pub.date}
                    </span>
                  </div>
                  
                  <p className="text-sm font-semibold mb-3" style={{ color: 'var(--gold)', letterSpacing: '0.3px' }}>
                    {pub.authors}
                  </p>
                  
                  <h3 className="text-lg font-bold mb-3 leading-relaxed" style={{ color: 'var(--primary)' }}>
                    {pub.title}
                  </h3>
                  
                  <div className="flex items-start gap-2 pt-3" style={{ borderTop: '1px solid #f0f2f5' }}>
                    <svg 
                      className="w-5 h-5 flex-shrink-0 mt-0.5" 
                      fill="none" 
                      stroke="var(--gold)" 
                      viewBox="0 0 24 24"
                      style={{ minWidth: '20px' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-base leading-relaxed" style={{ color: '#6b7280' }}>
                      {pub.publication}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
