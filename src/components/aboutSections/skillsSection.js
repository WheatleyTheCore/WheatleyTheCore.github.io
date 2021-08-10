
import React from 'react'
import NextSectionButton from './nextSectionButton'
import List from './list'
import SectionHeader from '../sectionHeader'

//TODO break repeated skillsectiontitle skillsectioncontent structure into component or something to make this even a little bit comprehenible

const SkillsSection = () => {
  return (
    <div className="segment" id="about2">
      <div className="aboutSegmentContent">
        <SectionHeader text="Skills"/>
        <div className="skillSectionContainer">
          <div className="skillSection">
            <div className="skillSectionTitle">
              <h3>Languages</h3>
            </div>
            <div className="skillSectionContent">
              <List items={["JavaScript", "HTML", "CSS", "Python", "C++", "C (Embedded)", "Java", "Bash", "Ruby (RoR)", "Markdown", "LaTeX"]}/>
            </div>
          </div>
          <div className="skillSection">
            <div className="skillSectionTitle">
              <h3>FrameWorks</h3>
            </div>
            <div className="skillSectionContent">
              <List items={["React", "Gatsby", "Ruby on Rails", "OpenCV", "Arduino", "Processor Expert", "ESP IoT Development Framework"]}/>
            </div>
          </div>
          <div className="skillSection">
            <div className="skillSectionTitle">
              <h3>Misc</h3>
            </div>
            <div className="skillSectionContent">
              <List items={["MacOS, Windows, and Linux SysAdmin", "SQL", "GraphQL", "Auth0", "Firebase", "DatoCMS", "MaterialUI"]}/>
            </div>
          </div>
      </div>
      <div className="aboutSegmentNext">
        <NextSectionButton to="about3"/>
      </div>
      </div>
    </div>
  )
}

export default SkillsSection
