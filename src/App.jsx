import React from 'react';
import TopStrip from './components/TopStrip';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutOverview from './components/AboutOverview';
import MisVis from './components/MisVis';
import ClientMarquee from './components/ClientMarquee';
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopStrip/>
      <Navbar/>
      <main className="flex-grow">
        <Hero/>
        <AboutOverview/>
        <ClientMarquee/>
        <MisVis/>
        <WhyChooseUs/>
        <Footer/>
      </main>
    </div>
  );
}