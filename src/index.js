import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';
import App from './App';

import AOS from 'aos';
import 'aos/dist/aos.css';

import 'lightbox2/dist/js/lightbox-plus-jquery';
import 'lightbox2/dist/css/lightbox.css';

AOS.init({
  duration: 800,
  once: false,
  ease: 'ease-out'
});

ReactDOM.render(<App />, document.getElementById('root'));
