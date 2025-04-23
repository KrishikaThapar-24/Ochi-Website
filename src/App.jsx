import React from 'react'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquees from './components/Marquees';
import Aboutweb from './components/Aboutweb';
import Eyes from './components/Eyes';
import Features from './components/Features';
import Cards from './components/Cards';

import LocomotiveScroll from 'locomotive-scroll';

function App() {


const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar />
      <LandingPage />
      <Marquees />
      <Aboutweb />
      <Eyes />
      <Features />
      <Cards />

    </div>
  )
}
export default App;
