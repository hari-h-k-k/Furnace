import React from 'react';

function Card({item}) {

    return (
        <>
            <div style={styles.card}>
                <h2 style={styles.heading}>{item.heading}</h2>
                <p style={styles.data}>
                    {item.discription}
                </p>
            </div>
        </>
    );
}

const styles = {
    card: {
        height: '300px',
        width: '400px',
        // backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '10px',
        border: '1px solid #ccc',
    },
    heading: {
        fontFamily: 'sans-serif',
        fontSize: '24px',
        color: 'white',
    },
    data: {
        fontFamily: 'Your Attractive Font',
        fontSize: '16px',
        color: 'white',
    },
};

export default Card;
