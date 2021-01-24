/*
 * @Author: 邱狮杰
 * @Date: 2020-11-15 04:09:42
 * @LastEditTime: 2021-01-24 16:15:50
 * @FilePath: /Awesome_frontEnd-main/src/components/header/header.tsx
 * @Description: 描述
 */
import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
const feature = [
  { name: "文章", to: "/blog" },
  { name: "Npm", to: "/npm" },
  { name: "关于我", to: "/me" },
  { name: "留言", to: "/leavingMessage" },
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
