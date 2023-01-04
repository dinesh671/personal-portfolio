import React from 'react'
import { Col } from 'react-bootstrap'

function ProjectCard({title,Description,imgUrl,projectUrl}) {
  return (
    <Col sm={6} md={4}>
      <a href={projectUrl} target="_blank" rel="noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt="card-Img" className="img" />
          <div className="proj-txtx">
            <h4 className='title'>{title}</h4>
            <span>{Description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
}

export default ProjectCard