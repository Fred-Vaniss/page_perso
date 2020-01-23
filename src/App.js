import React from 'react';
import { Intro, About, Timeline, Skills, Portfolio, Contact, Footer} from './components';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800,
  once: true,
  ease: 'ease-out'
});

function App() {
  return (
    <>
      <Intro/>
      <About/>
      <Skills/>
      <Timeline/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
} 

export default App;
