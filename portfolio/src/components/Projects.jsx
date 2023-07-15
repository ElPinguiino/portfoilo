import React, { useState } from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { BsBoxArrowUpRight } from "react-icons/bs"

import { SiDjango, SiPython, SiJavascript, SiReact, SiPostgresql, SiNginx, SiDocker, SiGunicorn, SiLinode, SiVercel, SiNextdotjs, SiRender, SiThreedotjs, SiVite, SiOpenai, SiStripe, SiInstagram, SiAmazon, SiAmazonaws, SiGithub } from "react-icons/si";
import ReactCardFlip from 'react-card-flip';


const Projects = () => {
    const [isFlipped1, setIsFlipped1] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);
    const [isFlipped3, setIsFlipped3] = useState(false);
    const [isFlipped4, setIsFlipped4] = useState(false);

    const handleClick1 = () => {
        setIsFlipped1(!isFlipped1);
    };

    const handleClick2 = () => {
      setIsFlipped2(!isFlipped2);
    };

    const handleClick3 = () => {
      setIsFlipped3(!isFlipped3);
    };

    const handleClick4 = () => {
    setIsFlipped4(!isFlipped4);
    };

  return (
    <section className="project-section" id="projects">
    <h2 className="section-heading">Projects</h2>
    <div className="project-section-container">
      
      <article className="project-card">
        <div className="col-lg-6 front-of-card">
          <h3>Juan Of A Kind</h3>
          <p>Website developed for a client with a Food Truck. Developed using DRF for the backend and React.js for the frontend.</p>
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
          {/* <button className="flip-button" onClick={handleFlip}></button> */}
          <a className="project-icon" href="https://github.com/esmoquin/django-react-docker-joak" target="_blank" rel="noopener noreferrer"><SiGithub /></a>
          <a className="project-icon" href="https://juanofakind.kitchen" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
        {/* <div className="col-lg-6 back-of-card">
          <p></p>
        </div> */}
        {/* <section id="accordions">
        <details>
          <summary>Use Case:</summary>
          <p>
            Website developed for a client with a Food Truck. The project includes informational pages for the general public, user pages to place orders and manage their as well as an administrative backend to assist with their business such as expenses, inventory, and recipes. The website is integrated with Stripe prebuilt checkout for customers to be order online.
          </p>
        </details>
      </section> */}
      </article>
      <article className="project-card">
        <div className="col-lg-6 order-lg-1">
          <h3>Stephanie Johnson</h3>
          {/* <p>Project created for a Tattoo Artist website that wanted a funnel for people to contact her and submit consultations. Instagram API was integrated in order to display their work as their portfolio. Future iterations of the site will be able to fully manage booking appointment and paying for them through the site.</p> */}
          <p>Website developed for a local tattoo artist. Developed using DRF for the backend and React.js for the fronted.</p>
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
          <a className="project-icon" href="https://github.com/esmoquin/sj_front" target="_blank" rel="noopener noreferrer"><SiGithub /></a>
          <a className="project-icon" href="https://stephaniejohnson.tattoo" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
      <article className="project-card">
        <div className="col-lg-6">
          <h3>T-Shirt Customizer</h3>
          <p>Project created to learn the basics of Three.js and make use of DALL-E by OpenAI</p>
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
          <a className="project-icon" href="https://github.com/ElPinguiino/threejs_project" target="_blank" rel="noopener noreferrer"><SiGithub /></a>
          <a className="project-icon" href="https://camisa.online" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
      <article className="project-card">
        <div className="col-lg-6">
          <h3>Geisha Creations</h3>
          <p>Online store created for a client who sells resin pieces online. Developed using Next.js and React.js as well as headless CMS</p>
          <div>
            <p>Technologies used:</p>
            <SiNextdotjs className="project-icon"/>
            <SiReact className="project-icon"/>
          </div>
          <div>
            <p>Deployed with:</p>
            <SiVercel className="project-icon"/>
          </div>
          <a className="project-icon" href="https://github.com/ElPinguiino/geishacreations_ecommerce" target="_blank" rel="noopener noreferrer"><SiGithub /></a>
          <a className="project-icon" href="https://geishacreations-ecommerce.vercel.app/" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
      <article className="project-card">
        <div className="col-lg-6">
          <h3>Social Tiles</h3>
          <p>Project created to learn how to program a social media type website. Developed using Next.js and React.js as well as headless CMS</p>
          <div>
            <p>Technologies used:</p>
            <SiNextdotjs className="project-icon"/>
            <SiReact className="project-icon"/>
          </div>
          <div>
            <p>Deployed with:</p>
            <SiVercel className="project-icon"/>
          </div>
          <a className="project-icon" href="https://github.com/ElPinguiino/socialmedia_app" target="_blank" rel="noopener noreferrer"><SiGithub /></a>
          <a className="project-icon" href="https://socialtiles.netlify.app/" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
      <article className="project-card">
        <div className="col-lg-6">
          <h3>UAE Home Search</h3>
          <p>Project created to learn how to integrate a frontend with an external API. Takes advantage of Rapid API for the data.</p>
          <div>
            <p>Technologies used:</p>
            <SiNextdotjs className="project-icon"/>
            <SiReact className="project-icon"/>
          </div>
          <div>
            <p>Deployed with:</p>
            <SiVercel className="project-icon"/>
          </div>
          <a className="project-icon" href="https://github.com/ElPinguiino/uaehomesearch" target="_blank" rel="noopener noreferrer"><SiGithub /></a>
          <a className="project-icon" href="http://uaehomesearch.vercel.app/" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
        </div>
      </article>
      {/* <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
      <article className="project-card-front">
        <div className="col-lg-6">
          <h3>UAE Home Search</h3>
          <p>Project created to learn how to integrate a frontend with an external API. Takes advantage of Rapid API for the data.</p>
          <div>
            <p>Technologies used:</p>
            <SiNextdotjs className="project-icon"/>
            <SiReact className="project-icon"/>
          </div>
          <div>
            <p>Deployed with:</p>
            <SiVercel className="project-icon"/>
          </div>
          <a className="project-icon" href="https://github.com/ElPinguiino/uaehomesearch" target="_blank" rel="noopener noreferrer"><SiGithub /></a>
          <a className="project-icon" href="http://uaehomesearch.vercel.app/" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight></BsBoxArrowUpRight></a>
          <button className="project-card-button" onClick={handleClick4}>Project Summary</button>
        </div>
      </article>
      <article className="project-card-back">
        <div className="col-lg-6">
          <h3>UAE Home Search</h3>
          <p>Project created to learn how to integrate a frontend with an external API. Takes advantage of Rapid API for the data.</p>
          <button className="project-card-button" onClick={handleClick4}>Project Details</button>
        </div>
      </article>       
      </ReactCardFlip> */}
    </div>
  </section>
  );
};

export default Projects