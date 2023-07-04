import Flow from '../../asset/images/workFlow.png';
import Client from '../../asset/images/client.png';
import Relation from '../../asset/images/relation.png';
import Planning from '../../asset/images/planning.png';
import Development from '../../asset/images/development.png';
import { useState, useEffect } from 'react';
function Workflow() {
    const Steps = [
        {
            heading: "Steps",
            text: `we specialize in guiding you on this journey, helping you navigate the intricate
            web of information and documentation. Our expert team diligently works to unravel complexities
             and bring order to your content, ensuring that it evolves from a state of confusion to one of absolute clarity.`,
            image: Client,
        },
        {
            heading: "Steps",
            text: `we specialize in guiding you on this journey, helping you navigate the intricate
            web of information and documentation. Our expert team diligently works to unravel complexities
             and bring order to your content, ensuring that it evolves from a state of confusion to one of absolute clarity.`,
            image: Client,
        },
        {
            heading: "Steps",
            text: `we specialize in guiding you on this journey, helping you navigate the intricate
            web of information and documentation. Our expert team diligently works to unravel complexities
             and bring order to your content, ensuring that it evolves from a state of confusion to one of absolute clarity.`,
            image: Planning,
        },
        {
            heading: "Steps",
            text: `we specialize in guiding you on this journey, helping you navigate the intricate
            web of information and documentation. Our expert team diligently works to unravel complexities
             and bring order to your content, ensuring that it evolves from a state of confusion to one of absolute clarity.`,
            image: Development,
        },
        {
            heading: "Steps",
            text: `we specialize in guiding you on this journey, helping you navigate the intricate
            web of information and documentation. Our expert team diligently works to unravel complexities
             and bring order to your content, ensuring that it evolves from a state of confusion to one of absolute clarity.`,
            image: Client,
        },
        {
            heading: "Steps",
            text: `we specialize in guiding you on this journey, helping you navigate the intricate
            web of information and documentation. Our expert team diligently works to unravel complexities
             and bring order to your content, ensuring that it evolves from a state of confusion to one of absolute clarity.`,
            image: Relation,
        }

    ]

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 1000;
            setIsMobile(isMobile);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div style={{ color: 'white', fontSize: '5vh', marginLeft: '3vw', marginTop: '3vh', marginBottom: '3vh' }}>
                Workflow
            </div>

            {!isMobile ? <div style={{ display: 'flex', flexDirection: 'row', height: '360vh' }}>

                <div style={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column' }}>

                    {Steps.map((item, index) => (

                        <div style={{ flex: '1', textAlign: 'center' }}>
                            <img src={item.image} alt={index} style={styles.image} />
                        </div>

                    ))}

                </div>

                <div style={{ flex: '0 0 20%', display: 'flex', justifyContent: 'center' }}>
                    <img src={Flow} alt="Flow" style={styles.flow} />
                </div>

                <div style={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column' }}>
                    {Steps.map((item, index) => (
                        <div style={styles.text}>
                            <h1>{item.heading}</h1>
                                {item.text}
                        </div>
                    ))}
                </div>
            </div> :

                <div style={{marginInline:'10vh'}}>
                    {Steps.map((item, index) => (

                        <div style={{ flex: '1', textAlign: 'center' ,margin:'10vh'}}>
                            <img src={item.image} alt={index} style={styles.image} />
                            <div style={styles.text}>
                                <h1>{item.heading}</h1>
                                {item.text}
                            </div>
                        </div>

                    ))}
                </div>
            }

        </>
    );
}

export default Workflow;

const styles = {
    flow: {
        height: '100%',
    },
    image: {
        maxWidth: '50vh',
        maxHeight: '50vh',
    },
    text: {
        flex: '1', fontFamily: 'cursive',
        fontSize: '16px',
        color: 'white',
        textAlign: 'center',
        padding:'2vw'
    }
}
