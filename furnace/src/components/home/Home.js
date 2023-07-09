import React, { useEffect, useRef  } from 'react';
import '../../App.scss';
import About from "../about/About";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import Intro from "../Intro/Intro";
import Background from "../background/Background";
import Connect from "../connect/Connect";
import Team from "../team/Team";
import Clank from '../../asset/audio/Clank.mp3';

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

            <Footer page={prop} />
        </>
    );
}

export default Home;
