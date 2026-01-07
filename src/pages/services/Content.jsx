import React from 'react';
import PageHero from '../../components/common/PageHero';
import PreFooterCTA from '../../components/sections/PreFooterCTA';

const ServiceContent = () => {
    return (
        <div>
            <PageHero
                title="Content Marketing"
                subtitle="Storytelling that builds trust. We create educational and engaging content that turns browsers into buyers."
                breadcrumb="Home / Services / Content"
            />

            <div className="section">
                <div className="container w-container">
                    <div className="w-layout-grid _2-column-grid" style={{ alignItems: 'center', gap: '80px' }}>
                        <div data-aos="fade-right" style={{ maxWidth: '500px' }}>
                            <div className="title-tag">The Strategy</div>
                            <h2 className="heading h2">More Than Just Blog Posts</h2>
                            <div className="spacer _24"></div>
                            <p className="paragraph large">
                                In Real Estate, trust is the currency. Content is how you earn it.
                            </p>
                            <div className="spacer _16"></div>
                            <p className="paragraph">
                                We help you become the local authority. Instead of just selling, we educate your audience about market trends, investment opportunities, and project details, positioning you as the expert they want to work with.
                            </p>
                            <div className="spacer _32"></div>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {['Video Scripts & Production', 'Thought Leadership Articles', 'Email Newsletters', 'Case Studies'].map(item => (
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
                            <img src="/assets/process.png" alt="Content Planning" style={{ width: '100%', display: 'block' }} />
                        </div>
                    </div>
                </div>
            </div>

            <PreFooterCTA />
        </div>
    );
};

export default ServiceContent;
