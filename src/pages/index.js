import React from "react";
import { graphql } from "gatsby";
import ArticleSegment from "../components/articleSegment";
import ProjectSegment from "../components/projectSegment";
import GreeterSegment from "../components/greeterSegment";
import AboutSegment from '../components/aboutSegment'
import Container from "../components/container";
import MainNavbar from "../components/mainNavbar";

// markup
const IndexPage = ({ data }) => {
  const isBrowser = typeof window !== "undefined"
  const previewNum = isBrowser ? (window.innerWidth > 768 ? Math.floor(2 *(window.innerWidth / (300))) : 4) : 6;

  return (
    <Container>
      <MainNavbar />
      <GreeterSegment id="greeter"  />
      <ProjectSegment id="projectSegment"  edges={data.allDatoCmsProject.edges} previewNum={previewNum}/>
      <ArticleSegment id="blogSegment"  edges={data.allDatoCmsArticle.edges} previewNum={previewNum}/>
      <AboutSegment  id="about"/>
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
