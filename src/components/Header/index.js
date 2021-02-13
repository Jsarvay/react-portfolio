import React from "react";
import logo from "../../images/Sarvay-Stack-Logo (2).png";
import resume from "../../assets/JordanSarvayResume.docx.pdf";
import {Navbar, Nav} from "react-bootstrap";
import "./style.css";

function Header() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/"><img className="float-left image-fluid" src={logo} alt="Sarvay Logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href={resume} target={"_blank"}>Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
};

export default Header;