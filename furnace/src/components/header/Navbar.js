import Logo from '../../asset/images/logo.png';
import {useNavigate} from "react-router-dom";
import React from "react";
import './Navbar.css';

function Navbar() {
    const handleScroll = (ele) => {
        const element = document.getElementById(ele);
        element.scrollIntoView({behavior: 'smooth'});
    };

    const navigate = useNavigate();

    const gotoWorkflow = () => {
        navigate('/workflow');
    };
    return (
        <>
            <div className="nav">
                <div className="logoContainer">
                    <img className="logo" src={Logo} alt='Furnace'/>
                </div>
                <div className="buttonContainer">
                    <button className="button">Home</button>
                    <button className="button" onClick={() => {
                        handleScroll('aboutUs')
                    }}>About Us
                    </button>
                    <button className="button" onClick={gotoWorkflow}>Business</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;