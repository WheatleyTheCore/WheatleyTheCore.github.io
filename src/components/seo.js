import React from 'react'
import Helmet from 'react-helmet'

const SEO = ({description, title}) => (
  <Helmet>
    <html lang='en'/>
    <title>{title}</title>
    <meta name='description' content={description}/>
  </Helmet>
)

export default SEO
