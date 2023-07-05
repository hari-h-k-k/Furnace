import Card from "./Card";
import {useEffect, useState} from "react";
import aboutContent from '../../constants/about.json'

function About() {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isScreen, setIsScreen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1500 && window.innerWidth >= 1000) {
                setIsMobile(false);
                setIsTablet(true);
                setIsScreen(false);
            } else if (window.innerWidth < 1000) {
                setIsMobile(true);
                setIsTablet(false);
                setIsScreen(false);
            } else {
                setIsMobile(false);
                setIsTablet(false);
                setIsScreen(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getGridTemplateColumns = () => {
        if (isMobile) {
            return 'repeat(1, 1fr)';
        } else if (isTablet) {
            return 'repeat(2, 1fr)';
        } else if (isScreen) {
            return 'repeat(3, 1fr)';
        }
    };

    const styles = {
        gridLayout: {
            display: 'grid',
            gridTemplateColumns: getGridTemplateColumns(),
            gap: '1rem',
            placeItems: 'center',
            margin: '1rem',
            marginTop: '120px',
        }
    };

    return (
        <>
            <div id="aboutUs" style={styles.gridLayout}>
                {aboutContent.aboutUs.map((item, index) => (
                    <Card item={item} key={index} />
                ))}
            </div>
        </>
    );
}

export default About;