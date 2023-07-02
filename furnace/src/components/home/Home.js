import React, {useEffect, useState} from 'react';
import '../../App.css';

const containerHeight = 400;
const circleRadius = 20;

function Home() {

    const [circleY, setCircleY] = useState(circleRadius);
    const [circleVelocity, setCircleVelocity] = useState(5);
    const [circleOpacity, setCircleOpacity] = useState(1);


    useEffect(() => {
        const interval = setInterval(() => {
            setCircleY((prevY) => {
                const newY = prevY + circleVelocity;
                const newOpacity = newY > containerHeight ? 0 : 1;
                return newY > containerHeight ? -circleRadius : newY;
            });
            setCircleOpacity((prevOpacity) => {
                return circleY > containerHeight ? 1 : prevOpacity;
            });
        }, 16); // 60 FPS

        return () => {
            clearInterval(interval);
        };
    }, [circleY, circleVelocity]);



    useEffect(() => {
        const interval = setInterval(() => {
            setCircleY((prevY) => {
                const newY = prevY + circleVelocity;
                return newY > containerHeight ? -circleRadius : newY;
            });
        }, 16); // 60 FPS

        setCircleOpacity(circleY > containerHeight ? 0 : 1);

        return () => {
            clearInterval(interval);
        };
    }, [circleVelocity, circleY, circleOpacity]);



    return (
        <div className="container" style={{ "--circle-radius": `${circleRadius}px` }}>
            <div
                className="circle"
                style={{ top: `${circleY}px`, opacity: circleOpacity }}
            />
        </div>
        // <div className="container">
        //     {Array.from({ length: 1 }, (_, i) => (
        //         <div className="circle-container" key={i + 1}>
        //             <div className="circle"></div>
        //         </div>
        //     ))}
        // </div>
    );
}


export default Home;
