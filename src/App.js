import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Work from './components/pages/Work';
import About from './components/pages/About';
import Resume from './images/Najel-Resume.pdf'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Home/>  {/*Loads home page on load */}
        <Routes>
          {/* These might not be necessary */}
          {/* <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/work" element={<Work/>}/> */}
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
        <a href={Resume} target="_blank"></a>
        <Footer />
      </Router>
    </>
  );
}

export default App;

