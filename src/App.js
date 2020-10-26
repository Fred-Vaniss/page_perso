import React, {useState, useEffect, useRef} from 'react';
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom'
import { Intro, About, Timeline, Skills, Portfolio, Contact, Footer} from './components';

const App = props => {
  return (
    <Router>
      <Route path="/">
        <QueryApp/>
      </Route>
    </Router>
  );
} 
export default App;

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const QueryApp = () => {

  const [lang, setLang] = useState('fr')

  const setQueryString = (lang) => {
    const newUrl = window.location.protocol + "//" +
                  window.location.host +
                  window.location.pathname +
                  '?lang='+lang;

    window.history.pushState({ path: newUrl }, "", newUrl)
  }

  let query = useQuery()

  const firstLoad = useRef(true)

  if (firstLoad.current) {
    if (!query.get('lang')) {
      setQueryString(lang)
    } else {
      setLang(query.get('lang'))
    }
    firstLoad.current = false 
  }

  const handleLangButton = e => {
    lang === 'fr' ? setLang('en') : setLang('fr');
    setQueryString(lang)
  }

  useEffect(() => {
    setQueryString(lang)
  }, [lang])

  return (
    <>
      <Intro lang={lang} handleButton={handleLangButton}/>
      <About lang={lang}/>
      <Skills lang={lang}/>
      <Timeline lang={lang}/>
      <Portfolio lang={lang}/>
      <Contact lang={lang}/>
      <Footer/>
    </>
  )
}