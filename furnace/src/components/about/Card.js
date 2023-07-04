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
        card: {
            height: '300px',
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '10px',
            borderWidth: hover ? '5px' : '',
            borderStyle: hover ? 'solid' : '',
            borderColor: hover ? '#ffffff' : '',
            borderRadius: hover ? '15px' : '',
            margin: hover ? '5px' : '10px',
        }, heading: {
            fontFamily: 'cursive', fontSize: '24px', color: 'white', fontsize: 'xxx-large'
        }, data: {
            fontFamily: 'cursive', fontSize: '16px', color: 'white',
        },
    };


    return (<>
        <Tilt className="custom-tilt" style={{background: ''}} onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
            <div style={styles.card}>
                <h1 style={styles.heading}>{item.heading}</h1>
                <p style={styles.data}>{item.description}</p>
            </div>
        </Tilt>
    </>);
}

export default Card;
