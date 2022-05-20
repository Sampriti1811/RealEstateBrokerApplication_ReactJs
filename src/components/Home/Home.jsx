import React from 'react'
import Header from './Header'; 

const Home = () => {

  var styles = {
    h1: {
      fontSize:"60px",
      width: "1000px",
      position: "absolute",
      top: "27%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontFamily: "'Brush Script MT', cursive"
    },
      img: {
        position: "absolute",
        right: "9.5%",
        padding: "25px",
        backgroundRepeat: "norepeat",
        backgroundSize: "cover"

      }
  }

  return (
    <>
    <Header/>
    <div class="container">
      <img style={styles.img} src="https://jsmsikkim.com/images/11.png" />
      <h1  style={styles.h1} className="center" >Welcome to Real Estate Broker Application</h1>
    </div>
    </>
  );
}

export default Home