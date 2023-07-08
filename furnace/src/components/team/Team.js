import './Team.css';
import React, {useState} from 'react';
import team from '../../constants/Team.json'

function Team() {


    return (
        <div className="team">
            <div className="teamGridLayout">
                {team.map((item, index) => (
                    <Card key={index} item={item}/>
                ))}
            </div>
        </div>
    );
}

export default Team;

function Card({ item }) {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleAnimationEnd = () => {
        setIsAnimating(false);
    };

    const handleMouseEnter = () => {
        if (!isAnimating) {
            setIsAnimating(true);
        }
    };

    return (
        <div className="teamCard">
            <div
                className={`image-container ${isAnimating ? 'animating' : ''}`}
                onAnimationEnd={handleAnimationEnd}
                onMouseEnter={handleMouseEnter}
            >
                <img src={item.image} alt="Item" className="image" />
            </div>
            <h2 className="teamHeading">{item.name}</h2>
        </div>
    );
}
