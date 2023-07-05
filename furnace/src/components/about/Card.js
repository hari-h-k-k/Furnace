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

    const styles = {
        heading: {
            fontFamily: 'cursive', color: 'white', fontsize: 'x-large',
        }, data: {
            fontFamily: 'cursive', fontSize: 'large', color: 'white',
        },
    };


    return (<>
        <Tilt className="custom-tilt" style={{background: ''}} onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
            <div className="custom-card" style={styles.card}>
                <h1 style={styles.heading}>{item.heading}</h1>
                <p style={styles.data}>{item.description}</p>
            </div>
        </Tilt>
    </>);
}

export default Card;
