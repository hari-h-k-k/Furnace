import React from 'react';
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

            {prop === 'team' && <Team />}

            {prop === 'workflow' && <Workflow />}

            <Footer />
        </>
    );
}

export default Home;
