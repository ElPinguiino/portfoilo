import React, { useState } from 'react'

const Experience = () => {
    const [activeJob, setActiveJob] = useState(0);

    const jobs = [
      {
        company: "NICE CxOne",
        title: "Software Engineer",
        time: "Feb 2022 - Present",
        summary: [
          "Developed new features for a web-based SaaS product using React and Node.js",
          "Collaborated with product and design teams to improve user experience and interface",
          "Maintained and improved code quality through code reviews, testing, and refactoring"
        ]
      },
      {
        company: "Developing Life",
        title: "Full Stack Developer",
        time: "Mar 2021 - Present",
        summary: [
          "Assisted senior developers with development tasks using Java and Spring Framework",
          "Learned new technologies and programming concepts through mentorship and self-study",
          "Contributed to codebase documentation and version control using Git and GitHub"
        ]
      },
      {
        company: "Dell EMC",
        title: "Tech Support Engineer 2",
        time: "Dec 2014 - Jan 2022",
        summary: [
          "Assisted with database management and data analysis tasks using SQL and Excel",
          "Participated in team meetings and contributed ideas for process improvement",
          "Presented findings and recommendations to senior management"
        ]
      }
    ];
  
    function handleJobClick(index) {
      setActiveJob(index);
    }
  
    return (
      <>
        <h2 className="section-heading">Experience</h2>
      <article className="experience-section" id="experience">
        <div className="slider">
          {jobs.map((job, index) => (
            <div key={index} className={`slider-item ${index === activeJob ? 'active' : ''}`} onClick={() => handleJobClick(index)}>
              <p>{job.company}</p>
            </div>
          ))}
        </div>
        <div className="job-summary">
          <p className='job-title'>{jobs[activeJob].title}</p>
          <p className='job-company'>{jobs[activeJob].company}</p>
          <p className='job-time'>{jobs[activeJob].time}</p>
          <ul>
            {jobs[activeJob].summary.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </article>
      </>
    )
}

export default Experience