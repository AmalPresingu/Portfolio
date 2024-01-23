import React, { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showCards, setShowCards] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCards(true)
    }, 3500);
    return () => clearTimeout(timer);
  }, []);
  const projectsData = [
  {
    projectName: 'Sudoku',
    projectUrl: "https://latin-squares.vercel.app/",
    githubUrl: "https://github.com/AmalPresingu/SudokuFinalProject",
    imageUrl: "sudoku.png",
    tags: ['C#', 'HTML5', 'CSS'],
    description: "A web application recreating Sudoku, focused on inspiring middle school students to pursue STEM careers."
  },

  {
    projectName: 'BiznessmenNFT',
    projectUrl: "https://testingwebsite-kh0rb4fju-kingamal.vercel.app/",
    githubUrl: "https://github.com/AmalPresingu/BiznessmenNFT",
    imageUrl: "biznessmen.png",
    tags: ['HTML5', 'CSS', 'Unity', 'C#'],
    description: "A Unity multi-level game designed and developed for the Solana Network. Access for this play-to-earn game was previously linked to NFTs."
  },

  {
    projectName: 'Portfolio',
    projectUrl: "https://portfolio-kingamal.vercel.app/",
    githubUrl: "https://github.com/AmalPresingu/Portfolio",
    imageUrl: "portfoliothumbnail.png",
    tags: ['React', 'JavaScript', 'HTML5', 'CSS'],
    description: "This page! A responsive portfolio website to showcase some of the React concepts I learned."
  }
];

  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutMe />
      {showCards && (
        <>
          <div className='cards-container'>
            <h1 className='label inter'>Featured Work</h1>
            {projectsData.map((project, index) => (
              <Card key={index} {...project} className="card" />
            ))}
          </div>
          <Contact />
          <Footer />
          </>
      )} 
    </div>
  )
}

export default App;