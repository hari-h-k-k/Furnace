import Logo from '../../asset/images/logo.png';

import {useLocation, useNavigate} from "react-router-dom";
import React from "react";
import './Navbar.css';

function Navbar() {
    const location = useLocation();
    const handleScroll = (ele) => {
        const element = document.getElementById(ele);
        element.scrollIntoView({behavior: 'smooth'});
    };

    const navigate = useNavigate();

    const handleWorkflow = () => {
        if (location.pathname === '/workflow') {
            window.location.reload();
        }
        navigate('/workflow');
    };

    const handleHome = () => {
        if (location.pathname === '/') {
            window.location.reload();
        }
        navigate('/');
    };

    return (
        <>
            <div className="nav">
                <div className="logoContainer">
                    <img className="logo" src={Logo} alt='Furnace' onClick={handleHome} />
                </div>
                {/* <div className="buttonContainer">
                    <button className="navButton" onClick={handleHome}>Home</button>
                    <button className="navButton" onClick={() => {handleScroll('aboutUs')}}>About Us</button>
                    <button className="navButton" onClick={handleWorkflow}>Business</button>
                </div> */}
            </div>
        </>
    );
}

export default Navbar;