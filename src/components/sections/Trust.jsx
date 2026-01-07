import React from 'react';

const Trust = () => {
    return (
        <div className="section light-grey">
            <div className="container w-container">
                <div className="w-layout-grid _2-column-grid" style={{ alignItems: 'center', gap: '60px' }}>

                    {/* Image Column - Constrained Width */}
                    <div className="image-wrapper" data-aos="fade-right" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', maxWidth: '450px', width: '100%', margin: '0 auto' }}>
                        <img src="/assets/trust.png" alt="Trust and Partnership" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                    <div className="text-box" data-aos="fade-left">
                        <div className="title-tag">Our Promise</div>
                        <h2 className="heading h1" style={{ fontFamily: '"Outfit", sans-serif' }}>Built on Strategy, Transparency, and Focus</h2>
                        <div className="spacer _24"></div>
                        <p className="paragraph large">
                            Nexora is a newly launched digital marketing agency. That means every client receives full attention, honest communication, and carefully planned strategies.
                        </p>
                        <div className="spacer _16"></div>
                        <p className="paragraph">
                            We believe trust is earned through clarity, process, and measurable work. From day one, clients know what is being done, why it is being done, and how success is measured.
                        </p>
                        <div className="spacer _16"></div>
                        <p className="paragraph grey-text" style={{ borderLeft: '3px solid #3b82f6', paddingLeft: '16px' }}>
                            "Every strategy is customized. Every campaign is tracked. Every result is reported clearly."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trust;
