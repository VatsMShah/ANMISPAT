import React from 'react';
import Hero from './Hero';
import AboutOverview from './AboutOverview';
import ClientMarquee from './ClientMarquee';
import MisVis from './MisVis';
import WhyChooseUs from './WhyChooseUs';
import SelectedWork from './SelectedWork';
import Services from './Services';
import Certifications from './Certifications';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutOverview />
      <ClientMarquee />
      <MisVis />
      <WhyChooseUs />
      <SelectedWork />
      <Services />
      <Certifications />
    </>
  );
}

