import React from 'react';
import '../../App.scss';
import StartUp from '../../asset/video/StartUp.mp4';
import Logo from '../../asset/images/logo.png';
import About from "../about/About";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import Intro from "../Intro/Intro";
import Background from "../background/Background";

function Home() {
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

            <Intro />

            {/*<About />*/}
            {/*<p style={{height: '100vh' }}>*/}
            {/*    Dummy*/}
            {/*</p>*/}
            <Footer />

        </>
    );
}

export default Home;
