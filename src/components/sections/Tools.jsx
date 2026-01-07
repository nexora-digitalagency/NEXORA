import React from 'react';

const Tools = () => {
    return (
        <div className="section light-grey">
            <div className="container w-container">
                <div className="w-layout-grid _2-column-grid" style={{ alignItems: 'center', gap: '60px' }}>

                    {/* Text Column (Left) */}
                    <div className="text-box" data-aos="fade-right">
                        <div className="title-tag">Tools & Technology</div>
                        <h2 className="heading h1" style={{ fontFamily: '"Outfit", sans-serif', marginBottom: '24px' }}>Powered by Industry Standard Marketing Tools</h2>
                        <p className="paragraph" style={{ marginBottom: '32px' }}>
                            We use professional digital marketing tools trusted across the industry to manage, track, and improve campaigns.
                        </p>

                        <div className="tool-list">
                            <div className="tool-item" style={{ borderLeft: '3px solid #3b82f6', paddingLeft: '16px', marginBottom: '20px' }}>
                                <h4 className="heading h5" style={{ fontFamily: '"Outfit", sans-serif', margin: '0 0 4px 0', color: '#1e293b' }}>Advertising Platforms</h4>
                                <p className="paragraph small" style={{ marginBottom: '0', fontSize: '14px', color: '#64748b' }}>Google Ads • Meta Ads • LinkedIn Ads</p>
                            </div>

                            <div className="tool-item" style={{ borderLeft: '3px solid #3b82f6', paddingLeft: '16px', marginBottom: '20px' }}>
                                <h4 className="heading h5" style={{ fontFamily: '"Outfit", sans-serif', margin: '0 0 4px 0', color: '#1e293b' }}>Analytics & Tracking</h4>
                                <p className="paragraph small" style={{ marginBottom: '0', fontSize: '14px', color: '#64748b' }}>Google Analytics • Search Console • Tag Manager</p>
                            </div>

                            <div className="tool-item" style={{ borderLeft: '3px solid #3b82f6', paddingLeft: '16px' }}>
                                <h4 className="heading h5" style={{ fontFamily: '"Outfit", sans-serif', margin: '0 0 4px 0', color: '#1e293b' }}>SEO & Research</h4>
                                <p className="paragraph small" style={{ marginBottom: '0', fontSize: '14px', color: '#64748b' }}>Keyword Research Tools • Competitor Analysis</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Column (Right) - Constrained Width */}
                    <div className="image-wrapper" data-aos="fade-left" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', position: 'relative', maxWidth: '450px', width: '100%', margin: '0 auto' }}>
                        <img src="/assets/tools.png" alt="Marketing Analytics Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        <div className="image-caption" style={{ padding: '12px', background: '#fff', textAlign: 'center', fontSize: '13px', color: '#64748b', borderTop: '1px solid #f1f5f9' }}>
                            Marketing Analytics Dashboard
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Tools;
