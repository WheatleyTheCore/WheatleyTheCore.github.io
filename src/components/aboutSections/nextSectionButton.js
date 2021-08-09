import React from 'react'
import {FaChevronDown} from 'react-icons/fa'

const NextSectionButton = ({ to }) => {
  return (
      <a href={`#${to}`}>
        <div className="nextSectionButton">
          <FaChevronDown />
        </div>
      </a>
  )
}

export default NextSectionButton
