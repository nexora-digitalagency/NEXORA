import React from 'react';
import PageHero from '../components/common/PageHero';
import Founder from '../components/sections/Founder';
import Values from '../components/sections/Values';
import Trust from '../components/sections/Trust';
import PreFooterCTA from '../components/sections/PreFooterCTA';

const About = () => {
    return (
        <div>
            <PageHero
                title="About Nexora"
                subtitle="We are a new breed of digital agency. Focused on transparency, built for speed, and obsessed with your growth."
                breadcrumb="Home / Company / About"
            />

            <Founder />
            <Values />
            <Trust />

            <PreFooterCTA />
        </div>
    );
};

export default About;
