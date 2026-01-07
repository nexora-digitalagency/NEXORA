import React from 'react';
import PageHero from '../../components/common/PageHero';
import PreFooterCTA from '../../components/sections/PreFooterCTA';

const Post2 = () => {
    return (
        <div>
            <PageHero
                title="Performance Marketing: Selling Luxury Homes"
                subtitle="Stop paying for vanity metrics. Discover how to acquire high-intent leads that actually convert."
                breadcrumb="Home / Blog / Paid Ads"
            />

            <div className="section">
                <div className="container w-container" style={{ maxWidth: '800px' }}>
                    <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#334155' }}>
                        <p style={{ marginBottom: '30px' }}>
                            In the luxury real estate market, 'Brand Awareness' is a trap. You don't need a million people to know your project; you need the <strong>fifty people who can afford it</strong> to book a site visit. That is Performance Marketing.
                        </p>

                        <h2 className="heading h3" style={{ marginTop: '40px', marginBottom: '20px' }}>The "Pay for Results" Mindset</h2>
                        <p style={{ marginBottom: '20px' }}>
                            Traditional agencies focus on Reach and Impressions. We focus on <strong>CPL (Cost Per Lead)</strong> and <strong>CPV (Cost Per Visit)</strong>. Every rupee spent on ads must have a measurable return.
                        </p>

                        <h2 className="heading h3" style={{ marginTop: '40px', marginBottom: '20px' }}>Structuring a Luxury Campaign</h2>
                        <p style={{ marginBottom: '20px' }}>
                            Selling a ₹5 Cr apartment requires a different funnel than affordable housing.
                        </p>
                        <div style={{ display: 'grid', gap: '20px', marginBottom: '30px' }}>
                            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                <h4 className="heading h5" style={{ marginBottom: '10px', color: '#3b82f6' }}>1. The Hook (High Friction)</h4>
                                <p style={{ fontSize: '16px', margin: 0 }}>Don't use easy forms. Use long forms asking for tailored investment goals. This filters out window shoppers.</p>
                            </div>
                            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                <h4 className="heading h5" style={{ marginBottom: '10px', color: '#3b82f6' }}>2. The Exclusivity</h4>
                                <p style={{ fontSize: '16px', margin: 0 }}>Market it as "By Invitation Only" or "Priority Access". Luxury buyers value exclusivity over discounts.</p>
                            </div>
                            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                <h4 className="heading h5" style={{ marginBottom: '10px', color: '#3b82f6' }}>3. The Retargeting</h4>
                                <p style={{ fontSize: '16px', margin: 0 }}>They won't buy on day one. Retarget them with testimonial videos, construction updates, and investment analysis reports.</p>
                            </div>
                        </div>

                        <div style={{ marginTop: '50px', padding: '30px', backgroundColor: '#eff6ff', borderRadius: '12px' }}>
                            <h3 className="heading h4">Data is King</h3>
                            <p style={{ marginBottom: '0' }}>We track everything. If a keyword generates clicks but no site visits, we kill it. If a creative brings high-quality leads, we double the budget.</p>
                        </div>
                    </div>
                </div>
            </div>

            <PreFooterCTA />
        </div>
    );
};

export default Post2;
