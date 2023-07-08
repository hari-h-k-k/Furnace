import React from 'react';
import Tilt from 'react-vanilla-tilt';
import './About.css';

function Card({item}) {

    return (
        <>
            <Tilt className="custom-tilt" style={{background: ''}}>
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
