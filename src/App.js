import React from 'react';
import { Intro, About, Timeline, Skills} from './components';

function App() {
  return (
    <div className="wrapper">
      <Intro/>
      <About/>
      <Skills/>
      <Timeline/>
    </div>
  );
} 

export default App;
