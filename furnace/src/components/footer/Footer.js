import {useNavigate} from "react-router-dom";
function Footer() {
    const navigate = useNavigate();
    return (
        <>
            <div style={styles.footer}>
            <h2 style={{color:"white"}} onClick={()=>{navigate('/team');}}>Team</h2>
            </div>
        </>
    );
}

export default Footer;

const styles = {
    footer: {
        height: '30vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        opacity:0.5,
        placeContent:"center"
    },
};