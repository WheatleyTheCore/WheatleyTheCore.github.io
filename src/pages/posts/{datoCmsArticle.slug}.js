import React from "react";
import { graphql } from "gatsby";
import PageHeader from "../../components/pageHeader";
import Container from "../../components/container";
import PostHeader from "../../components/postHeader";
import PostBody from "../../components/postBody";

const Article = ({ data }) => {
  const article = data.datoCmsArticle;
  return (
    <Container>
      <div className="post">
      <PageHeader to="blog" text="Blog" />
      <PostHeader text={article.title} datePublished={article.datePublished} />
    <PostBody body={article.text} />
      </div>
    </Container>
  );
};

export const query = graphql`
  query getArticle($slug: String) {
    datoCmsArticle(slug: { eq: $slug }) {
      title
      text
      datePublished
  }
}
`;
export default Article;
