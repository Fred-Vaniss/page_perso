import React, {useState} from 'react';
import { Intro, About, Timeline, Skills, Portfolio, Contact, Footer} from './components';

const App = props => {

  const [lang, setLang] = useState('fr')

  const handleLangButtons = {
    fr: (e) => { setLang('fr') },
    en: (e) => { setLang('en') }
  }

  return (
    <>
      <Intro lang={lang} handleButton={handleLangButtons}/>
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
