import Flow from '../../asset/images/workFlow.png';
import Steps from '../../constants/Workflow.json'
import "./Workflow.css"
import { useState, useEffect } from 'react';

function Workflow() {

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
        <div id="workFlow">

            <div className='wfDesText'>
                <h1>Workflow</h1>
            </div>
            {!isMobile
                ? <div className='wfScr'>

                    <div className='wfScrImgCol'>

                        {Steps.map((item, index) => (

                            <div style={{ height: '60vh' }}>
                                <div className='wfScrImgDiv'>
                                    <img src={item.image} alt={index} style={{ height: '-webkit-fill-available' }} />
                                </div>
                            </div>

                        ))}

                    </div>

                    <div style={{ flex: '0 0 10%', display: 'flex', justifyContent: 'center' }}>
                        <img src={Flow} alt="Flow" style={styles.flow} />
                    </div>

                    <div style={{ flex: '0 0 45%', display: 'flex', flexDirection: 'column' }}>
                        {Steps.map((item, index) => (
                            <div className='wfDesText'>
                                <h1>{item.heading}</h1>
                                {item.description}
                            </div>
                        ))}
                    </div>
                </div>

                :

                <div>
                    {Steps.map((item, index) => (

                        <div style={{ flex: '1', textAlign: '-webkit-center', marginBlock: '50px', marginInline: '20px' }}>
                            <div className='wfScrImgDiv'>
                                <img src={item.image} alt={index} style={{ height: '-webkit-fill-available' }} />
                            </div>
                            <div className='wfDesText'>
                                <h1>{item.heading}</h1>
                                {item.description}
                            </div>
                        </div>

                    ))}
                </div>
            }
        </div>
    );
}

export default Workflow;

const styles = {
    flow: {
        height: '100%',
    },
}
