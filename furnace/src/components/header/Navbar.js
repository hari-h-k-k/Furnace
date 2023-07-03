import Logo from '../../asset/images/logo.png';

function Navbar() {

    return (
        <>
            <div style={{ height: '15vh' }}>
                <img src={Logo} alt='Furnace' style={styles.logo} />
            </div>
        </>
    );
}

export default Navbar;

const styles = {
    logo: {
        height: '12vh',
        width: '12vh'
    }
}