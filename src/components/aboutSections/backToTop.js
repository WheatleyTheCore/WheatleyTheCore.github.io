import React from 'react'
import {FaAngleDoubleUp} from 'react-icons/fa'

const BackToTop = ({ to }) => {
  return (
      <a href={`#${to}`}>
        <div className="nextSectionButton">
          <FaAngleDoubleUp />
        </div>
      </a>
  )
}

export default BackToTop
