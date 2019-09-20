import React from 'react';
import { Intro, About, Timeline, Skills, Portfolio} from './components';

function App() {
  return (
    <div className="wrapper">
      <Intro/>
      <About/>
      <Skills/>
      <Timeline/>
      <Portfolio/>
    </div>
  );
} 

export default App;
