import React from 'react';
import PageHero from '../../components/common/PageHero';
import PreFooterCTA from '../../components/sections/PreFooterCTA';

const ServiceSocial = () => {
    return (
        <div>
            <PageHero
                title="Social Media Marketing"
                subtitle="Build a brand people love. We manage your presence on Instagram and LinkedIn to keep your audience engaged."
                breadcrumb="Home / Services / Social"
            />

            <div className="section">
                <div className="container w-container">
                    <div className="w-layout-grid _2-column-grid" style={{ alignItems: 'center', gap: '80px' }}>
                        <div data-aos="fade-right" style={{ maxWidth: '500px' }}>
                            <div className="title-tag">The Approach</div>
                            <h2 className="heading h2">Visual Storytelling</h2>
                            <div className="spacer _24"></div>
                            <p className="paragraph large">
                                Real Estate is visual. Your social channels should be your 24/7 showroom.
                            </p>
                            <div className="spacer _16"></div>
                            <p className="paragraph">
                                From high-end property walkthrough reels to market update carousels, we create content that stops the scroll. We handle everything from improved aesthetics to community management.
                            </p>
                            <div className="spacer _32"></div>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {['Reels & Short Form', 'Aesthetics Management', 'Influencer Outreach', 'Community Engagement'].map(item => (
                                    <li key={item} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', fontWeight: '500' }}>
                                        <div style={{ width: '24px', height: '24px', background: '#e0f2fe', borderRadius: '50%', marginRight: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div data-aos="fade-left" className="image-wrapper" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <img src="/assets/real_estate.png" alt="Social Media Growth" style={{ width: '100%', display: 'block' }} />
                        </div>
                    </div>
                </div>
            </div>

            <PreFooterCTA />
        </div>
    );
};

export default ServiceSocial;
