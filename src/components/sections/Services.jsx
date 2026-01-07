import React from 'react';

const Services = () => {
    return (
        <div id="services" className="section" style={{ backgroundColor: '#ffffff', padding: '100px 0' }}>
            <div className="container w-container">
                <div className="text-box center-align" data-aos="fade-down" style={{ maxWidth: '800px', margin: '0 auto 60px auto', textAlign: 'center' }}>
                    <div className="title-tag">Our Services</div>
                    <h2 className="heading h1" style={{ fontFamily: '"Outfit", sans-serif' }}>Digital Solutions Designed To Grow</h2>
                    <p className="paragraph large" style={{ marginTop: '16px', color: '#64748b' }}>
                        Professional strategies tailored to build your brand and drive real business results.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                    {/* Service 1: Website Development */}
                    <div className="service-card" style={cardStyle} data-aos="fade-up" data-aos-delay="100">
                        <div style={iconContainerStyle}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                        </div>
                        <h3 className="heading h5" style={{ fontFamily: '"Outfit", sans-serif', marginTop: '20px', marginBottom: '12px' }}>Real Estate Web Development</h3>
                        <p className="paragraph" style={{ fontSize: '15px', lineHeight: '1.6', color: '#475569' }}>High-converting property listing sites and landing pages for new launches.</p>
                    </div>

                    {/* Service 2: Video Shoot & Edit */}
                    <div className="service-card" style={cardStyle} data-aos="fade-up" data-aos-delay="200">
                        <div style={iconContainerStyle}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                        </div>
                        <h3 className="heading h5" style={{ fontFamily: '"Outfit", sans-serif', marginTop: '20px', marginBottom: '12px' }}>Property Video Shoots</h3>
                        <p className="paragraph" style={{ fontSize: '15px', lineHeight: '1.6', color: '#475569' }}>Drone cinematography, 4K walkthroughs, and reels that sell the lifestyle.</p>
                    </div>

                    {/* Service 3: Digital Marketing */}
                    <div className="service-card" style={cardStyle} data-aos="fade-up" data-aos-delay="300">
                        <div style={iconContainerStyle}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"></path><path d="M17 6h6v6"></path></svg>
                        </div>
                        <h3 className="heading h5" style={{ fontFamily: '"Outfit", sans-serif', marginTop: '20px', marginBottom: '12px' }}>Real Estate Marketing</h3>
                        <p className="paragraph" style={{ fontSize: '15px', lineHeight: '1.6', color: '#475569' }}>Laser-targeted lead generation campaigns for developers and brokers.</p>
                    </div>

                    {/* Service 4: Website Maintenance */}
                    <div className="service-card" style={cardStyle} data-aos="fade-up" data-aos-delay="400">
                        <div style={iconContainerStyle}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                        </div>
                        <h3 className="heading h5" style={{ fontFamily: '"Outfit", sans-serif', marginTop: '20px', marginBottom: '12px' }}>Site Maintenance</h3>
                        <p className="paragraph" style={{ fontSize: '15px', lineHeight: '1.6', color: '#475569' }}>Ensuring your project details and pricing are always up-to-date and secure.</p>
                    </div>

                    {/* Service 5: Graphic Design */}
                    <div className="service-card" style={cardStyle} data-aos="fade-up" data-aos-delay="500">
                        <div style={iconContainerStyle}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                        </div>
                        <h3 className="heading h5" style={{ fontFamily: '"Outfit", sans-serif', marginTop: '20px', marginBottom: '12px' }}>Creative Branding</h3>
                        <p className="paragraph" style={{ fontSize: '15px', lineHeight: '1.6', color: '#475569' }}>Project brochures, hoardings, and social media creatives that capture attention.</p>
                    </div>

                    {/* Service 6: Resource Hiring */}
                    <div className="service-card" style={cardStyle} data-aos="fade-up" data-aos-delay="600">
                        <div style={iconContainerStyle}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <h3 className="heading h5" style={{ fontFamily: '"Outfit", sans-serif', marginTop: '20px', marginBottom: '12px' }}>Hire Dedicated Team</h3>
                        <p className="paragraph" style={{ fontSize: '15px', lineHeight: '1.6', color: '#475569' }}>Augment your sales office with dedicated digital marketers and designers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const cardStyle = {
    backgroundColor: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    padding: '40px 32px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    cursor: 'default'
};

const iconContainerStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    backgroundColor: '#eff6ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px'
};

export default Services;
