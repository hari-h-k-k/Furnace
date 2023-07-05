import React, {useEffect, useState} from 'react';
import All from '../../asset/video/All.mp4';
import './Hero.css';

function Hero() {

    const strings = ['Begin Your Journey', 'Drive Your Recognition', 'Accelerate Your Reputation', 'Empower Your Potential', 'Unleash Your Success', 'Enhance Your Standing', 'Foster Your Achievements', 'Launch your future'];

    const handleScroll = (ele) => {
        const element = document.getElementById(ele);
        element.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className='videoContainer'>
            <video className='video' autoPlay loop muted>
                <source src={All}/>
            </video>
            <div className='textOverlay'>
                <h1 className='text'>Begin Your Journey</h1>
            </div>
            <button className='button' onClick={() => {
                handleScroll('hire')
            }}>Hire
            </button>
        </div>
    );
}

export default Hero;
