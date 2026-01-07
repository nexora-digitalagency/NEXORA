import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#10212e',
        color: '#ffffff',
        padding: '80px 5%',
        fontFamily: '"Inter", sans-serif',
        display: 'flex',
        flexDirection: 'column',
    };

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        marginBottom: '60px',
    };

    const columnStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    };

    const headingStyle = {
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '10px',
        color: '#ffffff',
    };

    const linkStyle = {
        color: '#b0b0b0',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'color 0.2s',
        marginBottom: '8px',
        display: 'block',
    };

    const bottomBarStyle = {
        borderTop: '1px solid #2d3748',
        paddingTop: '30px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        fontSize: '14px',
        color: '#718096',
    };

    return (
        <div style={footerStyle} className="footer-pro">
            <div style={containerStyle}>
                {/* Brand Column */}
                <div style={{ ...columnStyle, flex: '2' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <img
                            src="/assets/LOGO.png"
                            alt="Nexora"
                            style={{ width: '40px', height: 'auto', filter: 'invert(1)' }} // Invert to make black logo white
                        />
                        <span style={{
                            fontFamily: '"Domine", serif',
                            fontSize: '24px',
                            fontWeight: '700',
                            letterSpacing: '1px'
                        }}>NEXORA</span>
                    </div>
                    <p style={{ color: '#b0b0b0', lineHeight: '1.6', maxWidth: '300px' }}>
                        Digital Marketing That Helps Businesses Grow Faster. We specialize in Real Estate and scalable growth strategies.
                    </p>
                    <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                        {/* Social Icons (using text/emoji for simplicity or SVG if available, using simple text for now) */}
                        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>LinkedIn</a>
                        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Twitter</a>
                        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Instagram</a>
                    </div>
                </div>

                {/* Links Column 1 */}
                <div style={columnStyle}>
                    <div style={headingStyle}>Services</div>
                    <a href="/services/seo" style={linkStyle}>SEO Optimization</a>
                    <a href="/services/content" style={linkStyle}>Content Marketing</a>
                    <a href="/services/social" style={linkStyle}>Social Media</a>
                    <a href="/services/ads" style={linkStyle}>Paid Advertising</a>
                </div>

                {/* Links Column 2 */}
                <div style={columnStyle}>
                    <div style={headingStyle}>Company</div>
                    <a href="/about" style={linkStyle}>About Us</a>
                    <a href="/work" style={linkStyle}>Our Work</a>
                    <a href="/#plans" style={linkStyle}>Pricing</a>
                    <a href="/contact" style={linkStyle}>Contact</a>
                </div>

                {/* CTA / Newsletter */}
                <div style={columnStyle}>
                    <div style={headingStyle}>Stay Connected</div>
                    <p style={{ color: '#b0b0b0', fontSize: '14px' }}>Get the latest digital marketing trends delivered to your inbox.</p>
                    <form style={{ display: 'flex', gap: '10px', marginTop: '10px' }} onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{
                                padding: '10px',
                                borderRadius: '4px',
                                border: '1px solid #4a5568',
                                backgroundColor: '#2d3748',
                                color: 'white',
                                width: '100%'
                            }}
                        />
                        <button style={{
                            padding: '10px 20px',
                            borderRadius: '4px',
                            border: 'none',
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontFamily: '"Outfit", sans-serif'
                        }}>Subscribe</button>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={bottomBarStyle}>
                <div>
                    &copy; {new Date().getFullYear()} Nexora. All rights reserved.
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <a href="/privacy" style={{ ...linkStyle, marginBottom: 0 }}>Privacy Policy</a>
                    <a href="/terms" style={{ ...linkStyle, marginBottom: 0 }}>Terms of Service</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
