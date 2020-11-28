import React, { FC, useEffect, useRef } from "react";
import "./classification.scss";
// 分类列表
const classList = [
  "JavaScript",
  "TypeScript",
  "Node",
  "Webpack",
  "Golang",
  "TypeScript",
  "Node",
  "Webpack",
  "Golang",
  "TypeScript",
  "Node",
  "Webpack",
  "Golang",
  "TypeScript",
  "Node",
  "Webpack",
  "Golang",
];
type Props = {};
const Classification: FC<Props> = () => {
  const ulHeight = useRef(null);
  useEffect(() => {
    console.log(ulHeight.current);
  }, []);
  return (
    <div className="classification">
      <div className="classificationItem">
        <span>分类</span>
        <span className="iconfont icon-fenlei1"></span>
      </div>
      <ul ref={ulHeight}>
        {classList.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
export default Classification;
