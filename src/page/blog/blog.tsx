import React, { FC } from "react";
// 分类条
import Classification from "./components/classification/classification";
import "./blog.scss";
type Props = {};
const Blog: FC<Props> = () => {
  return (
    <div className="blog">
      <Classification />
      <div className="blog_container"></div>
    </div>
  );
};
export default Blog;
