import React from 'react';

const IndustryFocus = () => {
    const services = [
        "Property video shoots & walkthroughs",
        "Reels and short-form content",
        "Instagram & Facebook growth",
        "Influencer collaborations",
        "Lead-based ad campaigns",
        "Real-estate landing pages & websites",
        "Branding & content strategy"
    ];

    return (
        <div className="section" style={{ backgroundColor: '#fff' }}>
            <div className="container w-container">
                <div className="w-layout-grid _2-column-grid" style={{ alignItems: 'center', gap: '60px' }}>

                    {/* Image Column (Left) - Constrained Width */}
                    <div className="image-wrapper" data-aos="fade-right" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', maxWidth: '480px', width: '100%', margin: '0 auto' }}>
                        <img src="/assets/real_estate.png" alt="Luxury Real Estate Marketing" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                    {/* Text Column (Right) */}
                    <div className="text-box" data-aos="fade-left">
                        <div className="title-tag">Industry Focus</div>
                        <h2 className="heading h1" style={{ fontFamily: '"Outfit", sans-serif' }}>Digital Growth for Real-Estate Businesses</h2>
                        <div className="spacer _24"></div>
                        <p className="paragraph large">
                            We work with builders, brokers, and developers to take their business online — using videos, reels, websites, ads and content that attracts real buyers.
                        </p>

                        <div className="spacer _32"></div>

                        <div className="service-list">
                            {services.map((item, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                                    <div style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        backgroundColor: '#eff6ff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '12px',
                                        flexShrink: 0
                                    }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span style={{ fontSize: '16px', color: '#1e293b', fontWeight: '500' }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        <a href="#contact" className="button w-button">Discuss Your Industry</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustryFocus;
