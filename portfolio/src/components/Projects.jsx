import React from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { BsBoxArrowUpRight } from "react-icons/bs"


const Projects = () => (
  <section className="project-section">
    <div className="container">
      <h2 className="section-heading">Projects</h2>
      <article>
        <div className="col-lg-6">
          <img src="/project1.jpg" alt="Project 1" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h3>Juan Of A Kind</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum odio eget massa venenatis, quis ullamcorper orci finibus.</p>
          <p>Technologies used: HTML, CSS, JavaScript</p>
          <a href="https://github.com/esmoquin/django-react-docker-joak" target="_blank" rel="noopener noreferrer" className="btn btn-primary"><VscGithubAlt></VscGithubAlt></a>
          <a href="https://juanofakind.kitchen" target="_blank" rel="noopener noreferrer" className="btn btn-secondary"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
      <article>
        <div className="col-lg-6 order-lg-2">
          <img src="/project2.jpg" alt="Project 2" className="img-fluid" />
        </div>
        <div className="col-lg-6 order-lg-1">
          <h3>Stephanie Johnson</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum odio eget massa venenatis, quis ullamcorper orci finibus.</p>
          <p>Technologies used: React, Node.js, MongoDB</p>
          <a href="https://github.com/esmoquin/sj_front" target="_blank" rel="noopener noreferrer" className="btn btn-primary"><VscGithubAlt></VscGithubAlt></a>
          <a href="https://stephaniejohnson.tattoo" target="_blank" rel="noopener noreferrer" className="btn btn-secondary"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
      <article>
        <div className="col-lg-6">
          <img src="/project3.jpg" alt="Project 3" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h3>Social Tiles</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum odio eget massa venenatis, quis ullamcorper orci finibus.</p>
          <p>Technologies used: Python, Django, PostgreSQL</p>
          <a href="https://github.com/myusername/project3" target="_blank" rel="noopener noreferrer" className="btn btn-primary"><VscGithubAlt></VscGithubAlt></a>
          <a href="https://www.project3.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
    </div>
  </section>
);

export default Projects