/*
 * @Author: 邱狮杰
 * @Date: 2020-11-28 11:56:18
 * @LastEditTime: 2020-11-29 10:38:55
 * @FilePath: /Awesome_frontEnd-main/src/types/page/blog/blog.ts
 * @Description: 博客相关的类型定义
 */
export interface Blog {
  title: string;
  // 简介
  briefIntroduction: string;
  // 文章类型 例：typescript
  articleType: string;
  // 浏览量
  browse: number;
  // 时间
  time: string;
}
//列表展示所需
export interface BlogList extends Blog {
  // 评论数
  comment: number;
}
