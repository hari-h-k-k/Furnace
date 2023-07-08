import React, {useEffect} from 'react';
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
    const circleContainers = [];
    for (let i = 1; i <= 200; i++) {
        circleContainers.push(
            <div className="circle-container" key={i}>
                <div className="circle"></div>
            </div>
        );
    }

    return (
        <>
            <Background />

            <Navbar />
            {prop === 'home' && (
                <>
                    <Intro />
                    <About />
                    <Connect />
                </>
            )}

            {prop === 'team' && <Team prop={prop}/>}

            <Footer />
        </>
    );
}

export default Home;
