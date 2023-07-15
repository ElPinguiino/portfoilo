import React, { useState } from 'react'

const Experience = () => {
    const [activeJob, setActiveJob] = useState(0);

    const jobs = [
      {
        company: "NICE CxOne",
        title: "Software Engineer",
        time: "Feb 2022 - Present",
        summary: [
          "Collaborate with customers, PMs, and stakeholders in order to ensure the proper documentation and development of IVR software to meet customer requirements.",
          "Integrate Salesforce, CRM Software, and third-party APIs into NICE CxOne IVR software.",
          "Developed and tested custom logic for error-free builds."
        ]
      },
      {
        company: "Developing Life",
        title: "Full Stack Developer",
        time: "Mar 2021 - Present",
        summary: [
          "In charge of Design and Development of client websites ",
          "Learned new technologies and programming concepts through mentorship and self-study",
          "Contributed to codebase documentation and version control using Git and GitHub"
        ]
      },
      {
        company: "Dell EMC",
        title: "Tech Support Engineer 2",
        time: "Dec 2014 - Jan 2022",
        summary: [
          "Delivered technical assistance to enterprise customers encountering issues with ViPR, a SaaS product for IT infrastructure orchestration.",
          "Escalated any issues that could not be solved by myself as well as any bugs found during troubleshooting to Engineering by creating a Jira and coordinating the subsequent actions between the customer and Engineering.",
          "Presented findings and recommendations to senior management in order to resolve the customers issues."
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
              <p className='job-company'>{job.company}</p>
            </div>
          ))}
        </div>
        <div className="job-summary">
          <p className='job-title'>{jobs[activeJob].title}</p>
          <p className='job-company'>{jobs[activeJob].company}</p>
          <p className='job-time'>{jobs[activeJob].time}</p>
          <ul>
            {jobs[activeJob].summary.map((point, index) => (
              <li className='job-title' key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </article>
      </>
    )
}

export default Experience