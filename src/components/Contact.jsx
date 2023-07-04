import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

const Contact = () => {
  const inititalDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetail, setFormDetail] = useState(inititalDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const handleForm = (e) => {
    setFormDetail({ ...formDetail, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(formDetail),
    });
    setButtonText("Send");
    let result = response.json();
    setFormDetail(inititalDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message Sent successfully" });
    } else {
      setStatus({ success: false, message: "Please try again" });
    }
  };

  return (
    <section id="contact" className="contact">
      <Container>
        <Row className="align-item-center">
          <Col md={6}>
            <img src={contactImg} alt="cont-img" />
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetail.firstName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleForm}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetail.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleForm}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetail.email}
                    name="email"
                    placeholder="Email"
                    onChange={handleForm}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetail.phone}
                    name="phone"
                    placeholder="Phone"
                    onChange={handleForm}
                  />
                </Col>

                <Col>
                  <textarea
                    row="6"
                    name="message"
                    placeholder="message"
                    value={formDetail.message}
                    onChange={handleForm}
                  />
                  <button disabled type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.messsage && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.messsage}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
