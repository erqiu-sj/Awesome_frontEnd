import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
const feature = [
  { name: "文章", to: "/blog" },
  { name: "Npm", to: "" },
  { name: "关于我", to: "" },
  { name: "留言", to: "" },
];
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
          <Link to={item.to} className="navItem" key={index}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Header;
