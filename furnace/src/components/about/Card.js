import React, {useState} from 'react';
import Tilt from 'react-vanilla-tilt';
import './About.css';

function Card({item}) {

    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    return (
        <>
            <Tilt className="custom-tilt" style={{background: ''}} onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                <div className="card">
                    <h2 className="heading">{item.heading}</h2>
                    <p className="data">
                        {item.description}
                    </p>
                </div>
            </Tilt>
        </>
    );
}

export default Card;
