import React from 'react';
import Header from './Header.jsx';
import Nav from './nav.jsx';
import Cennik from './Cennik.jsx';
import Background from './background.jsx';
import About from './About.jsx';
import AboutMe from './AboutMe.jsx';
import Gallery from './Gallery.jsx';
import Kontakt from './Kontakt.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <AboutMe />
      <Background />
      <Cennik />
      <Gallery/>
      <Kontakt/>
    </>
  );
}

export default App;
