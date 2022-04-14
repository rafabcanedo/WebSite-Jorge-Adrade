import React from 'react';
import './App.css';

// import Pages
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Features from './components/Features/Features';
import Comunidade from './components/Comunidade/Comunidade';
import Feedbacks from './components/Feedbacks/Feedbacks';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
  <>
    <Home />
    <About />
    <Features />
    <Comunidade />
    <Feedbacks />
    <Contact />
  
  </>
  );
};

export default App;