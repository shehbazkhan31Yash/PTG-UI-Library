import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import Home from './components/Home';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';
import Technologies from './components/Technologies';

const App: React.FC = () => {
  return (
    <div>
      <AppBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
