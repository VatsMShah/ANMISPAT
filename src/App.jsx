import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopStrip from './components/TopStrip';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home';
import Contact from './components/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <TopStrip />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}