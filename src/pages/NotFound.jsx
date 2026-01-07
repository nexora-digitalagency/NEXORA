import React from 'react';

const NotFound = () => {
    return (
        <div style={{
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            textAlign: 'center',
            padding: '20px'
        }}>
            <h1 style={{
                fontSize: '120px',
                fontWeight: '700',
                color: '#eff6ff',
                lineHeight: '1',
                marginBottom: '-20px',
                fontFamily: '"Outfit", sans-serif'
            }}>404</h1>
            <h2 style={{
                fontSize: '32px',
                fontFamily: '"Domine", serif',
                marginBottom: '16px',
                color: '#1e293b',
                position: 'relative',
                zIndex: 1
            }}>Page Not Found</h2>
            <p style={{
                color: '#64748b',
                maxWidth: '400px',
                marginBottom: '32px',
                fontSize: '16px',
                lineHeight: '1.6'
            }}>
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <a href="/" className="button w-button">Back to Home</a>
        </div>
    );
};

export default NotFound;
