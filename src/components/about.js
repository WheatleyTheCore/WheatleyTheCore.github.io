import React from 'react'

const About = () => {
  return (
    <div className="segment" id="about">
      Welcome to the about segment

      <div className="previewButton">
      <a href={`resume.pdf`} download>
        You can download my resume here
      </a>
    </div>
    </div>
  )
}

export default About
