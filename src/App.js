import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  const projectsData = [{
    projectName: 'BiznessmenNFT',
    projectUrl: "https://testingwebsite-kh0rb4fju-kingamal.vercel.app/",
    githubUrl: "https://github.com/AmalPresingu/BiznessmenNFT",
    imageUrl: "biznessmen.png",
    tags: ['C#', 'HTML5', 'CSS', 'Unity'],
    description: "Description"
  }
]

  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutMe />
      {projectsData.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  )
}

export default App;