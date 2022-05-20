import React from "react";
import "./BrokerPopup.css";
import { Link } from "react-router-dom";

const BrokerPopup = () => {
  return (
    <div
      style={{
        marginLeft: "-120px",
        backgroundColor: "#ddd",
        width: "1535px",
        height: "710px",
      }}
    >
      <div className="popup center">
        <div className="icon">
          <i>
            <h2 style={{ marginTop: "10px", color: "#34f234" }}>✔</h2>
          </i>
        </div>
        <div class="title">Congratulations!!</div>
        <div class="description">You have made a Deal</div>
        <div className="dismiss-btn">
          <button id="dismiss-popup-btn">
          <Link style={{color:"white"}} to="/customer">Dismiss</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrokerPopup;
