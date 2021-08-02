import React from "react";
import { graphql } from "gatsby";
import PageHeader from "../../components/pageHeader";
import Container from "../../components/container";
import PostHeader from "../../components/postHeader";
import PostBody from "../../components/postBody";

const Project = ({ data }) => {
  const project = data.datoCmsProject;
  console.log(project)
  return (
    <Container>
      <PageHeader to="projects" text="Projects" />
      <PostHeader text={project.title} datePublished={project.datePublished} />
    <PostBody body={project.text} />
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
