import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Header = () => {
    var styles = {
        navbarbrand: {
            fontweight: "bold"
        },
        span: {
            margin: "auto"
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <strong style={styles.navbarbrand} className="navbar-brand">Navigation Bar : :</strong>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/login" className="nav-link">〖Customer Login〗</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">〖Customer Register〗</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/brokerlogin" className="nav-link">〖Broker Login〗</Link>
                    </li>
                </ul>
                <span style={styles.span} className="navbar-text">
                    Welcome!! Please Select Your Choice
                </span>
            </div>
        </nav>
    )
}

export default Header;