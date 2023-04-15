import React from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { BsBoxArrowUpRight } from "react-icons/bs"


const Projects = () => (
  <section className="project-section" id="projects">
    <h2 className="section-heading">Projects</h2>
    <div className="project-section-container">
      
      <article className="project-card">
        <div className="col-lg-6">
          <img src="" alt="Project 1" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h3>Juan Of A Kind</h3>
          <p>Website developed for a client with a Food Truck. The project includes informational pages for the general public, user pages to place orders and manage their as well as an administrative backend to assist with their business such as expenses, inventory, and recipes.</p>
          <p>Technologies used: React, Django, DRF, PostgreSQL, Stripe API</p>
          <p>Deployed with: Docker, Gunicorn, Nginx on a Linode VPS</p>
          <a className="github-link" href="https://github.com/esmoquin/django-react-docker-joak" target="_blank" rel="noopener noreferrer"><VscGithubAlt className="github-link"></VscGithubAlt></a>
          <a href="https://juanofakind.kitchen" target="_blank" rel="noopener noreferrer" className="site-link"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
      <article className="project-card">
        <div className="col-lg-6 order-lg-2">
          <img src="/project2.jpg" alt="Project 2" className="img-fluid" />
        </div>
        <div className="col-lg-6 order-lg-1">
          <h3>Stephanie Johnson</h3>
          <p>Project created for a Tattoo Artist website that wanted a funnel for people to contact her and submit consultations. Instagram API was integrated in order to display their work as their portfolio. Future iterations of the site will be able to fully manage booking appointment and paying for them through the site.</p>
          <p>Technologies used: React, Django, DRF, PostgreSQL, Instagram API</p>
          <p>Deployed with: Docker, Gunicorn, Nginx on a Linode VPS</p>
          <a className="github-link" href="https://github.com/esmoquin/sj_front" target="_blank" rel="noopener noreferrer"><VscGithubAlt></VscGithubAlt></a>
          <a className="site-link" href="https://stephaniejohnson.tattoo" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
      <article className="project-card">
        <div className="col-lg-6">
          <img src="/project3.jpg" alt="Project 3" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h3>T-Shirt Customizer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum odio eget massa venenatis, quis ullamcorper orci finibus.</p>
          <p>Technologies used: Three.js, React, OpenAI API</p>
          <a className="github-link" href="https://github.com/ElPinguiino/threejs_project" target="_blank" rel="noopener noreferrer"><VscGithubAlt></VscGithubAlt></a>
          <a className="site-link" href="https://camisa.online" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
      <article className="project-card">
        <div className="col-lg-6">
          <img src="/project3.jpg" alt="Project 3" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h3>Geisha Creations</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum odio eget massa venenatis, quis ullamcorper orci finibus.</p>
          <p>Technologies used: Python, Django, PostgreSQL</p>
          <a className="github-link" href="https://github.com/ElPinguiino/geishacreations_ecommerce" target="_blank" rel="noopener noreferrer"><VscGithubAlt></VscGithubAlt></a>
          <a className="site-link" href="https://www.geishacreations.shop/" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
      <article className="project-card">
        <div className="col-lg-6">
          <img src="/project3.jpg" alt="Project 3" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h3>Social Tiles</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum odio eget massa venenatis, quis ullamcorper orci finibus.</p>
          <p>Technologies used: Python, Django, PostgreSQL</p>
          <a className="github-link" href="https://github.com/ElPinguiino/socialmedia_app" target="_blank" rel="noopener noreferrer"><VscGithubAlt></VscGithubAlt></a>
          <a className="site-link" href="https://www.project3.com/" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
      <article className="project-card">
        <div className="col-lg-6">
          <img src="/project3.jpg" alt="Project 3" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h3>UAE Home Search</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum odio eget massa venenatis, quis ullamcorper orci finibus.</p>
          <p>Technologies used: Python, Django, PostgreSQL</p>
          <a className="github-link" href="https://github.com/ElPinguiino/uaehomesearch" target="_blank" rel="noopener noreferrer"><VscGithubAlt></VscGithubAlt></a>
          <a className="site-link" href="http://uaehomesearch.vercel.app/" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
    </div>
  </section>
);

export default Projects