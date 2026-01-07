import React from 'react';
import PageHero from '../../components/common/PageHero';
import PreFooterCTA from '../../components/sections/PreFooterCTA';

const ServiceSEO = () => {
    return (
        <div>
            <PageHero
                title="Search Engine Optimization"
                subtitle="Dominating search results isn't magic. It's engineering. We help you rank higher to capture intent-driven traffic."
                breadcrumb="Home / Services / SEO"
            />

            {/* Problem / Solution Section */}
            <div className="section">
                <div className="container w-container">
                    <div className="w-layout-grid _2-column-grid" style={{ alignItems: 'center', gap: '80px' }}>
                        <div data-aos="fade-right" style={{ maxWidth: '500px' }}>
                            <div className="title-tag">The Challenge</div>
                            <h2 className="heading h2">Invisible to Your Best Customers?</h2>
                            <div className="spacer _24"></div>
                            <p className="paragraph large">
                                90% of property buyers start their journey online. If you aren't on Page 1, you don't exist.
                            </p>
                            <div className="spacer _16"></div>
                            <p className="paragraph">
                                Traditional SEO is slow and vague. Our data-driven approach focuses on "Commercial Intent" keywords—terms that buyers use when they are ready to purchase, not just browse.
                            </p>
                            <div className="spacer _32"></div>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {['Keyword Research', 'Technical Audit', 'Content Strategy', 'Backlink Building'].map(item => (
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
                            <img src="/assets/tools.png" alt="SEO Dashboard" style={{ width: '100%', display: 'block' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Features Grid */}
            <div className="section light-grey">
                <div className="container w-container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 className="heading h2">Our SEO Methodology</h2>
                        <p className="paragraph" style={{ maxWidth: '600px', margin: '0 auto' }}>A comprehensive approach to organic growth.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            { title: 'Technical Optimization', desc: 'We fix site speed, mobile usability, and crawl errors that hold you back.' },
                            { title: 'On-Page Strategy', desc: 'Optimizing titles, meta tags, and content structure for maximum relevance.' },
                            { title: 'Local Awareness', desc: 'Dominating Google Maps and "Near Me" searches for local real estate projects.' },
                            { title: 'Authority Building', desc: 'Acquiring high-quality backlinks from reputable industry sources.' }
                        ].map((feature, i) => (
                            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} style={{ background: '#fff', padding: '40px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 className="heading h4">{feature.title}</h3>
                                <p className="paragraph" style={{ fontSize: '15px' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <PreFooterCTA />
        </div>
    );
};

export default ServiceSEO;
