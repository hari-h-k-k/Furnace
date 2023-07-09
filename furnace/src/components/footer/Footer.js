import { useNavigate } from "react-router-dom";
import Logo from '../../asset/images/logo.png';
import { Link } from 'react-router-dom';
function Footer({page}) {
  const navigate = useNavigate();
  return (
    <div style={styles.footer}>
      <div>
        <img src={Logo} alt='Furnace' style={styles.logo} />
      </div>
      <div>
      <h2 style={styles.text}>Drive Your Recognition.....!!</h2>
      </div>
      <div style={styles.textContainer}>
        {page==='home'?null:<h2 style={styles.text} onClick={() => { navigate('/'); }}>Home</h2>}
        {page==='team'?null:<h2 style={styles.text} onClick={() => { navigate('/team'); }}>Team</h2>}
        <h2 style={styles.text} onClick={() => { navigate('/#about'); }}>About</h2>
        <h2 style={styles.text} onClick={() => { navigate('/#connect'); }}>Connect</h2>
      </div>
    </div>
  );
}

export default Footer;

const styles = {
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    opacity: 0.5,
    height: '30vh',
    padding: '0 20px',
  },
  logo: {
    height: '25vh',
    width: '25vh',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    marginBottom: '10px',
    cursor: 'pointer',
  },
};
