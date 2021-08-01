import React from 'react'
import {Link} from 'gatsby'
import LinkCard from './linkCard'
import SectionHeader from './sectionHeader'

const ProjectSegment = (props) => {
  let previewProjects = props.edges
  if (previewProjects.length > props.previewNum) {
    previewProjects = previewProjects.slice(0, props.previewNum)
  }

  return (
    <div className="segment" id="projectSegment">
      <SectionHeader text="Some projects I've worked on"/>
      <div className="cardSection">
        {previewProjects.map(edge => {
        return (
          <LinkCard image={edge.node.thumbnail} slug={edge.node.slug} title={edge.node.title} datePublished={edge.node.datePublished } />
        )
        })}
    </div>
      <Link to="/projects">More projects</Link>
    </div>
  )
}

export default ProjectSegment
