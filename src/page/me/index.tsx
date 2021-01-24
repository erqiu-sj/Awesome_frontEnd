/*
 * @Author: 邱狮杰
 * @Date: 2021-01-24 16:12:35
 * @LastEditTime: 2021-01-24 16:48:01
 * @FilePath: /Awesome_frontEnd-main/src/page/me/index.tsx
 * @Description: Me
 */
import React, { FC } from "react";
import TechnicalIntroduction from "./components/technicalIntroduction/index";
import { frontendTechnologyList, backendTechnologList } from "./params";
import "./index.scss";
type Props = {};

const Me: FC<Props> = () => {
  return (
    <div className="me">
      <h1>Hooks_28的小站</h1>
      <h2>本站使用技术</h2>
      <h4>本人前端，react党，该博客正在构建中...</h4>
      <TechnicalIntroduction
        frontentList={frontendTechnologyList}
        backendList={backendTechnologList}
      />
    </div>
  );
};
export default Me;
