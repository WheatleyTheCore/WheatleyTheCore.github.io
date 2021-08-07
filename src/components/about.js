import React from 'react'

const About = () => {
  return (
    <div className="segment" id="about">
      I'm a software developer


      <div className="fauxButton">
      <a href={`resume.pdf`} download>
        You can download my resume here
      </a>
    </div>
    </div>
  )
}

export default About
