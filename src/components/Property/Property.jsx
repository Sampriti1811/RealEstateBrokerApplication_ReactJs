import React from 'react';
import Header from '../Home/Header';

const Property = () => {

    var styles = {
        h1: {
          fontSize:"50px",
          width: "1000px",
          position: "absolute",
          top: "27%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Serif'"
        }
        
      }
  return (
    <>
    <Header/>
    <div class="container">
    
    <h1 class="center" style={styles.h1}>Welcome to Property Section</h1>
  </div>
  <div style={{
          marginTop: "40px",
          marginLeft: "250px",
          backgroundColor: "#E9E9E9",
          width: "800px",
          height: "300px",
          borderRadius: "25px",
          border: "1px solid #BFBFBF",
          backgroundColor: "white",
          boxShadow: "10px 10px 5px #aaaaaa",
        }}>
          
        </div>

    </>
  )
}

export default Property