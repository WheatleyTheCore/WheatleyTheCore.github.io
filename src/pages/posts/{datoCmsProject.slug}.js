import React from "react";
import { graphql } from "gatsby";
import PageHeader from "../../components/pageHeader";
import Container from "../../components/container";
import PostHeader from "../../components/postHeader";
import PostBody from "../../components/postBody";

const Project = ({ data }) => {
  const project = data.datoCmsProject;
  return (
    <Container>
      <div className="post">
      <PageHeader to="projects" text="Projects" />
      <PostHeader text={project.title} datePublished={project.datePublished} />
    <PostBody body={project.text} />
    </div>
    </Container>
  );
};

export const query = graphql`
  query getProject($slug: String) {
    datoCmsProject(slug: { eq: $slug }) {
      title
      text
      datePublished
    }
  }
`;
export default Project;
