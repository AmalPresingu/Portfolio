import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutMe />
    </div>
  )
}

export default App;