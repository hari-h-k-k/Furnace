import { useNavigate } from "react-router-dom";
import './Footer.css';
import Logo from '../../asset/images/logo.png';
import { Link } from 'react-router-dom';
function Footer({page}) {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div>
        <img src={Logo} alt='Furnace' className="footerLogo" />
      </div>
      <div>
      <h2 className="footerText">Drive Your Recognition.....!!</h2>
      </div>
      <div className="footerTextContainer">
        {page==='home'?null:<h2 className="footerText" onClick={() => { navigate('/'); }}>Home</h2>}
        {page==='team'?null:<h2 className="footerText" onClick={() => { navigate('/team'); }}>Team</h2>}
        <h2 className="footerText" onClick={() => { navigate('/#about'); }}>About</h2>
        <h2 className="footerText" onClick={() => { navigate('/#connect'); }}>Connect</h2>
      </div>
    </div>
  );
}

export default Footer;
