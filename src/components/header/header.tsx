import React, { FC } from "react";
import "./header.scss";
const feature = ["文章", "Npm", "关于我", "留言", "专栏"];
type Props = {};

const Header: FC<Props> = () => {
  return (
    <div className="header">
      <div className="pathMain">
        <div className="gitPath">
          <span className="iconfont icon-GitHub"></span>
          <a href="https://github.com/erqiu-sj">Github</a>
          <div className="block"></div>
        </div>
      </div>
      <div className="navList">
        {feature.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
};
export default Header;
