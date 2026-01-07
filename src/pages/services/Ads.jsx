import React from 'react';
import PageHero from '../../components/common/PageHero';
import PreFooterCTA from '../../components/sections/PreFooterCTA';

const ServiceAds = () => {
    return (
        <div>
            <PageHero
                title="Paid Advertising"
                subtitle="Stop waiting for organic growth. Get instant traffic and high-quality leads with precision-targeted campaigns."
                breadcrumb="Home / Services / Ads"
            />

            <div className="section">
                <div className="container w-container">
                    <div className="w-layout-grid _2-column-grid" style={{ alignItems: 'center', gap: '80px' }}>
                        <div data-aos="fade-right" style={{ maxWidth: '500px' }}>
                            <div className="title-tag">The Engine</div>
                            <h2 className="heading h2">Leads on Demand</h2>
                            <div className="spacer _24"></div>
                            <p className="paragraph large">
                                Don't spend money on "Awareness". Invest in "Acquisition".
                            </p>
                            <div className="spacer _16"></div>
                            <p className="paragraph">
                                We design campaigns that target users who are actively looking to buy or invest. Using advanced audience targeting on Meta and high-intent keywords on Google, we deliver leads, not just clicks.
                            </p>
                            <div className="spacer _32"></div>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {['Google PPC', 'Facebook/Insta Ads', 'Retargeting Funnels', 'Performance Tracking'].map(item => (
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
                            <img src="/assets/tools.png" alt="Ad Performance" style={{ width: '100%', display: 'block' }} />
                        </div>
                    </div>
                </div>
            </div>

            <PreFooterCTA />
        </div>
    );
};

export default ServiceAds;
