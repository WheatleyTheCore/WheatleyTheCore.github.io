import * as React from "react";
import { graphql } from "gatsby";
import ArticleSegment from "../components/articleSegment";
import ProjectSegment from "../components/projectSegment";
import Greeter from "../components/greeter";
import About from '../components/about'
import Container from "../components/container";
import Navbar from "../components/navbar";

// markup
const IndexPage = ({ data }) => {
  const isBrowser = typeof window !== "undefined"
  const previewNum = isBrowser ? Math.floor(2 *(window.innerWidth / (285))) : 6;
  //const previewNum = 8
  console.log(previewNum)
  return (
    <Container>
      <Navbar />
      <Greeter />
      <ProjectSegment edges={data.allDatoCmsProject.edges} previewNum={previewNum}/>
      <ArticleSegment edges={data.allDatoCmsArticle.edges} previewNum={previewNum}/>
      <About />
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
