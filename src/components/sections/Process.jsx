import React from 'react';

const Process = () => {
    return (
        <div className="section light-grey">
            <div className="container w-container">
                <div className="w-layout-grid _2-column-grid" style={{ alignItems: 'center', gap: '80px' }}>

                    {/* Text Column (Left) */}
                    <div className="text-box" data-aos="fade-right">
                        <div className="title-tag">Our Process</div>
                        <h2 className="heading h1" style={{ fontFamily: '"Outfit", sans-serif', marginBottom: '32px' }}>How We Work With You</h2>
                        <p className="paragraph large" style={{ marginBottom: '40px' }}>
                            We follow a clear and simple process designed to reduce confusion and deliver focused results.
                        </p>

                        <div className="process-steps">
                            {/* Step 1 */}
                            <div className="process-step" style={{ display: 'flex', gap: '20px', marginBottom: '32px' }}>
                                <div style={{ minWidth: '40px', fontSize: '24px', fontWeight: '700', color: '#3b82f6', fontFamily: '"Outfit", sans-serif', lineHeight: '1.2' }}>01.</div>
                                <div>
                                    <h4 className="heading h5" style={{ fontFamily: '"Outfit", sans-serif', margin: '0 0 8px 0' }}>Discovery & Strategy</h4>
                                    <p className="paragraph" style={{ fontSize: '15px' }}>Understanding your business, audience, and goals to create a custom strategy.</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="process-step" style={{ display: 'flex', gap: '20px', marginBottom: '32px' }}>
                                <div style={{ minWidth: '40px', fontSize: '24px', fontWeight: '700', color: '#3b82f6', fontFamily: '"Outfit", sans-serif', lineHeight: '1.2' }}>02.</div>
                                <div>
                                    <h4 className="heading h5" style={{ fontFamily: '"Outfit", sans-serif', margin: '0 0 8px 0' }}>Launch & Track</h4>
                                    <p className="paragraph" style={{ fontSize: '15px' }}>Campaigns are launched with proper tracking, and performance is continuously improved.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="process-step" style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ minWidth: '40px', fontSize: '24px', fontWeight: '700', color: '#3b82f6', fontFamily: '"Outfit", sans-serif', lineHeight: '1.2' }}>03.</div>
                                <div>
                                    <h4 className="heading h5" style={{ fontFamily: '"Outfit", sans-serif', margin: '0 0 8px 0' }}>Optimize & Scale</h4>
                                    <p className="paragraph" style={{ fontSize: '15px' }}>We analyze results, refine strategies, and scale what works.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Column (Right) - Constrained Width */}
                    <div className="image-wrapper" data-aos="fade-left" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', maxWidth: '450px', width: '100%', margin: '0 auto' }}>
                        <img src="/assets/process.png" alt="Digital Marketing Process" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        <div style={{ padding: '12px', background: '#fff', textAlign: 'center', fontSize: '13px', color: '#666', borderTop: '1px solid #eee' }}>
                            Digital Marketing Process
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Process;
