import React from 'react';
import PageHero from '../components/common/PageHero';
import PreFooterCTA from '../components/sections/PreFooterCTA';

const Blog = () => {
    const posts = [
        {
            title: "Why Digital Marketing Is Essential in Real Estate (2026)",
            category: "Strategy",
            date: "Jan 5, 2026",
            excerpt: "90% of property buyers start their journey online. Learn why relying on newspapers and billboards is costing you sales.",
            image: "/assets/real_estate.png",
            link: "/blog/digital-marketing-real-estate"
        },
        {
            title: "Performance Marketing: Selling Luxury Homes",
            category: "Paid Ads",
            date: "Dec 28, 2025",
            excerpt: "Stop paying for 'brand awareness'. Discover how intent-based targeting on Meta & Google delivers high-net-worth leads.",
            image: "/assets/process.png",
            link: "/blog/performance-marketing"
        },
        {
            title: "SEO for Real Estate: Dominate Local Search",
            category: "SEO",
            date: "Dec 15, 2025",
            excerpt: "When buyers search '3BHK in [City]', do they find you? Integrating local SEO is the key to organic walkthroughs.",
            image: "/assets/tools.png",
            link: "/blog/seo-real-estate"
        }
    ];

    return (
        <div>
            <PageHero
                title="Insights & Trends"
                subtitle="Expert perspectives on the shifting landscape of Real Estate marketing."
                breadcrumb="Home / Blog"
            />

            <div className="section">
                <div className="container w-container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                        {posts.map((post, i) => (
                            <a href={post.link} key={i} data-aos="fade-up" data-aos-delay={i * 100} style={{
                                display: 'block',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid #e2e8f0',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none',
                                color: 'inherit'
                            }} className="blog-card">
                                <div style={{ height: '240px', overflow: 'hidden' }}>
                                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                                </div>
                                <div style={{ padding: '32px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '14px', color: '#64748b' }}>
                                        <span style={{ fontWeight: '600', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{post.category}</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="heading h4" style={{ marginBottom: '12px', lineHeight: '1.4', color: '#10212e' }}>{post.title}</h3>
                                    <p className="paragraph" style={{ fontSize: '15px', color: '#475569', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.excerpt}</p>
                                    <div style={{ marginTop: '24px', fontWeight: '600', color: '#3b82f6', display: 'flex', alignItems: 'center' }}>
                                        Read Article
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '8px' }}><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <PreFooterCTA />
        </div>
    );
};

export default Blog;
