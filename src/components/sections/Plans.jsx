import React from 'react';

const Plans = () => {
    const plans = [
        {
            name: "Basic",
            price: "$1,500",
            period: "/mo",
            description: "Essential tools to establish your online presence.",
            features: [
                "Basic SEO Setup",
                "Google Business Opt.",
                "1 Social Platform",
                "Monthly Report",
                "Email Support"
            ],
            buttonText: "Start Basic",
            highlight: false
        },
        {
            name: "Standard",
            price: "$2,500",
            period: "/mo",
            description: "Consistent content to keep your audience engaged.",
            features: [
                "Advanced SEO Strategy",
                "2 Blog Posts/mo",
                "2 Social Platforms",
                "Weekly Posting",
                "Bi-weekly Reports"
            ],
            buttonText: "Go Standard",
            highlight: false
        },
        {
            name: "Growth",
            price: "$4,000",
            period: "/mo",
            description: "Aggressive strategies to dominate your market.",
            features: [
                "Complete SEO Suite",
                "4 Blog Posts/mo",
                "All Social Platforms",
                "Paid Ads Management",
                "Video Content Strategy",
                "Priority Support"
            ],
            buttonText: "Choose Growth",
            highlight: true
        },
        {
            name: "Custom",
            price: "Custom",
            period: "",
            description: "Tailored solutions for large-scale operations.",
            features: [
                "Dedicated Account Manager",
                "Custom Dev Projects",
                "24/7 Priority Access",
                "Brand Consulting",
                "Multi-location SEO",
                "Performance Guarantees"
            ],
            buttonText: "Contact Us",
            highlight: false
        }
    ];

    return (
        <div id="plans" className="section" style={{ padding: '100px 5%', backgroundColor: '#ffffff' }}>
            <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}> {/* Increased maxWidth for 4 cols */}
                <div className="text-box" style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px auto' }}>
                    <div className="title-tag" style={{ color: '#3b82f6', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontSize: '14px' }}>Plans & Pricing</div>
                    <h2 className="heading h1" style={{ fontFamily: '"Domine", serif', fontSize: '48px', color: '#10212e', margin: '0 0 20px 0', lineHeight: '1.2' }}>
                        Scalable Solutions For Every Stage
                    </h2>
                    <p className="paragraph" style={{ maxWidth: '600px', margin: '0 auto', color: '#64748b', fontSize: '18px', lineHeight: '1.6' }}>
                        From establishing a foundation to dominating the market, we have a plan for you.
                    </p>
                </div>

                <div className="plans-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Allows 4 cols on wide screens
                    gap: '20px',
                    alignItems: 'stretch'
                }}>
                    {plans.map((plan, index) => (
                        <div key={index} style={{
                            backgroundColor: plan.highlight ? '#10212e' : '#f8fafc',
                            color: plan.highlight ? '#ffffff' : '#10212e',
                            padding: '30px', // Slightly less padding for fit
                            borderRadius: '12px',
                            border: plan.highlight ? 'none' : '1px solid #e2e8f0',
                            boxShadow: plan.highlight ? '0 20px 40px rgba(16, 33, 46, 0.15)' : 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            transition: 'transform 0.3s ease',
                            transform: plan.highlight ? 'scale(1.05)' : 'scale(1)',
                            zIndex: plan.highlight ? 2 : 1
                        }}>
                            {plan.highlight && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#3b82f6',
                                    color: 'white',
                                    padding: '5px 15px',
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    whiteSpace: 'nowrap'
                                }}>
                                    Best Value
                                </div>
                            )}

                            <h3 style={{ fontFamily: '"Domine", serif', fontSize: '22px', marginBottom: '10px' }}>{plan.name}</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '15px' }}>
                                <span style={{ fontSize: '36px', fontWeight: '700' }}>{plan.price}</span>
                                <span style={{ fontSize: '14px', opacity: 0.7, marginLeft: '5px' }}>{plan.period}</span>
                            </div>
                            <p style={{ marginBottom: '25px', opacity: 0.8, lineHeight: '1.5', fontSize: '14px', minHeight: '42px' }}>{plan.description}</p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 25px 0', flex: '1' }}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ minWidth: '18px' }}>
                                            <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke={plan.highlight ? "#3b82f6" : "#10212e"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span style={{ fontSize: '14px' }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href="#contact" style={{
                                display: 'block',
                                textAlign: 'center',
                                padding: '12px 20px',
                                borderRadius: '6px',
                                backgroundColor: plan.highlight ? '#3b82f6' : '#10212e',
                                color: '#ffffff',
                                textDecoration: 'none',
                                fontWeight: '600',
                                fontSize: '14px',
                                transition: 'background-color 0.2s',
                                marginTop: 'auto'
                            }}>
                                {plan.buttonText}
                            </a>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '50px', textAlign: 'center' }}>
                    <p style={{ color: '#64748b' }}>Need something specific? <a href="#contact" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: '600' }}>Talk to an expert.</a></p>
                </div>
            </div>
        </div>
    );
};

export default Plans;
