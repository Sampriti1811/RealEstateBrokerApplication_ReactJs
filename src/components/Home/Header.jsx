import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Header = () => {
  var styles = {
    navbarbrand: {
      fontWeight: "bold",
    },
    span: {
      margin: "auto",
    },
    navLink: {
      fontWeight: "bold",
    },
  };
  return (
    <nav className="navbar navbar-expand-lg  navbar-light bg-light" >
      <strong style={styles.navbarbrand} className="navbar-brand">
        Navigation Bar
      </strong>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link" style={styles.navLink}>
              Home
            </Link>
          </li>
        </ul>

        <span style={styles.span} className="navbar-text"></span>

        <div class="dropdown">
          <button class="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown Menu
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <Link class="dropdown-item" to="/login">
              Customer Login
            </Link>
            <Link class="dropdown-item" to="/register">
              Customer Register
            </Link>
            <Link class="dropdown-item" to="/brokerlogin">
              Broker Login
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
