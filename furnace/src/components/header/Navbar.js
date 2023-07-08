import Logo from '../../asset/images/logo.png';
import {useNavigate} from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <div style={{ height: '7vh' }}>
                <img src={Logo} alt='Furnace' style={styles.logo} onClick={()=>{navigate('/');}}/>
            </div>
        </>
    );
}

export default Navbar;

const styles = {
    logo: {
        height: '7vh',
        width: '8vh'
    }
}