import Card from "./Card";
import aboutContent from '../../constants/About.json'
function About() {

    return (
        <div style={styles.gridLayout}>
            {aboutContent.map( (item,index) => (
                <Card item={item}/>
            ))}

        </div>
    );
}

export default About;

const styles = {
    gridLayout: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '1rem',
        placeItems:'center',
        margin:'1rem'
    }
};