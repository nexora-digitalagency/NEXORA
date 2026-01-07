import React from 'react';
import PageHero from '../components/common/PageHero';

const Contact = () => {
    return (
        <div>
            <PageHero
                title="Contact Us"
                subtitle="Ready to scale your business? Let's talk about your goals and how we can help you hit them."
                breadcrumb="Home / Company / Contact"
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
                                        <a href="mailto:hello@nexora.com" style={{ color: '#64748b', textDecoration: 'none', fontSize: '16px' }}>hello@nexora.com</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ width: '50px', height: '50px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="heading h5" style={{ margin: 0 }}>Phone</h4>
                                        <a href="tel:+919876543210" style={{ color: '#64748b', textDecoration: 'none', fontSize: '16px' }}>+91 98765 43210</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ width: '50px', height: '50px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    </div>
                                    <div>
                                        <h4 className="heading h5" style={{ margin: 0 }}>Office</h4>
                                        <p style={{ color: '#64748b', margin: 0, fontSize: '16px' }}>Nexora HQ, Tech Park<br />Mumbai, India</p>
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
                            <form>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px', color: '#334155' }}>Full Name</label>
                                    <input type="text" className="text-field w-input" placeholder="John Doe" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px', color: '#334155' }}>Email Address</label>
                                    <input type="email" className="text-field w-input" placeholder="john@company.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px', color: '#334155' }}>Service Interest</label>
                                    <select className="text-field w-select" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
                                        <option value="">Select a service...</option>
                                        <option value="SEO">SEO Optimization</option>
                                        <option value="Content">Content Marketing</option>
                                        <option value="Social">Social Media</option>
                                        <option value="Ads">Paid Advertising</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div style={{ marginBottom: '24px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px', color: '#334155' }}>Message</label>
                                    <textarea className="text-field w-input" placeholder="Tell us about your project..." style={{ width: '100%', minHeight: '120px', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1' }}></textarea>
                                </div>
                                <button type="submit" className="button w-button" style={{ width: '100%', border: 'none', borderRadius: '8px', padding: '14px', fontSize: '16px' }}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
