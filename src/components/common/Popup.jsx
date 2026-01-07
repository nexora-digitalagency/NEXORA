import React from 'react';

const Popup = () => {
    return (
        <div className="intro-call-box">
            <a href="#" className="pop-up-close w-inline-block">
                <img src="/assets/67ffc6564197358c2d04bd11_Small%20Close.svg" loading="lazy" width="12" alt="" className="pop-up-close-icon" />
            </a>
            <div className="call-profiles"><img src="/assets/6888a8b498595b12c22d73ed_Frame%2018041.avif" loading="lazy" alt="" className="call-profile-image" /></div>
            <h3 className="heading h6">Ready to Grow?</h3>
            <p className="paragraph small grey-text">Let's build a strategy that actually works.</p><a href="/contact" className="small-button blue full w-button">Book Strategy</a>
        </div>
    );
};

export default Popup;
