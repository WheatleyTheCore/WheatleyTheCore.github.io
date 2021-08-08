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
    </div>
  )
}

export default About
