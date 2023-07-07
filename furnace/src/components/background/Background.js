import '../../App.scss';

function Bg() {
    const circleContainers = [];
    for (let i = 1; i <= 200; i++) {
        circleContainers.push(
            <div className="circle-container" key={i}>
                <div className="circle"></div>
            </div>
        );
    };
    return (
        <div className="container">
            {circleContainers}
        </div>
    );
}
export default Bg;