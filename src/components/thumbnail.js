import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'

const Thumbnail = props => {
  return (
    <div className="thumbnail">
      <GatsbyImage image={props.image} alt="thumbnail" />
    </div>
  )
}

export default Thumbnail
