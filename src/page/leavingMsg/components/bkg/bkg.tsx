/*
 * @Author: 邱狮杰
 * @Date: 2020-11-28 20:25:34
 * @LastEditTime: 2020-11-29 09:23:05
 * @FilePath: /Awesome_frontEnd-main/src/page/leavingMsg/components/bkg/bkg.tsx
 * @Description: 留言板背景
 */
import React, { FC } from "react";
import "./bkg.scss";
type Props = {};

const Bkg: FC<Props> = () => {
  return (
    <div className="bkg">
      <div className="content">
        <p>起初 你拉我一起看雨</p>
        <p>大雨里百鬼夜行</p>
        <p>我们混在其中 比鬼还高兴</p>
        <p>后来我拉你一起生活</p>
        <p>过很多人的日子</p>
        <p>写出来 很难写得浪漫</p>
      </div>
    </div>
  );
};
export default Bkg;
