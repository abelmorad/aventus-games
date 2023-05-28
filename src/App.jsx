import React from 'react';
import { Routes, Route} from 'react-router-dom';
import '../scss/main.scss';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import News from './pages/News';


export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='news' element={<News />} />
      </Routes>
    </>
  )
}


