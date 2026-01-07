import React from 'react';
import PageHero from '../components/common/PageHero';
import PreFooterCTA from '../components/sections/PreFooterCTA';

const Work = () => {
    const projects = [
        { title: "Luxury Villa Campaign", category: "Paid Ads", stats: "450% ROI" },
        { title: "Skyline Towers website", category: "Web Design", stats: "2x Conversion" },
        { title: "Urban Living Social", category: "Social Media", stats: "50k Reach" },
        { title: "Green Valley SEO", category: "SEO", stats: "#1 Ranking" },
        { title: "Harbor Point Launch", category: "Content", stats: "10k Views" },
        { title: "Elite Estates Brand", category: "Branding", stats: "New Launch" }
    ];

    return (
        <div>
            <PageHero
                title="Our Work"
                subtitle="Results speak louder than promises. Here are some of the success stories we've crafted for our clients."
                breadcrumb="Home / Company / Work"
            />

            <div className="section light-grey">
                <div className="container w-container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                        {projects.map((p, i) => (
                            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="work-card" style={{
                                backgroundColor: '#fff',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s ease'
                            }}>
                                <div style={{
                                    height: '240px',
                                    backgroundColor: '#cbd5e1',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#64748b',
                                    fontSize: '14px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    Project Image Placeholder
                                </div>
                                <div style={{ padding: '30px' }}>
                                    <div style={{
                                        display: 'inline-block',
                                        padding: '6px 12px',
                                        borderRadius: '20px',
                                        backgroundColor: '#eff6ff',
                                        color: '#3b82f6',
                                        fontSize: '12px',
                                        fontWeight: '600',
                                        marginBottom: '16px',
                                        textTransform: 'uppercase'
                                    }}>
                                        {p.category}
                                    </div>
                                    <h3 className="heading h4" style={{ marginBottom: '12px' }}>{p.title}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
                                        <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{p.stats}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <PreFooterCTA />
        </div>
    );
};

export default Work;
