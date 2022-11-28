import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import ProjectList from './components/projectList/ProjectList'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'
import Kakao from './components/reactproject/Kakao';
import Movie from './components/reactproject/Movie';
import Pure from './components/pure/Pure';

function App() {
  return (
    <>
      <Header />
      
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <ProjectList />
        <Kakao />
        <Movie />
        <Pure />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
