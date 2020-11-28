/*
 * @Author: 邱狮杰
 * @Date: 2020-11-22 14:59:03
 * @LastEditTime: 2020-11-28 11:55:01
 * @FilePath: /Awesome_frontEnd-main/src/components/footer/utils.ts
 * @Description:
 */
import { CSSProperties } from "react";
type paramStyle = {
  mStyle: CSSProperties;
  item: string;
  mClass: string;
};
export const SpanParams: paramStyle[] = [
  {
    mStyle: { left: "5%" },
    item: "JavaScript",
    mClass: "font-4",
  },
  {
    mStyle: { left: "40%", top: "10%" },
    item: "TypeScript",
    mClass: "font-3",
  },
  {
    mStyle: { left: "80%", top: "10%" },
    item: "Electron",
    mClass: "font-2",
  },
  {
    mStyle: { left: "40%", top: "40%" },
    item: "Vue",
    mClass: "font-5",
  },
  {
    mStyle: { left: "20%", top: "20%" },
    item: "React",
    mClass: "font-3",
  },
  {
    mStyle: { left: "25%", top: "50%" },
    item: "Golang",
    mClass: "font-8",
  },
  {
    mStyle: { left: "3%", top: "50%" },
    item: "NodeJs",
    mClass: "font-3",
  },
  {
    mStyle: { right: "3%", top: "50%" },
    item: "Immutable",
    mClass: "font-3",
  },
  {
    mStyle: { bottom: "3%", top: "70%" },
    item: "Webpack",
    mClass: "font-4",
  },
  {
    mStyle: { right: "3%", top: "60%" },
    item: "Mysql",
    mClass: "font-3",
  },
  {
    mStyle: { right: "20%", top: "33%" },
    item: "Redis",
    mClass: "font-3",
  },
];
// 友链
export const friendshipChain: { herf: string; name: string }[] = [
  {
    herf: "https://www.tslang.cn/",
    name: "TypeScript中文网",
  },
  {
    herf: "www.baidu.com",
    name: "百度",
  },
];
