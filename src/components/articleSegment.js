import React from 'react'
import { Link } from 'gatsby'
import LinkCard from './linkCard'
import SectionHeader from './sectionHeader'


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
        <Link to="/blog" className="previewButtonContainer">
          <div className="fauxButton">
            More Posts
          </div>
        </Link>
    </div>
  )
}

export default ArticleSegment
