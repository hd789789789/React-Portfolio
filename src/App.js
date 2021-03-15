import React from 'react';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Nav';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    AOS.init();

    return (
        <div>
            <Banner />
            <Navbar />
            <Services />
            <Skills />
            <About />
            <Contact />
        </div>
    );
}

export default App;
