import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopStrip from './components/TopStrip';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Achievements from './components/Achievements';
import Careers from './components/Careers';
import Products from './components/Products';
import Services from './components/Services';
import CSR from './components/CSR';
import CSRInitiatives from './components/CSRInitiatives';
import FounderChairman from './components/FounderChairman';
import BoardOfDirectors from './components/BoardOfDirectors';
import ScrollManager from './components/ScrollManager';

export default function App() {
  return (
    <Router>
      <ScrollManager />
      <div className="min-h-screen flex flex-col bg-white">
        <TopStrip />
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/about/founder-chairman" element={<FounderChairman />} />
            <Route path="/founder-chairman" element={<FounderChairman />} />
            <Route path="/about/board-of-directors" element={<BoardOfDirectors />} />
            <Route path="/board-of-directors" element={<BoardOfDirectors />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/csr" element={<CSR/>}/>
            <Route path="/csr/initiatives" element={<CSRInitiatives />} />
            <Route path="/csr-initiatives" element={<CSRInitiatives />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}