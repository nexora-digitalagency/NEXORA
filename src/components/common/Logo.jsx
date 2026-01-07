import React from 'react';

const Logo = ({ variant = 'standard', color = 'currentColor', className = '' }) => {

    // Use the PNG logo provided by the user
    // Assuming LOGO.png is the icon/mark
    const LogoImage = () => (
        <img
            src="/assets/LOGO.png"
            alt="Nexora Logo"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
    );

    // Layouts
    if (variant === 'icon') {
        return (
            <div className={`logo-icon ${className}`} style={{ width: '40px', height: '40px' }}>
                <LogoImage />
            </div>
        );
    }

    if (variant === 'full') {
        return (
            <div className={`logo-full ${className}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '40px', height: '40px' }}>
                        <LogoImage />
                    </div>
                    <span style={{
                        fontFamily: '"Domine", "serif"',
                        fontWeight: '700',
                        fontSize: '24px',
                        letterSpacing: '1px',
                        color: color,
                        textTransform: 'uppercase',
                        lineHeight: '1'
                    }}>
                        Nexora
                    </span>
                </div>
                <div style={{
                    fontSize: '9px',
                    color: color,
                    opacity: 0.7,
                    marginTop: '4px',
                }}>
                    Digital Marketing That Helps Businesses Grow Faster.
                </div>
            </div>
        );
    }

    // Default 'standard' (Icon + Name)
    return (
        <div className={`logo-standard ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '40px', height: '40px' }}>
                <LogoImage />
            </div>
            <span style={{
                fontFamily: '"Domine", "serif"',
                fontWeight: '700',
                fontSize: '24px',
                letterSpacing: '1px',
                color: color,
                textTransform: 'uppercase'
            }}>
                Nexora
            </span>
        </div>
    );
};

export default Logo;
