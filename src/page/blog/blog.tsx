import React, { FC, lazy, Suspense } from "react";
import { Skeleton, Pagination } from "antd";
import { BlogListData } from "./utils";
import GoHome from "../../components/goHome/goHome";
// 分类条 Components
import Classification from "./components/classification/classification";
// blogContentList  Components
import "./blog.scss";
const BlogList = lazy(() => import("./components/blogContent/blogContent"));

type Props = {};
const Blog: FC<Props> = () => {
  return (
    <div className="blog">
      <div className="blog_container">
        <Classification />
        <Suspense fallback={<Skeleton />}>
          <BlogList BlogList={BlogListData} />
        </Suspense>
        <br />
        <Pagination defaultCurrent={1} total={500} />
      </div>
      <GoHome />
    </div>
  );
};
export default Blog;
