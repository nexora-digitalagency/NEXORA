import React from 'react';

const Insights = () => {
    return (
        <div className="section">
            <div className="container w-container">
                <div className="text-box _500px">
                    <div className="title-tag">Our Blog</div>
                    <h2 className="heading h1">Latest Insights</h2>
                    <div className="spacer _48"></div>
                </div>
                <div className="w-dyn-list">
                    <div role="list" className="insights-grid w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                            <a href="#" className="news-block w-inline-block">
                                <div className="insight-thumbnail"><img alt="Vision Behind Nexora" loading="lazy" width="808" src="https://cdn.prod.website-files.com/67fe35102e4bd72b706f7dda/67fe35102e4bd72b706f7ef0_60f0d068b0443a185645f679_good-skin-club-ni7gy570MMU-unsplash.avif"
                                    className="image-cover" /></div>
                                <div className="news-info">
                                    <div className="thumbnail-project-tag-link">
                                        <div>Branding</div>
                                    </div>
                                    <div>Today</div>
                                </div>
                                <h3 className="paragraph x-large">Content Creation & Branding for Real-Estate Developers</h3>
                            </a>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                            <a href="#" className="news-block w-inline-block">
                                <div className="insight-thumbnail"><img alt="Digital Marketing Trends" loading="lazy" width="808" src="https://cdn.prod.website-files.com/67fe35102e4bd72b706f7dda/68889453ade38939c6a4406b_claudio-schwarz-77ruI1Fed3o-unsplash.avif"
                                    className="image-cover" /></div>
                                <div className="news-info">
                                    <div className="thumbnail-project-tag-link">
                                        <div>Marketing</div>
                                    </div>
                                    <div>Yesterday</div>
                                </div>
                                <h3 className="paragraph x-large">Performance Marketing for Property Sales</h3>
                            </a>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                            <a href="#" className="news-block w-inline-block">
                                <div className="insight-thumbnail"><img alt="Success Story" loading="lazy" width="808" src="https://cdn.prod.website-files.com/67fe35102e4bd72b706f7dda/67fe35102e4bd72b706f7eee_60fa06139493140dd445fe76_batch-by-wisconsin-hemp-scientific-YDG-4FTsZN8-unsplash.avif"
                                    className="image-cover" /></div>
                                <div className="news-info">
                                    <div className="thumbnail-project-tag-link">
                                        <div>Strategy</div>
                                    </div>
                                    <div>Last Week</div>
                                </div>
                                <h3 className="paragraph x-large">Why Digital Marketing Matters in Real Estate</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insights;
