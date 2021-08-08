import React from 'react'
import NextSectionButton from './nextSectionButton'

const IntroSection = () => {
  return (
    <div className="segment" id="about1">
        <div className="aboutSegmentContent">
          testing one
        </div>
        <div className="aboutSegmentNext">
          <NextSectionButton to="about2" />
        </div>
    </div>
  )
}

export default IntroSection
