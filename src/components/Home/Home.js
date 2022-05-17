import React from 'react'

const Home = () => {

  var styles = {
    h1: {
      width: "1000px",
      position: "absolute",
      top: "27%",
      left: "57%",
      transform: "translate(-50%, -50%)"
    },
    img: {
      position: "absolute",
      right: "7%"
    }
  }

  return (

    <div class="container">
      <img style={styles.img} src="https://jsmsikkim.com/images/11.png" />
      <h1 class="center" style={styles.h1}>Welcome to Real Estate Broker Application</h1>
    </div>
  );
}

export default Home