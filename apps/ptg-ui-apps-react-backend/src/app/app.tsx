import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div>
      <AppBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
