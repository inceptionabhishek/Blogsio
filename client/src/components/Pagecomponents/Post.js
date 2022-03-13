import React from "react";
import BlogCover from '../../Images/cover.jpg'
import Chip from "@mui/material/Chip";
function Post(props) {
  const { id, title, body } = props.data;
  return (
    <div className="post">
      <img src={BlogCover} alt="Blog Cover" className="blogcover" />
      <h1 className="Heading">{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Post;
