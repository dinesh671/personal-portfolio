import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from '../assets/img/fem toggle.jpg';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/project-img4.png';

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
     {
       title: 'Web animation',
       Description: 'HTML, CSS, three.js, gsap',
       imgUrl: projImg4,
       projectUrl: 'https://ball-animation-three-js-dinesh671.vercel.app/',
     },
     
     //  {
     //    title: 'Frontend Project',
     //    Description: 'Development',
     //    imgUrl: projImg1,
     //  },
     //  {
     //    title: 'Frontend Project',
     //    Description: 'Development',
     //    imgUrl: projImg3,
     //  },
   ];
  // const pens = [
  //   {
  //     title: "codepen",
  //     Description: 'pens',
  //     imgUrl:'https://codepen.io/dinesh671/pen/BaVXVdz',
  //   }
  // ]
   return (
     <section className="project" id="projects">
       <Container>
         <Row>
           <Col>
             <TrackVisibility>
               {({ isVisible }) => (
                 <div
                   className={
                     isVisible ? 'animate__animated animate__slideInUp' : ''
                   }
                 >
                   <h2>Projects</h2>
                   {/* <p>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book.
                   </p> */}
                   <Tab.Container id="project-tabs" defaultActiveKey="first">
                     <Nav
                       variant="pills"
                       className="nav-pills mb-5 justify-content-center align-items-center"
                       id="pills-tab"
                     >
                       <Nav.Item>
                         <Nav.Link eventKey="first">Tab one</Nav.Link>
                       </Nav.Item>
                       <Nav.Item>
                         <Nav.Link eventKey="Second">Tab two</Nav.Link>
                       </Nav.Item>
                       <Nav.Item>
                         <Nav.Link eventKey="Third">Tab three</Nav.Link>
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
                           <p className="codepen" data-height={300} data-default-tab="html,result" data-slug-hash="gOKxxzE" data-user="dinesh671" style={{height: 300, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em 0', padding: '1em'}}>
                      <span>
                        See the Pen
                        <a target='_blank' href="https://codepen.io/dinesh671/pen/gOKxxzE" rel="noreferrer">
                          spotlight mouse animation
                        </a>
                        by dasari venkata siddartha dinesh kumar (
                        <a href="https://codepen.io/dinesh671">
                          @dinesh671
                        </a>
                        ) on <a href="https://codepen.io">CodePen</a>.
                      </span>
                    </p>

                         </Row>
                       </Tab.Pane>
                       <Tab.Pane eventKey="Third">lorem ipsum</Tab.Pane>
                     </Tab.Content>
                   </Tab.Container>
                 </div>
               )}
             </TrackVisibility>
           </Col>
         </Row>
       </Container>
       <img src={colorSharp2} alt="" className="background-image-right" />
     </section>
   );
}

export default Projects