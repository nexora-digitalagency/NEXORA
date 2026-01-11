import React, { useState, useRef } from 'react';
import PageHero from '../components/common/PageHero';
import emailjs from '@emailjs/browser';
import SEO from '../components/common/SEO';

const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Access credentials from environment variables
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            console.error('Missing EmailJS environment variables. Please check your .env file.');
            console.log({ SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
            setError('Configuration Error: Missing credentials. Please check console.');
            setIsLoading(false);
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log('Main email sent:', result.text);

                // --- Auto-Reply Logic ---
                const AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
                if (AUTO_REPLY_TEMPLATE_ID) {
                    // We use sendForm again because the form inputs match the variables needed 
                    // (user_name, user_email, service_interest).
                    // If the template expects variables that are NOT in the form input names,
                    // we would use emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, { ...params }, PUBLIC_KEY) instead.
                    emailjs.sendForm(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, form.current, PUBLIC_KEY)
                        .then((res) => console.log('Auto-reply sent:', res.text))
                        .catch((err) => console.error('Auto-reply failed:', err));
                }

                setIsLoading(false);
                setIsSubmitted(true);
            }, (error) => {
                console.error('EmailJS Error:', error);
                setIsLoading(false);
                setError(`Failed to send: ${error.text || 'Unknown error'}`);
            });
    };
    return (
        <div>
            <PageHero
                title="Contact Us"
                subtitle="Ready to scale your business? Let's talk about your goals and how we can help you hit them."
                breadcrumb="Home / Company / Contact"
            />
            <SEO
                title="Contact Nexora | Let's Grow Your Business"
                description="Get in touch with Nexora for digital marketing services in Vadodara. Call us or send a message to start scaling your business."
            />

            <div className="section">
                <div className="container w-container">
                    <div className="w-layout-grid _2-column-grid" style={{ gap: '60px', alignItems: 'start' }}>

                        {/* Left Info Column */}
                        <div data-aos="fade-right">
                            <h2 className="heading h2">Let's start a conversation</h2>
                            <p className="paragraph large" style={{ marginTop: '20px', marginBottom: '40px' }}>
                                Use the form or contact details to get in touch. We usually respond within 24 hours.
                            </p>

                            <div style={{ display: 'grid', gap: '30px' }}>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ width: '50px', height: '50px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    </div>
                                    <div>
                                        <h4 className="heading h5" style={{ margin: 0 }}>Email</h4>
                                        <a href="mailto:help@nexora-digital.in" style={{ color: '#64748b', textDecoration: 'none', fontSize: '16px' }}>help@nexora-digital.in</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ width: '50px', height: '50px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="heading h5" style={{ margin: 0 }}>Phone</h4>
                                        <a href="tel:+919904256613" style={{ color: '#64748b', textDecoration: 'none', fontSize: '16px' }}>+91 99042 56613</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ width: '50px', height: '50px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    </div>
                                    <div>
                                        <h4 className="heading h5" style={{ margin: 0 }}>Office</h4>
                                        <p style={{ color: '#64748b', margin: 0, fontSize: '16px' }}>FF-26, A-1 Tower Sunmelon Shops & Flats,<br />Near Vekunth-1, Waghodia Chowkdi,<br />Vadodara - 390019</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div data-aos="fade-left" style={{
                            backgroundColor: '#fff',
                            padding: '40px',
                            borderRadius: '24px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                            border: '1px solid #f1f5f9'
                        }}>
                            <h3 className="heading h4" style={{ marginBottom: '24px' }}>Send us a message</h3>
                            {!isSubmitted ? (
                                <form ref={form} onSubmit={sendEmail}>
                                    <div style={{ marginBottom: '20px' }}>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px', color: '#334155' }}>Full Name</label>
                                        <input type="text" name="user_name" required className="text-field w-input" placeholder="John Doe" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
                                    </div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px', color: '#334155' }}>Email Address</label>
                                        <input type="email" name="user_email" required className="text-field w-input" placeholder="john@company.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
                                    </div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px', color: '#334155' }}>Phone Number</label>
                                        <input type="tel" name="contact_number" className="text-field w-input" placeholder="+91 99042 56613" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
                                    </div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px', color: '#334155' }}>Company Name</label>
                                        <input type="text" name="company_name" className="text-field w-input" placeholder="Your Business Ltd." style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
                                    </div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px', color: '#334155' }}>Service Interest</label>
                                        <select name="service_interest" className="text-field w-select" style={{
                                            width: '100%',
                                            padding: '12px 16px',
                                            borderRadius: '8px',
                                            border: '1px solid #cbd5e1',
                                            backgroundColor: '#fff',
                                            color: '#334155',
                                            fontSize: '16px',
                                            outline: 'none'
                                        }}>
                                            <option value="Not Specified">Select a service...</option>
                                            <option value="SEO">SEO Optimization</option>
                                            <option value="Content">Content Marketing</option>
                                            <option value="Social">Social Media</option>
                                            <option value="Ads">Paid Advertising</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div style={{ marginBottom: '24px' }}>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px', color: '#334155' }}>Message</label>
                                        <textarea name="message" required className="text-field w-input" placeholder="Tell us about your project..." style={{ width: '100%', minHeight: '120px', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1' }}></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="button w-button"
                                        style={{
                                            width: '100%',
                                            border: 'none',
                                            borderRadius: '8px',
                                            padding: '14px',
                                            fontSize: '16px',
                                            opacity: isLoading ? 0.7 : 1,
                                            cursor: isLoading ? 'not-allowed' : 'pointer'
                                        }}
                                    >
                                        {isLoading ? 'Sending...' : 'Send Message'}
                                    </button>
                                    {error && <p style={{ color: '#ef4444', marginTop: '10px', fontSize: '14px' }}>{error}</p>}
                                </form>
                            ) : (
                                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                    <div style={{ width: '60px', height: '60px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', color: '#16a34a' }}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <h3 className="heading h4">Message Sent!</h3>
                                    <p className="paragraph" style={{ marginBottom: '20px' }}>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                                    <button onClick={() => setIsSubmitted(false)} style={{ background: 'none', border: 'none', color: '#3b82f6', textDecoration: 'underline', cursor: 'pointer' }}>Send another message</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
