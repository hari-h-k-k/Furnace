import React from 'react';
import './About.css';

function Card({item}) {

    return (
        <>
            <div className="card">
                <h2 className="heading">{item.heading}</h2>
                <p className="data">
                    {item.description}
                </p>
            </div>
        </>
    );
}

export default Card;
