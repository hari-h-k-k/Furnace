import './Team.css';
import React, { useState } from 'react';
import Tilt from 'react-vanilla-tilt';
import team from '../../constants/Team.json'
import Logo from '../../asset/images/logo.png';
import Navbar from '../header/Navbar';
import Footer from "../footer/Footer";
import Background from "../background/Background";

function Team() {


    return (
        <>
            <Background />

            <Navbar />

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="teamGridLayout">
                    {team.map((item, index) => (
                        <Card item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Team;

function Card({ item }) {


    return (
        <>

                <div className="teamCard">
                    <div className="image-container">
                        <img src={item.image} alt="Item" className="image" />
                    </div>
                    <h2 className="heading">{item.name}</h2>
                </div>

        </>
    );
}
