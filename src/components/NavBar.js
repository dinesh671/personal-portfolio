// import  from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React,{ useState, useEffect } from 'react';
import linkedin from '../assets/img/linkedin.svg';
import Github from '../assets/img/github-mark-white.svg';
import codePen from '../assets/img/codepen.svg';


function NavBar() {
   const [activeLink, setActiveLink] = useState('home');
   const [scrolled, setScreolled] = useState(false);

   useEffect(() => {
      const onScroll = () => {
         if (window.scrollY > 50) {
            setScreolled(true);
         } else {
            setScreolled(false);
         }
      }

      window.addEventListener("scroll", onScroll);

      return () =>window.removeEventListener('scroll',onScroll)
   },[])

   const onUpdateActiveLink = (value) => {
      setActiveLink(value)
   }

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">Dinesh</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto flex">
            <Nav.Link
              href="#home"
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/dvs-dinesh-kumar/">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="https://github.com/dinesh671">
                <img src={Github} alt="github" />
              </a>
              <a href="https://codepen.io/dinesh671">
                <img src={codePen} alt="instagram" />
              </a>
            </div>
            <button className="vvd"  onClick={() => console.log('connect')}>
              <span>Let's connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
