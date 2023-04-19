import React from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { BsBoxArrowUpRight } from "react-icons/bs"

import { SiDjango, SiPython, SiJavascript, SiReact, SiPostgresql, SiNginx, SiDocker, SiGunicorn, SiLinode, SiVercel, SiNextdotjs, SiRender, SiThreedotjs, SiVite, SiOpenai, SiStripe, SiInstagram, SiAmazon, SiAmazonaws } from "react-icons/si"


const Projects = () => (
  <section className="project-section" id="projects">
    <h2 className="section-heading">Projects</h2>
    <div className="project-section-container">
      
      <article className="project-card">
        <div className="col-lg-6">
          <h3>Juan Of A Kind</h3>
          <p>Website developed for a client with a Food Truck. The project includes informational pages for the general public, user pages to place orders and manage their as well as an administrative backend to assist with their business such as expenses, inventory, and recipes.</p>
          <p>Technologies used: </p>
            <SiPython className="project-icon"/>
            <SiReact className="project-icon"/>
            <SiDjango className="project-icon"/>
            <SiPostgresql className="project-icon"/>
            <SiStripe className="project-icon"/>
            <SiAmazonaws className="project-icon"/>
          <div>
            <p>Deployed with: Docker, Gunicorn, Nginx on a Linode VPS</p>
            <SiNginx className="project-icon"/>
            <SiDocker className="project-icon"/>
            <SiGunicorn className="project-icon"/>
            <SiLinode className="project-icon"/>
          </div>
          <a className="github-link" href="https://github.com/esmoquin/django-react-docker-joak" target="_blank" rel="noopener noreferrer"><VscGithubAlt className="github-link"></VscGithubAlt></a>
          <a href="https://juanofakind.kitchen" target="_blank" rel="noopener noreferrer" className="site-link"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
      <article className="project-card">
        <div className="col-lg-6 order-lg-1">
          <h3>Stephanie Johnson</h3>
          <p>Project created for a Tattoo Artist website that wanted a funnel for people to contact her and submit consultations. Instagram API was integrated in order to display their work as their portfolio. Future iterations of the site will be able to fully manage booking appointment and paying for them through the site.</p>
          <p>Technologies used: </p>
            <SiPython className="project-icon"/>
            <SiReact className="project-icon"/>
            <SiDjango className="project-icon"/>
            <SiPostgresql className="project-icon"/>
            <SiInstagram className="project-icon"/>
          <div>
            <p>Deployed with: Docker, Gunicorn, Nginx on a Linode VPS</p>
            <SiNginx className="project-icon"/>
            <SiDocker className="project-icon"/>
            <SiGunicorn className="project-icon"/>
            <SiLinode className="project-icon"/>
          </div>
          <a className="github-link" href="https://github.com/esmoquin/sj_front" target="_blank" rel="noopener noreferrer"><VscGithubAlt></VscGithubAlt></a>
          <a className="site-link" href="https://stephaniejohnson.tattoo" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
      <article className="project-card">
        <div className="col-lg-6">
          <h3>T-Shirt Customizer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum odio eget massa venenatis, quis ullamcorper orci finibus.</p>
          <div>
            <p>Technologies used:</p>
            <SiReact className="project-icon"/>
            <SiThreedotjs className="project-icon"/>
            <SiOpenai className="project-icon"/>
            <SiVite className="project-icon"/>
          </div>
          <div>
            <p>Deployed with:</p>
            <SiRender className="project-icon"/>
            <SiVercel className="project-icon"/>
          </div>
          <a className="github-link" href="https://github.com/ElPinguiino/threejs_project" target="_blank" rel="noopener noreferrer"><VscGithubAlt></VscGithubAlt></a>
          <a className="site-link" href="https://camisa.online" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
      <article className="project-card">
        <div className="col-lg-6">
          <h3>Geisha Creations</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum odio eget massa venenatis, quis ullamcorper orci finibus.</p>
          <div>
            <p>Technologies used:</p>
            <SiNextdotjs className="project-icon"/>
          </div>
          <div>
            <p>Deployed with:</p>
            <SiVercel className="project-icon"/>
          </div>
          <a className="github-link" href="https://github.com/ElPinguiino/geishacreations_ecommerce" target="_blank" rel="noopener noreferrer"><VscGithubAlt></VscGithubAlt></a>
          <a className="site-link" href="https://www.geishacreations.shop/" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
      <article className="project-card">
        <div className="col-lg-6">
          <h3>Social Tiles</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum odio eget massa venenatis, quis ullamcorper orci finibus.</p>
          <div>
            <p>Technologies used:</p>
            <SiNextdotjs className="project-icon"/>
          </div>
          <div>
            <p>Deployed with:</p>
            <SiVercel className="project-icon"/>
          </div>
          <a className="github-link" href="https://github.com/ElPinguiino/socialmedia_app" target="_blank" rel="noopener noreferrer"><VscGithubAlt></VscGithubAlt></a>
          <a className="site-link" href="https://www.project3.com/" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
      <article className="project-card">
        <div className="col-lg-6">
          <h3>UAE Home Search</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum odio eget massa venenatis, quis ullamcorper orci finibus.</p>
          <div>
            <p>Technologies used:</p>
            <SiNextdotjs className="project-icon"/>
          </div>
          <div>
            <p>Deployed with:</p>
            <SiVercel className="project-icon"/>
          </div>
          <a className="github-link" href="https://github.com/ElPinguiino/uaehomesearch" target="_blank" rel="noopener noreferrer"><VscGithubAlt></VscGithubAlt></a>
          <a className="site-link" href="http://uaehomesearch.vercel.app/" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
    </div>
  </section>
);

export default Projects