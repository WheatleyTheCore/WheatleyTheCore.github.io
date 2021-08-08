import React from 'react'
import IntroSection from './aboutSections/introSection'
import SkillsSection from './aboutSections/skillsSection'
import ContactSection from './aboutSections/contactSection'

const About = () => {
  return (
    <div id="about">
      <IntroSection/>
      <SkillsSection/>
      <ContactSection/>

      <div className="fauxButton">
      <a href={`resume.pdf`} download>
        You can download my resume here
      </a>
    </div>
    </div>
  )
}

export default About
