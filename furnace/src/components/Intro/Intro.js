import React, { useEffect } from 'react';
import StartUp from '../../asset/video/StartUp.mp4';
import './Intro.css';

function Intro() {

    useEffect(() => {
        function checkVideoCrop() {
            const videoElement = document.querySelector('.video');
            const screenWidth = window.outerWidth;
            console.log("Screen" + screenWidth)
            const videoWidth = videoElement.offsetWidth;
            console.log("Video" + videoWidth)
            const isCropped = videoWidth > screenWidth;
            if (isCropped) {
                console.log('Video is cropped!');
            } else {
                console.log('Video is not cropped.');
            }
        }

        checkVideoCrop();
        window.addEventListener('resize', checkVideoCrop);
        return () => {
            window.removeEventListener('resize', checkVideoCrop);
        };
    }, []);

    return (
        <div className="videoContainer">
            <video className="video" autoPlay loop muted>
                <source src={StartUp} />
            </video>
            <div className="textOverlay">
                <h1 className="introText">Drive Your Recognition</h1>
            </div>
        </div>
    );
}

export default Intro;