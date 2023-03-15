import React from "react";
import { useParams } from "react-router-dom";

import styles from "./Post.module.css";

const Post = () => {
  const { id } = useParams();
  return (
    <div className={styles.post_container}>
      <h3>Post {id}</h3>
    </div>
  );
};

export default Post;
