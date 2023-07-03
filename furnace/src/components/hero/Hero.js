import StartUp from '../../asset/video/StartUp.mp4';
function Hero() {

    return (
        <div style={styles.videoContainer}>
            <video autoPlay loop muted style={styles.video}>
                <source src={StartUp} />
            </video>
            <div style={styles.textOverlay}>
                <h1 style={styles.text}>Drive Your Recognition</h1>
            </div>
        </div>
    );
}

export default Hero


const styles = {
    videoContainer: {
        position: 'relative',
        backgroundColor:'black'
    },
    video: {
        width: '100%',
        height: '85vh',
        objectFit: 'cover',
        opacity:0.6
    },
    textOverlay: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 1,
    },
    text: {
        color: 'white',
        fontSize: '10vh',
    },
};