import React from 'react';
import TopStrip from './components/TopStrip';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopStrip />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {/* Section 4: About Us will go here */}
      </main>
    </div>
  );
}