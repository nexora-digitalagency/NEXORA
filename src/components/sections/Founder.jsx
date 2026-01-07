import React from 'react';

const Founder = () => {
    return (
        <div className="section">
            <div className="container w-container">
                <div className="w-layout-grid _2-column-grid" style={{ alignItems: 'center', gap: '60px' }}>

                    {/* Image Column (Left) - Constrained Width */}
                    <div className="image-wrapper" data-aos="fade-right" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', maxWidth: '450px', width: '100%', margin: '0 auto' }}>
                        <img src="/assets/founder.png" alt="Nexora Founder" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                    {/* Text Column (Right) */}
                    <div className="text-box" data-aos="fade-left">
                        <div className="title-tag">Founder & Vision</div>
                        <h2 className="heading h1" style={{ fontFamily: '"Outfit", sans-serif' }}>Meet the Mind Behind Nexora</h2>
                        <div className="spacer _24"></div>
                        <p className="paragraph large">
                            Nexora was created by a digital marketing professional with a clear focus on helping real estate businesses grow online in a practical and transparent way.
                        </p>
                        <div className="spacer _16"></div>
                        <p className="paragraph">
                            After studying how buyers search for properties, compare projects, and make decisions online, Nexora was built to bridge the gap between visibility and real leads. This is not an agency built on shortcuts or templates. It is built on learning, testing, and improving strategies that actually work for real estate marketing.
                        </p>
                        <div className="spacer _16"></div>
                        <p className="paragraph">
                            Every project is handled with personal involvement, attention to detail, and a long-term growth mindset.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Founder;
