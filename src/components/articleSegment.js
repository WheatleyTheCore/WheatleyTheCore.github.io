import React from 'react'
import { Link } from 'gatsby'
import LinkCard from './linkCard'
import SectionHeader from './sectionHeader'

//TODO MAYBE EXTRACT THE SLICE BIT SO THAT THIS CAN BE REUSED IN THE SEARCH THING

const ArticleSegment = (props) => {
  let previewArticles = props.edges;
  if (previewArticles.length > props.previewNum) {
    previewArticles=props.edges.slice(0, props.previewNum)
  }
  return (
    <div className="segment" id="articleSegment">
      <SectionHeader text="Some Blog Posts"/>
      <div className="cardSection">
        {previewArticles.map(edge => {
        return (
          <LinkCard image={edge.node.image} slug={edge.node.slug} title={edge.node.title} datePublished={edge.node.datePublished} />
        )
        })}
      </div>
      <Link to="/blog">More blog posts</Link>
    </div>
  )
}

export default ArticleSegment
