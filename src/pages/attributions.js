import React from 'react'
import Container from '../components/container'
import { Link } from 'gatsby'
import SEO from '../components/seo'

const Attributions = () => {
  return (
  <Container>
    <SEO title="Attributions" description="attributions for this I've used that aren't mine"/>
    <div className="nav">
      <div className="navLinks">
        <Link to="/">Home</Link>
      </div>
    </div>


    <div className="attributions">
    <div>Git Icon made by <a href="https://twitter.com/jasonlong" title="Jason Long"> Jason Long</a></div>
<div>Script Icon made by <a href="https://creativemarket.com/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div> All other non-organization-based Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
</div>
  </Container>
  )
}

export default Attributions
