import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import linkedin from '../assets/img/linkedin.svg';
import Github from '../assets/img/github-mark-white.svg';
import codePen from '../assets/img/codepen.svg';
function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center flex-footer">
          <Col className='logo' sm={6}>Dinesh</Col>
          <Col sm={6} className="text-center t text-sm-end">
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
                  <p>CopyRight 2022 All Rights Reserverd</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer