import React from 'react';
import '../../App.scss';
import StartUp from '../../asset/video/StartUp.mp4';
import Navbar from '../header/Navbar';
import About from '../about/About';
import Footer from '../footer/Footer';
function Home() {
  const circleContainers = [];
  for (let i = 1; i <= 200; i++) {
    circleContainers.push(
      <div className="circle-container" key={i}>
        <div className="circle"></div>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        {circleContainers}
      </div>

      <Navbar/>

      <video autoPlay loop muted style={styles.vid}>
        <source src={StartUp}/>
      </video>

      <About/>

      <Footer/>

    </>
  );
}

export default Home;

const styles = {
  vid: {
    height: '85vh', 
    width: '100%', 
    objectFit: 'cover'
  },
};