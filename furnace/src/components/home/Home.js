import React from 'react';
import '../../App.scss';
import StartUp from '../../asset/video/StartUp.mp4';
import Logo from '../../asset/images/logo.png';
function Home() {
  const circleContainers = [];
  for (let i = 1; i <= 200; i++) {
    circleContainers.push(
      <div className="circle-container" key={i}>
        <div className="circle"></div>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        {circleContainers}
      </div>

      <div style={{ height: '15vh' }}>
      <img src={Logo} style={{ height: '12vh' ,width:'12vh' }}/>
      </div>

      <video autoPlay loop muted style={{ height: '85vh', width: '100%', objectFit: 'cover', marginBottom: '-10px' }}>
        <source src={StartUp} />
      </video>

      <p style={{height: '100vh' }}>
        Dummy
      </p>
      
    </>
  );
}

export default Home;
