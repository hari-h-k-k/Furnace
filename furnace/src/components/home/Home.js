import React, { useEffect, useRef  } from 'react';
import '../../App.scss';
import './Home.css'
import About from "../about/About";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import Intro from "../Intro/Intro";
import Background from "../background/Background";
import Connect from "../connect/Connect";
import Team from "../team/Team";
import Workflow from "../workflow/Workflow";

function Home({ prop }) {
    
    return (
        <>
            <Background />

            <Navbar page={prop} />
            {prop === 'home' && (
                <>
                    <Intro />
                    <About/>
                    <Connect/>
                </>
            )}

            {prop === 'team' && <Team />}

            {prop === 'workflow' && <Workflow />}

            <Footer page={prop}/>
        </>
    );
}

export default Home;
