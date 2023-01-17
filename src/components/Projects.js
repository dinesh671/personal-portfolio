import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/fem toggle.jpg';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/project-img4.png';
import uiprojImg1 from '../assets/img/thumbnail-for-ui-1.png';
import uiprojImg2 from '../assets/img/thumbnail-for-ui-2.png';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Projects() {
  const project = [
    {
      title: 'Amazon Landing page',
      Description: 'Next.js,Tailwind',
      imgUrl: projImg1,
      projectUrl: 'https://amazon-clone-2-0-dinesh671.vercel.app/',
    },
    {
      title: 'Frontend Project',
      Description: 'Next.js, TailwindCSS',
      imgUrl: projImg3,
      projectUrl: 'https://portfolio-next-dinesh671.vercel.app/',
    },
    {
      title: 'Social media dashbord dark light toggle',
      Description: 'HTML, CSS(SCSS), Js, Gulp workflow',
      imgUrl: projImg2,
      projectUrl: 'https://fem-dash-board.pages.dev/',
    },
  ];
  const uiProject = [
    {
      title: 'Simple Retturoo Desgin Idea 2022',
      Description: 'Figma',
      imgUrl: uiprojImg2,
      projectUrl: 'https://www.figma.com/community/file/1118199313180979421',
    },
    {
      title: 'Simple Music App landing Page',
      Description: 'Figma',
      imgUrl: uiprojImg1,
      projectUrl: 'https://www.figma.com/community/file/1118199313180979421',
    },
  ];

  const animaion = [
    {
      title: 'Web animation',
      Description: 'Vite HTML, CSS, three.js, gsap',
      imgUrl: projImg4,
      projectUrl: 'https://ball-animation-three-js-dinesh671.vercel.app/',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col className="">
            <div>
              <h2>Projects</h2>
              <Tab.Container id="project-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Web projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Second">Ui desgin</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Third">Animations</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row sm={6} lg={2}>
                      {project.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Second">
                    <Row sm={6} lg={2}>
                      {uiProject.map((uiProject, index) => {
                        return <ProjectCard key={index} {...uiProject} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Third">
                    {animaion.map((animation, index) => {
                      return <ProjectCard key={index} {...animation} />;
                    })}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  );
}

export default Projects;
