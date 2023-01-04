import React from 'react'
import '../../resources/templates.css'
function Template1() {
  const user = JSON.parse(localStorage.getItem('Almabetter-user'))
  return (
    <div className='template1-parent'>
      <div className="top d-flex justify-content-between">
        <h1>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</h1>
        <div>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.mobilenumber}</p>
        </div>
      </div>
      <div className="divider mt-3"></div>
      <div className="objective mt-3">
        <h3>Objective</h3>
        <hr />
        <p>{user.carrierobjective}</p>
      </div>
      <div className="divider mt-3"></div>

      <div className="education mt-3">
        <h3>Education</h3>
        <hr />
        {user.education.map((education) => {
          return (
            <div className="d-flex align-items-center">
              <h6 style={{ width: 60 }}>
                <b>{education.year} : </b></h6>
              <p>
                <b>{education.qualification}</b> with <b>{education.percentage}%</b> in{" "}
                <b>{education.institution}</b>
              </p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>

      <div className="experience mt-3">
        <h3>Experience</h3>
        <hr />
        {user.experience.map((exp) => {
          return (
            <div className="d-flex align-items-center">
              <h6>
                <b>{exp.year} : {" "}</b></h6>
              <p>
                <b>{exp.company}</b> in{" "}
                <b>{exp.place}</b>
              </p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>

      <div className="projects mt-3">
        <h3>Projects</h3>
        <hr />
        {user.projects.map((project) => {
          return (
            <div className="d-flex flex-column">
              <h6>
                <b>
                  {project.title} [{project.years}] {" "}
                </b>
              </h6>
              <p>
                   {project.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>

      <div className="skills mt-3">
        <h3>Skills</h3>
        <hr />
        {user.skills.map((skills) => {
          return (
              <p>{skills.technology}</p>
          
          );
        })}
      </div>

    </div>
  );
}

export default Template1