import React from "react";
import logo from "../../images/Sarvay-Stack-Logo (2).png"
import "./style.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <a className="navbar-brand" href="/"><img className="float-left image-fluid" src={logo} alt="Sarvay Logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="/portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">About</a>
            </li>
          </ul>
        </div>
    </nav>
    )
};

export default Header;