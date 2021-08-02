import React from 'react'
import {Link} from 'gatsby'

const PageHeader = (props) => {
  return (
    <h2 className="header">
      <Link className="postButton" to={`/${props.to}`}>
    {props.text}
      </Link>
    </h2>
  )
}

export default PageHeader
