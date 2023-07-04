import React, {useEffect, useState} from 'react';
import All from '../../asset/video/All.mp4';

function Hero() {

    const strings = ['Begin Your Journey', 'Drive Your Recognition', 'Accelerate Your Reputation', 'Empower Your Potential', 'Unleash Your Success', 'Enhance Your Standing', 'Foster Your Achievements', 'Launch your future'];


    return (
        <div style={styles.videoContainer}>
            <video autoPlay loop muted style={styles.video}>
                <source src={All}/>
            </video>
            <div style={styles.textOverlay}>
                <h1 style={styles.text}>Begin Your Journey</h1>
            </div>
            <button style={styles.button}>Hire</button>
        </div>
    );
}

const styles = {
    videoContainer: {
        position: 'relative',
        backgroundColor: 'black',
    },
    video: {
        width: '100%',
        height: '85vh',
        objectFit: 'cover',
        marginBottom: '-5px',
        opacity: 0.6,
    },
    textOverlay: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 1,
    },
    text: {
        color: 'white',
        fontSize: '10vh',
    },
    button: {
        position: 'absolute',
        bottom: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '10px 20px',
        fontSize: '5vh',
        color: 'white',
        backgroundColor: 'purple',
        border: 'none',
        borderRadius: '10%',
        cursor: 'pointer',
    },
};

export default Hero;
