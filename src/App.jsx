import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
    <div className="app-container">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reactporto/resume' element={<Resume />} />
          <Route path='/reactporto/portfolio' element={<Portfolio />} />
          <Route path='/reactporto/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);
}

export default App;
