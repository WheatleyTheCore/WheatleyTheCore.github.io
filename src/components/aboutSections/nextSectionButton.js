import React from 'react'
import {FaChevronDown} from 'react-icons/fa'

const NextSectionButton = ({ to }) => {
  return (
    <div className="nextSectionButton">
      <a href={`#${to}`}><FaChevronDown /></a>
    </div>
  )
}

export default NextSectionButton
