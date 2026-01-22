'use client';

import Link from "next/link";
import SplitText from "@/components/SplitText";
import { useState } from "react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacyConsent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          privacyConsent: false
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* Kontaktformular */}
      <section className="section" style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }}>
        <div className="container mx-auto px-6">
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {/* Form Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                Send us a message
              </h2>
              <div style={{ height: '4px', width: '80px', backgroundColor: 'var(--gold)', margin: '0 auto 1.5rem' }}></div>
              <p className="text-lg" style={{ color: '#6b7280' }}>
                Fill out the form below and We will get back to you as soon as possible.
              </p>
            </div>

            {/* Form Container */}
            <div 
              style={{ 
                background: 'white',
                borderRadius: '16px',
                padding: '2.5rem 3rem',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e5e7eb'
              }}
            >
              <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} onSubmit={handleSubmit}>
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-3" style={{ color: 'var(--primary)', letterSpacing: '0.5px', fontSize: '0.875rem' }}>
                      FIRST NAME *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Your first name"
                      autoComplete="off"
                      className="w-full border-2 rounded-lg transition-all duration-300 text-gray-700"
                      style={{ 
                        borderColor: '#e5e7eb',
                        fontSize: '1rem',
                        backgroundColor: '#fafafa',
                        lineHeight: '1.5',
                        padding: '0.875rem 1rem'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--gold)';
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.boxShadow = '0 0 0 4px rgba(212, 175, 55, 0.12)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.backgroundColor = '#fafafa';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-3" style={{ color: 'var(--primary)', letterSpacing: '0.5px', fontSize: '0.875rem' }}>
                      LAST NAME *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Your last name"
                      autoComplete="off"
                      className="w-full border-2 rounded-lg transition-all duration-300 text-gray-700"
                      style={{ 
                        borderColor: '#e5e7eb',
                        fontSize: '1rem',
                        backgroundColor: '#fafafa',
                        lineHeight: '1.5',
                        padding: '0.875rem 1rem'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--gold)';
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.boxShadow = '0 0 0 4px rgba(212, 175, 55, 0.12)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.backgroundColor = '#fafafa';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-3" style={{ color: 'var(--primary)', letterSpacing: '0.5px', fontSize: '0.875rem' }}>
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      autoComplete="off"
                      className="w-full border-2 rounded-lg transition-all duration-300 text-gray-700"
                      style={{ 
                        borderColor: '#e5e7eb',
                        fontSize: '1rem',
                        backgroundColor: '#fafafa',
                        lineHeight: '1.5',
                        padding: '0.875rem 1rem'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--gold)';
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.boxShadow = '0 0 0 4px rgba(212, 175, 55, 0.12)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.backgroundColor = '#fafafa';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-3" style={{ color: 'var(--primary)', letterSpacing: '0.5px', fontSize: '0.875rem' }}>
                      PHONE
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+41 123 456789"
                      autoComplete="off"
                      className="w-full border-2 rounded-lg transition-all duration-300 text-gray-700"
                      style={{ 
                        borderColor: '#e5e7eb',
                        fontSize: '1rem',
                        backgroundColor: '#fafafa',
                        lineHeight: '1.5',
                        padding: '0.875rem 1rem'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--gold)';
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.boxShadow = '0 0 0 4px rgba(212, 175, 55, 0.12)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.backgroundColor = '#fafafa';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-bold mb-3" style={{ color: 'var(--primary)', letterSpacing: '0.5px', fontSize: '0.875rem' }}>
                    SUBJECT *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is it about?"
                    autoComplete="off"
                    className="w-full border-2 rounded-lg transition-all duration-300 text-gray-700"
                    style={{ 
                      borderColor: '#e5e7eb',
                      fontSize: '1rem',
                      backgroundColor: '#fafafa',
                      lineHeight: '1.5',
                      padding: '0.875rem 1rem'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--gold)';
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.boxShadow = '0 0 0 4px rgba(212, 175, 55, 0.12)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.backgroundColor = '#fafafa';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold mb-3" style={{ color: 'var(--primary)', letterSpacing: '0.5px', fontSize: '0.875rem' }}>
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Describe your legal matter in detail..."
                    autoComplete="off"
                    className="w-full border-2 rounded-lg transition-all duration-300 resize-none text-gray-700"
                    style={{ 
                      borderColor: '#e5e7eb',
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      backgroundColor: '#fafafa',
                      padding: '0.875rem 1rem'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--gold)';
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.boxShadow = '0 0 0 4px rgba(212, 175, 55, 0.12)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.backgroundColor = '#fafafa';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  ></textarea>
                </div>

                {/* Privacy Checkbox */}
                <div 
                  className="flex items-center gap-4 p-4 rounded-lg border-2 transition-all duration-300" 
                  style={{ 
                    borderColor: '#e5e7eb',
                    backgroundColor: '#f8f9fa'
                  }}
                >
                  <input
                    type="checkbox"
                    name="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    required
                    id="privacy"
                    className="w-5 h-5 rounded border-gray-300 cursor-pointer flex-shrink-0"
                    style={{ accentColor: 'var(--gold)' }}
                  />
                  <label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer" style={{ color: '#4b5563', lineHeight: '1.6' }}>
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

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#d1fae5', border: '2px solid #10b981' }}>
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 flex-shrink-0" style={{ color: '#10b981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-bold" style={{ color: '#065f46' }}>Message sent successfully!</p>
                        <p className="text-sm" style={{ color: '#047857' }}>We will get back to you as soon as possible.</p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#fee2e2', border: '2px solid #ef4444' }}>
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 flex-shrink-0" style={{ color: '#ef4444' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-bold" style={{ color: '#991b1b' }}>Failed to send message</p>
                        <p className="text-sm" style={{ color: '#dc2626' }}>{errorMessage || 'Please try again later.'}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    padding: '1.125rem 2.5rem',
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    borderRadius: '50px',
                    border: '2px solid var(--gold)',
                    background: isSubmitting ? '#9ca3af' : 'transparent',
                    color: isSubmitting ? 'white' : 'var(--gold)',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1,
                    marginTop: '1.5rem',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.background = 'var(--gold)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(212, 175, 55, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--gold)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg style={{ width: '20px', height: '20px', transition: 'transform 0.3s ease' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
