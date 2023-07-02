import React from 'react';
import '../../App.scss';

function Home() {
  const circleContainers = [];
  for (let i = 1; i <= 100; i++) {
    circleContainers.push(
      <div className="circle-container" key={i}>
        <div className="circle"></div>
      </div>
    );
  }

  return (
    <div className="container">
      {circleContainers}
    </div>
  );
}

export default Home;
