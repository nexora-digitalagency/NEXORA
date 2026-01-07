import React from 'react';
import Logo from './Logo';

const Navbar = () => {
    return (
        <div data-collapse="medium" data-animation="default" data-duration="0" data-easing="ease" data-easing2="ease" data-doc-height="1" role="banner" className="nav-bar w-nav">
            <div className="nav-container w-container">
                <div className="nav-logo-div">
                    <a href="/" aria-current="page" className="nav-logo w-inline-block w--current">
                        <Logo variant="standard" />
                    </a>
                    <div className="logo-line-divider"></div>
                    <div className="logo-subtitle">Real Estate <a href="#" target="_blank" rel="noreferrer" className="creator-link">Marketing</a></div>
                </div>
                <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
                    <a href="/" className="nav-menu-link w-nav-link">Home</a>
                    <a href="/about" className="nav-menu-link w-nav-link">About</a>
                    <a href="/work" className="nav-menu-link w-nav-link">Work</a>
                    <a href="/blog" className="nav-menu-link w-nav-link">Blog</a>
                    <div className="nav-cta-button-container">
                        <a href="/contact" className="call-slide-link w-inline-block">
                            <div className="nav-button secondary">Contact</div>
                        </a><a href="https://wa.me/919904256613?text=Hi,%20I'm%20interested%20in%20scaling%20my%20Real%20Estate%20business." target="_blank" rel="noreferrer" className="nav-button primary w-nav-link">Start Growth</a></div>
                </nav>
                <div className="nav-button-animated w-nav-button">
                    <div className="menu-top-line"></div>
                    <div className="menu-middle-line"></div>
                    <div className="menu-bottom-line"></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
