import React from 'react';
import '../../App.scss';
import Navbar from '../header/Navbar';
import About from '../about/About';
import Footer from '../footer/Footer';
import Bg from '../bg/Bg';
import Hero from '../hero/Hero';
import Hire from '../hire/Hire';
import Workflow from '../workflow/Workflow';

function Home() {


    return (
        <>
            <Bg/>

            <Navbar/>

            <Hero/>

            {/*<Workflow/>*/}

            <About/>

            <Hire/>

            <Footer/>

        </>
    );
}

export default Home;
