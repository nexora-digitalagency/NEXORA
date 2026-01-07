import React from 'react';
import Hero from '../components/sections/Hero';
import Plans from '../components/sections/Plans';
import Insights from '../components/sections/Insights';
import IndustryFocus from '../components/sections/IndustryFocus';
import Services from '../components/sections/Services';
import Values from '../components/sections/Values';
import Founder from '../components/sections/Founder';
import Trust from '../components/sections/Trust';
import Process from '../components/sections/Process';
import Tools from '../components/sections/Tools';
import EarlyOffer from '../components/sections/EarlyOffer';
import FAQ from '../components/sections/FAQ';
import PreFooterCTA from '../components/sections/PreFooterCTA';

const Home = () => {
    return (
        <>
            <Hero />
            <Values />
            <Trust />
            <Services />
            <Process />
            <IndustryFocus />
            <Tools />
            <Founder />
            <Plans />
            <FAQ />
            <EarlyOffer />
            <Insights />
            <PreFooterCTA />
        </>
    );
};

export default Home;
