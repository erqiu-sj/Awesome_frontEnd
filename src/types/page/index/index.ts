/*
 * @Author: 邱狮杰
 * @Date: 2020-11-22 16:25:07
 * @LastEditTime: 2020-11-22 16:38:40
 * @FilePath: /Awesome_frontEnd-main/src/types/page/index/index.ts
 * @Description: 首页相关类型
 */

// 首页置顶文章类型即模拟数据
export interface HomePageArticle {
  title: string;
  desc: string;
  type: string;
  time: string;
}
export const TopArticle: HomePageArticle[] = [
  {
    title: "title",
    desc:
      "ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent",
    type: "TypeScript",
    time: "TIme",
  },
  {
    title: "title",
    desc:
      "ContentContentContentContentContentContentContentContentContentContentContentContent",
    type: "TypeScript",
    time: "TIme",
  },
];
