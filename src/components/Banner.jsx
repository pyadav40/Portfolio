import "animate.css";
import React, { useEffect, useState } from "react";
import resume from "../assets/Document/cv.pdf";
import { Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import { btnClick } from "../Utility/Util";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Devloper", "Web Designer", "UI/UX Designer"];
  const [index, setIndex] = useState(1);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <section className="banner" id="home">
      <Row className="align-item-center mx-4">
        <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__fadeInRightBig" : ""
                }
              >
                <span className="tagline">
                  <a
                    title="Resume"
                    target="_blank"
                    href={resume}
                    rel="noreferrer"
                  >
                    Welcome to My Portfolio
                  </a>
                </span>
                <h1>
                  {`Hi i'm Piyush Yadav `}
                  <span className="wrap">{text}</span>
                </h1>
                <p>
                  Innovative, task-driven professional Developer with 2 years of
                  experience in front-end development. Proficient in HTML, CSS,
                  JavaScript, and modern front-end frameworks such as React.
                  Strong understanding of responsive design principles,
                  cross-browser compatibility, and web accessibility standards.
                  A creative problem solver with a keen eye for design and a
                  focus on delivering clean, efficient, and user-friendly code.
                </p>
                <button onClick={btnClick}>
                  Let's Connect
                  <ArrowRightCircle size={25} />
                </button>
              </div>
            )}
          </TrackVisibility>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <img src={headerImg} alt="header tag" />
        </Col>
      </Row>
    </section>
  );
};

export default Banner;