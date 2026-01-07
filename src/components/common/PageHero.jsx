import React from 'react';

const PageHero = ({ title, subtitle, breadcrumb }) => {
    return (
        <div className="section page-hero" style={{ height: 'auto', minHeight: '60vh', paddingBottom: '100px', borderBottom: 'none' }}>
            <div className="container w-container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>

                {/* Breadcrumb */}
                <div data-aos="fade-down" style={{
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: '#64748b',
                    marginBottom: '20px',
                    fontWeight: '600'
                }}>
                    {breadcrumb || 'Home / Page'}
                </div>

                {/* Title */}
                <h1 data-aos="fade-up" data-aos-delay="100" className="heading h1" style={{
                    color: '#10212e',
                    fontSize: '56px',
                    lineHeight: '1.2',
                    marginBottom: '24px',
                }}>
                    {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <p data-aos="fade-up" data-aos-delay="200" className="paragraph large" style={{
                        color: '#475569',
                        maxWidth: '700px',
                        margin: '0 auto',
                        fontSize: '20px'
                    }}>
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PageHero;
