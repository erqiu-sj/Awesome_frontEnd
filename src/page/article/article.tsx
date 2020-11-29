import React, { FC } from "react";
import { useLocation } from "react-router-dom";

type Props = {};

const Article: FC<Props> = () => {
  // 只需要文章名进行查询即可
  const { state } = useLocation();

  return (
    <div>
      <h1>{(state as { title: string }).title}</h1>
      <p>Content</p>
      <div>type time as 文章创建时间</div>
      commment
    </div>
  );
};
export default Article;
