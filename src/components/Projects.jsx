import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorsharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from "react-on-screen";
const Projects = () => {
  const projects = [
    {
      title: "Project A",
      discription: "React ",
      imgUrl: projImg1,
    },
    {
      title: "Project B",
      discription: "Firebase",
      imgUrl: projImg2,
    },
    {
      title: "Project C",
      discription: "Node",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="prokect" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__SlideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quia minus eius amet itaque libero ullam molestiae quae
                    dolore ipsa facilis, maxime sequi totam mollitia natus
                    expedita aut eveniet ratione vitae.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" disabled>
                          Tab 2
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" disabled>
                          Tab 3
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                      <Tab.Pane eventKey="third">Third tab content</Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        src={colorsharp2}
        alt="project-img"
        className="background-image-right"
      />
    </section>
  );
};

export default Projects;
