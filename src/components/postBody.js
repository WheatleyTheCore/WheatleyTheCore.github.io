import React from "react";
import ReactMarkdown from 'react-markdown'

const PostBody = (props) => {
  return (
    <div className="postBody">
    <ReactMarkdown children={props.body}/>
    </div>
  );
};

export default PostBody;
