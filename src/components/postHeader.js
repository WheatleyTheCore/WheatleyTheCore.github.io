import React from "react";

const PostHeader = (props) => {
  return (
    <div className="postHeader">
      <h1>{props.text}</h1>
      <h3>{`published ${props.datePublished}`}</h3>
    </div>
  );
};

export default PostHeader;
