import React from "react";
import { useState } from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import SearchNav from "../components/searchNav";
import LinkCard from "../components/linkCard";
import SEO from '../components/seo'

const filterPosts = require("../utils/filter");

const ProjectSearch = ({ data }) => {
  const projects = data.allDatoCmsProject.edges;

  const isBrowser = typeof window !== "undefined"
  const { search } = isBrowser ? window.location : "";

  const query = new URLSearchParams(search).get("s");

  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(projects, searchQuery);

  return (
    <Container>
      <SEO title="Projects" description="Projects that I've done"/>
    <div className="searchPage">
      <SearchNav
        path="projects"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        linkTo="blog"
        linkToText="Blog"
      />
      <div className="cardSection">
      {filteredPosts.map((post) => {
        return (
          <LinkCard
            image={post.node.thumbnail}
            slug={post.node.slug}
            title={post.node.title}
          datePublished={post.node.datePublished}
          />
        );
      })}
    </div>
    </div>
    </Container>
  );
};

export const projectquery = graphql`
  query getAllProjects {
    allDatoCmsProject {
      edges {
        node {
          title
          slug
          datePublished
          thumbnail {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default ProjectSearch;
