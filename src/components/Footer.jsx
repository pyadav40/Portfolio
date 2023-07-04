import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from "../assets/img/github.svg";
import mylogo from "../assets/img/mylogo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <div className="logo-container">
              <h1>PIYUSH</h1>
              <div className="bar"></div>
              <div className="bar1"></div>
              <div className="bar2"></div>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/piyushyadav40"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                href="https://github.com/pyadav40"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
