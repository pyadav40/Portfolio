import React, { useEffect, useState } from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from "../assets/img/github.svg";

import { btnClick } from "../Utility/Util";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <div className="logo-container">
            <h1>PIYUSH</h1>
            <div className="bar"></div>
            <div className="bar1"></div>
            <div className="bar2"></div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="nav-mar" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("home");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("skills");
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("project");
              }}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/piyushyadav40"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="nav1" />
              </a>
              <a
                href="https://github.com/pyadav40"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="" />
              </a>
            </div>
            {/* <HashLink to="#connect"> */}
            <button className="vvd" onClick={btnClick}>
              <span href>Let’s Connect</span>
            </button>
            {/* </HashLink> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
