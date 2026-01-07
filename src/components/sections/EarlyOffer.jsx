import React from 'react';

const EarlyOffer = () => {
    return (
        <div className="section" style={{ backgroundColor: '#10212e', color: '#ffffff', padding: '80px 0' }}>
            <div className="container w-container">
                <div className="text-box _720px center-align" style={{ margin: '0 auto', textAlign: 'center' }}>
                    <div className="title-tag" style={{ color: '#60a5fa', borderColor: 'rgba(255,255,255,0.2)' }}>Limited Opportunity</div>
                    <h2 className="heading h1" style={{ fontFamily: '"Outfit", sans-serif', color: '#ffffff' }}>Early Partner Advantage</h2>
                    <div className="spacer _32"></div>
                    <p className="paragraph large" style={{ margin: '0 auto', color: '#e2e8f0' }}>
                        As a newly launched agency, Nexora is offering introductory plans for early clients who want dedicated attention and strategic support.
                    </p>
                    <div className="spacer _24"></div>
                    <p className="paragraph" style={{ margin: '0 auto', maxWidth: '600px', color: '#cbd5e1' }}>
                        This is an opportunity to work closely, build strong foundations, and grow together as your digital presence develops. Early clients receive priority communication, customized strategies, and direct access throughout the process.
                    </p>
                    <div className="spacer _32"></div>
                    <a href="#plans" className="button blue w-button" style={{ backgroundColor: '#3b82f6', border: 'none' }}>View Pricing Plans</a>
                </div>
            </div>
        </div>
    );
};

export default EarlyOffer;
