import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import Home from './components/Home';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer/Footer';
import Technologies from './components/Technologies';
import Teams from './components/Teams';

const App: React.FC = () => {
  return (
    <div>
      <AppBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          {/* Hide for now when the contact us form will be implemented then we can unhide this*/}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/bestPracticesDocs" element={<BestPracticesDocs />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
