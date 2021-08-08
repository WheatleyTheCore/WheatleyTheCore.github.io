
import React from 'react'
import SectionHeader from '../sectionHeader'
import {FaEnvelope, FaGithub, FaLinkedin, FaFileDownload} from 'react-icons/fa'

const ContactSection = () => {
  return (
    <div className="segment" id="about3">
        <div className="aboutSegmentContent">
          <SectionHeader text="Me Elsewhere"/>
          <div className="contactLinks">
            <a href="mailto:alex.colwell@icloud.com"><FaEnvelope/> alex.colwell@icloud.com</a>
            <a href="https://github.com/WheatleyTheCore"><FaGithub/> My Github</a>
            <a href="https://www.linkedin.com/in/alex-colwell-852593179/"><FaLinkedin/> My LinkedIn</a>
            <a href={`resume.pdf`} download><FaFileDownload/> My Resume</a>
          </div>
        </div>
    </div>
  )
}

export default ContactSection
