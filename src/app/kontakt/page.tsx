'use client';

import Link from "next/link";
import SplitText from "@/components/SplitText";

export default function KontaktPage() {
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

        {/* Content */}
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
          <SplitText
            text="Contact"
            tag="h1"
            delay={50}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, scale: 0.5, rotateZ: -180 }}
            to={{ opacity: 1, scale: 1, rotateZ: 0 }}
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

      {/* Kontaktformular */}
      <section className="section" style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }}>
        <div className="container mx-auto px-6">
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {/* Form Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                Send us a Message
              </h2>
              <div style={{ height: '4px', width: '80px', backgroundColor: 'var(--gold)', margin: '0 auto 1.5rem' }}></div>
              <p className="text-lg" style={{ color: '#6b7280' }}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            {/* Form Container */}
            <div 
              style={{ 
                background: 'white',
                borderRadius: '24px',
                padding: '3rem',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e5e7eb'
              }}
            >
              <form className="space-y-8">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-3" style={{ color: 'var(--primary)', letterSpacing: '0.5px' }}>
                      FIRST NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your first name"
                      className="w-full px-6 py-5 border-2 rounded-xl transition-all duration-300 text-gray-700"
                      style={{ 
                        borderColor: '#e5e7eb',
                        fontSize: '1rem',
                        backgroundColor: 'white'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--gold)';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-3" style={{ color: 'var(--primary)', letterSpacing: '0.5px' }}>
                      LAST NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your last name"
                      className="w-full px-6 py-5 border-2 rounded-xl transition-all duration-300 text-gray-700"
                      style={{ 
                        borderColor: '#e5e7eb',
                        fontSize: '1rem',
                        backgroundColor: 'white'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--gold)';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-3" style={{ color: 'var(--primary)', letterSpacing: '0.5px' }}>
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-6 py-5 border-2 rounded-xl transition-all duration-300 text-gray-700"
                      style={{ 
                        borderColor: '#e5e7eb',
                        fontSize: '1rem',
                        backgroundColor: 'white'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--gold)';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-3" style={{ color: 'var(--primary)', letterSpacing: '0.5px' }}>
                      PHONE
                    </label>
                    <input
                      type="tel"
                      placeholder="+41 123 456789"
                      className="w-full px-6 py-5 border-2 rounded-xl transition-all duration-300 text-gray-700"
                      style={{ 
                        borderColor: '#e5e7eb',
                        fontSize: '1rem',
                        backgroundColor: 'white'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--gold)';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-bold mb-3" style={{ color: 'var(--primary)', letterSpacing: '0.5px' }}>
                    SUBJECT *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="What is it about?"
                    className="w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 text-gray-700"
                    style={{ 
                      borderColor: '#e5e7eb',
                      fontSize: '1rem',
                      backgroundColor: 'white'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--gold)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold mb-3" style={{ color: 'var(--primary)', letterSpacing: '0.5px' }}>
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={7}
                    placeholder="Describe your legal matter in detail..."
                    className="w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 resize-none text-gray-700"
                    style={{ 
                      borderColor: '#e5e7eb',
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      backgroundColor: 'white'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--gold)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  ></textarea>
                </div>

                {/* Privacy Checkbox */}
                <div 
                  className="flex items-start gap-4 p-5 rounded-xl border-2 transition-all duration-300" 
                  style={{ 
                    borderColor: '#e5e7eb',
                    backgroundColor: '#f8f9fa'
                  }}
                >
                  <input
                    type="checkbox"
                    required
                    id="privacy"
                    className="mt-1 w-5 h-5 rounded border-gray-300 cursor-pointer"
                    style={{ accentColor: 'var(--gold)' }}
                  />
                  <label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer" style={{ color: '#4b5563' }}>
                    I have read the{' '}
                    <Link
                      href="/datenschutz"
                      className="font-bold hover:underline transition-all"
                      style={{ color: 'var(--primary)' }}
                    >
                      Privacy Policy
                    </Link>{' '}
                    and consent to the processing of my data. *
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full text-lg font-bold py-5 rounded-xl transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, var(--gold) 0%, #c9a961 100%)',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                    letterSpacing: '0.5px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
                  }}
                >
                  <span className="flex items-center justify-center gap-3">
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
