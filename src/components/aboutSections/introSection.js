import React from 'react'
import NextSectionButton from './nextSectionButton'
import SectionHeader from '../sectionHeader'

const IntroSection = () => {
  return (
    <div className="segment" id="about1">
        <div className="aboutSegmentContent">
          <SectionHeader text="Summary"/>
          <div className="aboutIntroText">
            I'm a tech enthusiast who specializes in software. I'm a junior-level jack of all trades (for now), and love pushing myself to expland my skillset.
            I'm a recent high school graduate (but I've been taken a number of college courses), and have been making things with technology for around 12 years.
            Some of my hobbies include cooking, music, doing small hardware projects, and volunteering at my local food pantry.
          </div>
        </div>
        <div className="aboutSegmentNext">
          <NextSectionButton to="about2" />
        </div>
    </div>
  )
}

export default IntroSection
