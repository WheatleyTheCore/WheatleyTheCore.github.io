import React from 'react'
import { Link } from 'gatsby'

const AttributionSegment = () => {
  return (
    <div className="attributionSegment">

      <div className="attributionText">*Some Icons Used On this site are not my own. Attrubutions can be found</div>
      <div className="attributionLink"><Link to="/attributions"> here</Link></div>
    </div>
  )
}

export default AttributionSegment
