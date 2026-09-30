import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopStrip from './components/TopStrip';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutOverview from './components/AboutOverview';
import MisVis from './components/MisVis';
import ClientMarquee from './components/ClientMarquee';
import WhyChooseUs from "./components/WhyChooseUs";
import SelectedWork from "./components/SelectedWork";
import Services from "./components/Services";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Home from './components/Home';
import Contact from './components/Contact';

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
        <SelectedWork/>
        <Services/>
        <Certifications/>
        <Contact/>
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <TopStrip/>
        <Navbar/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer/>
      </main>
    </div>
      </div>
    </Router>
  );
}