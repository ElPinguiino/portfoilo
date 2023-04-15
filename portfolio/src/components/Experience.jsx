import React, { useState } from 'react'

const Experience = () => {
    const [activeJob, setActiveJob] = useState(0);

    const jobs = [
      {
        company: "NICE CxOne",
        title: "Software Engineer",
        time: "Feb 2022 - Present",
        summary: [
          "Collaborate with customers, Project Managers, and Implementation team members to ensure timely completion of builds in accordance with specified requirements.",
          "Ensure the proper functioning of third-party APIs and other necessary build integrations, such as Conversational AI or CRMs, by effectively integrating them into NICE CxOne's IVR software to meet the build's objectives.",
          "Developed custom logic for processing and parsing customer data, and performed rigorous testing to ensure that the build was free of bugs, issues, or undesirable outcomes before submitting it for QA."
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
          "Delivered technical assistance to enterprise customers encountering issues with ViPR, a SaaS product.",
          "Escalated any issues that could not be solved by myself as well as any bugs found during troubleshooting to Engineering by creating a Jira and coordinating the subsequent actions between the customer and Engineering.",
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
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </article>
      </>
    )
}

export default Experience