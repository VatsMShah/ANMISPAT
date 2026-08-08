import React from 'react';
import TopStrip from './components/TopStrip';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopStrip />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Footer />
      </main>
    </div>
  );
}