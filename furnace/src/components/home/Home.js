import React from 'react';
import '../../App.scss';
import Navbar from '../header/Navbar';
import About from '../about/About';
import Footer from '../footer/Footer';
import Bg from '../bg/Bg';
import Hero from '../hero/Hero';
function Home() {
  

  return (
    <>
      <Bg/>

      <Navbar/>

      <Hero/>

      <About/>

      <Footer/>

    </>
  );
}

export default Home;
