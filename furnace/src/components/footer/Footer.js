import {useLocation, useNavigate} from "react-router-dom";
import './Footer.css'

function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleTeamClick = () => {
        if (location.pathname === '/team') {
            window.location.reload();
        }
        navigate('/team');
    };

    return (
        <>
            <div className="footer">
                <h2 style={{ color: 'white' }} onClick={handleTeamClick}>Team</h2>
            </div>
        </>
    );
}

export default Footer;