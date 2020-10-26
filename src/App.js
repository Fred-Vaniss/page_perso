import React, {useState} from 'react';
import { Intro, About, Timeline, Skills, Portfolio, Contact, Footer} from './components';

const App = props => {

  const [lang, setLang] = useState('fr')

  const handleLangButton = e => {
    lang === 'fr' ? setLang('en') : setLang('fr');
  }

  return (
    <>
      <Intro lang={lang} handleButton={handleLangButton}/>
      <About lang={lang}/>
      <Skills lang={lang}/>
      <Timeline/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
} 

export default App;
