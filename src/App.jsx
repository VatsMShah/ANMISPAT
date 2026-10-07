import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopStrip from './components/TopStrip';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Achievements from './components/Achievements';
import Careers from './components/Careers';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <TopStrip />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}