
import React from 'react'
import NextSectionButton from './nextSectionButton'

const SkillsSection = () => {
  return (
    <div className="segment" id="about2">
      <div className="aboutSegmentContent">
        testing two
      </div>
      <div className="aboutSegmentNext">
        <NextSectionButton to="about3"/>
      </div>
    </div>
  )
}

export default SkillsSection
