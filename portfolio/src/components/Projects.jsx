import React from 'react';

const Projects = () => (
  <section className="project-section">
    <div className="container">
      <h2 className="section-heading">Projects</h2>
      <div className="row">
        <div className="col-lg-6">
          <img src="/project1.jpg" alt="Project 1" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h3>Project 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum odio eget massa venenatis, quis ullamcorper orci finibus.</p>
          <p>Technologies used: HTML, CSS, JavaScript</p>
          <a href="https://github.com/myusername/project1" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
          <a href="https://www.project1.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Visit Website</a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 order-lg-2">
          <img src="/project2.jpg" alt="Project 2" className="img-fluid" />
        </div>
        <div className="col-lg-6 order-lg-1">
          <h3>Project 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum odio eget massa venenatis, quis ullamcorper orci finibus.</p>
          <p>Technologies used: React, Node.js, MongoDB</p>
          <a href="https://github.com/myusername/project2" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
          <a href="https://www.project2.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Visit Website</a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <img src="/project3.jpg" alt="Project 3" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h3>Project 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum odio eget massa venenatis, quis ullamcorper orci finibus.</p>
          <p>Technologies used: Python, Django, PostgreSQL</p>
          <a href="https://github.com/myusername/project3" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
          <a href="https://www.project3.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Visit Website</a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects