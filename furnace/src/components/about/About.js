import Card from "./Card";
import aboutContent from '../../constants/About.json'
import './About.css';

function About() {

    return (
        <div className="gridLayout">
            {aboutContent.map( (item,index) => (
                <Card item={item}/>
            ))}
        </div>
    );
}

export default About;
