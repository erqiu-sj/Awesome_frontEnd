/*
 * @Author: 邱狮杰
 * @Date: 2020-11-15 04:09:42
 * @LastEditTime: 2021-02-14 12:50:40
 * @FilePath: /Awesome_frontEnd-main/src/components/header/header.tsx
 * @Description: 描述
 */
import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
const feature = [
  { name: "love", to: "/love" },
  { name: "文章", to: "/blog" },
  { name: "Npm", to: "/npm" },
  { name: "关于我", to: "/me" },
  { name: "留言", to: "/leavingMessage" },
  { name: "2.14", to: "/ValentinesDay" },
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
