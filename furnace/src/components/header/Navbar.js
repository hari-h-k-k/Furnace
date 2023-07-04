import Logo from '../../asset/images/logo.png';

function Navbar() {
    const handleScroll = (ele) => {
        const element = document.getElementById(ele);
        element.scrollIntoView({ behavior: 'smooth' });
      };
    return (
        <>
            <div style={styles.nav}>
                <div style={styles.logoContainer}>
                    <img src={Logo} alt='Furnace' style={styles.logo} />
                </div>
                <div style={styles.buttonContainer}>
                    <button style={styles.button}>Home</button>
                    <button style={styles.button} onClick={()=>{handleScroll('aboutUs')}}>About Us</button>
                    <button style={styles.button} onClick={()=>{handleScroll('workFlow')}}>Business</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;

const styles = {
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '1rem',
    },
    logo: {
        height: '12vh',
        width: '12vh',
        marginLeft:'3px'
    },
    nav: {
        height: '15vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        alignSelf:'end'
    },
    button: {
        marginLeft: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        fontSize: '1rem',
        cursor: 'pointer',
    },
};
