import './Team.css';
import React from 'react';
import team from '../../constants/Team.json'

function Team() {


    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className="teamGridLayout">
                {team.map((item, index) => (
                    <Card item={item}/>
                ))}
            </div>
        </div>
    );
}

export default Team;

function Card({item}) {


    return (
        <div className="teamCard">
            <div className="image-container">
                <img src={item.image} alt="Item" className="image"/>
            </div>
            <h2 className="heading">{item.name}</h2>
        </div>
    );
}
