import React, { useState } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Footer = () => {
    // Current year for copyright
    const currentYear = new Date().getFullYear();

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const handleSubscribe = (e) => {
        e.preventDefault();
        setLoading(true);

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // We reuse the same template, filling in "N/A" for missing fields
        const templateParams = {
            user_name: 'Newsletter Subscriber',
            user_email: email,
            contact_number: 'N/A',
            company_name: 'N/A',
            service_interest: 'Newsletter Subscription',
            message: 'I would like to subscribe to the newsletter.'
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                setStatus('success');
                setEmail('');
                setTimeout(() => setStatus(null), 5000);
            }, (error) => {
                console.log(error.text);
                setLoading(false);
                setStatus('error');
            });
    };

    return (
        <div className="footer-pro">
            <div className="footer-container">
                {/* Brand Column */}
                <div className="footer-brand-column">
                    <div className="brand-wrapper">
                        <img
                            src="/assets/name_logo.png"
                            alt="Nexora"
                            style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
                        />
                    </div>
                    <p className="brand-description">
                        Digital Marketing That Drives Results. We help businesses grow with SEO, PPC, social media, and content strategies that convert.
                    </p>
                    <div className="social-icons-wrapper">
                        {/* Social Icons */}
                        <a href="https://www.linkedin.com/in/nexora-digital-63893b3a4/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                        <a href="https://twitter.com/Nexoradigitall" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
                        <a href="https://www.instagram.com/nexoradigital92" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
                    </div>
                </div>

                {/* Links Column 1 */}
                <div className="footer-links-column">
                    <div className="footer-heading">Services</div>
                    <Link to="/services/seo" className="footer-link-item">SEO Optimization</Link>
                    <Link to="/services/content" className="footer-link-item">Content Marketing</Link>
                    <Link to="/services/social" className="footer-link-item">Social Media</Link>
                    <Link to="/services/ads" className="footer-link-item">Paid Advertising</Link>
                </div>

                {/* Links Column 2 */}
                <div className="footer-links-column">
                    <div className="footer-heading">Company</div>
                    <Link to="/about" className="footer-link-item">About Us</Link>
                    <Link to="/work" className="footer-link-item">Our Work</Link>
                    <Link to="/#plans" className="footer-link-item">Pricing</Link>
                    <Link to="/contact" className="footer-link-item">Contact</Link>
                </div>

                {/* CTA / Newsletter */}
                <div className="footer-links-column">
                    <div className="footer-heading">Stay Connected</div>
                    <p className="newsletter-text">Get the latest digital marketing trends delivered to your inbox.</p>
                    <form className="newsletter-form" onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="newsletter-input"
                            required
                        />
                        <button type="submit" className="newsletter-button" disabled={loading}>
                            {loading ? '...' : 'Subscribe'}
                        </button>
                    </form>
                    {status === 'success' && <p style={{ color: '#4ade80', fontSize: '12px', marginTop: '10px' }}>Thanks for subscribing!</p>}
                    {status === 'error' && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '10px' }}>Something went wrong. Try again.</p>}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom-bar">
                <div className="copyright-text">
                    &copy; {currentYear} Nexora. All rights reserved.
                </div>
                <div className="legal-links">
                    <Link to="/privacy" className="legal-link">Privacy Policy</Link>
                    <Link to="/terms" className="legal-link">Terms of Service</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
