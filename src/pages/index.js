import React from "react";
import { graphql } from "gatsby";
import ArticleSegment from "../components/articleSegment";
import ProjectSegment from "../components/projectSegment";
import Greeter from "../components/greeter";
import About from '../components/about'
import Container from "../components/container";
import Navbar from "../components/navbar";
import AttributionSegment from '../components/attributionSegment'

// markup
const IndexPage = ({ data }) => {
  const isBrowser = typeof window !== "undefined"
  const previewNum = isBrowser ? (window.innerWidth > 768 ? Math.floor(2 *(window.innerWidth / (285))) : 4) : 6;

  return (
    <Container>
      <Navbar />
      <Greeter id="greeter"  />
      <ProjectSegment id="projectSegment"  edges={data.allDatoCmsProject.edges} previewNum={previewNum}/>
      <ArticleSegment id="blogSegment"  edges={data.allDatoCmsArticle.edges} previewNum={previewNum}/>
      <About  id="about"/>
      <AttributionSegment/>
    </Container>
  );
};

export const query = graphql`
  query test {
    allDatoCmsArticle {
      edges {
        node {
          title
          slug
          datePublished
          image {
            gatsbyImageData
          }
        }
      }
    }
    allDatoCmsProject {
      edges {
        node {
          title
          datePublished
          slug
          thumbnail {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default IndexPage;
