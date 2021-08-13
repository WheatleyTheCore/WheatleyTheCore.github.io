import React from "react";
import { useState } from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import SearchNav from "../components/searchNav";
import LinkCard from "../components/linkCard";
import SEO from '../components/seo'

const filterPosts = require("../utils/filter");

const ArticlesSearch = ({ data }) => {
  const articles = data.allDatoCmsArticle.edges;
  const isBrowser = typeof window !== "undefined"
  const { search } = isBrowser ? window.location : "";
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredArticles = filterPosts(articles, searchQuery);

  return (
    <Container>
      <SEO title="Blog" description="personal blog"/>
    <div className="searchPage">
      <SearchNav
        path="blog"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        linkTo="projects"
        linkToText="Projects"
      />
      <div className="cardSection">
      {filteredArticles.map((post) => {
        return (
          <LinkCard
            image={post.node.image}
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

export const blogquery = graphql`
  query getAllArticles {
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
  }
`;

export default ArticlesSearch;
