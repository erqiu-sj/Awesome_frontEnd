/*
 * @Author: 邱狮杰
 * @Date: 2020-10-31 16:05:14
 * @LastEditTime: 2020-11-29 09:45:23
 * @FilePath: /Awesome_frontEnd-main/src/types/model/article.ts
 * @Description: 文章相关接口
 */
interface articlePublic {
  Title: string; // 文章标题
  Content: string; // 文章内容
  Tag: string; // 文章标签
}
// 获取某篇文章
export interface GetArticle extends articlePublic {
  CreateTime: string; // 文章创建时间
  Comment: number; // 评论数
}
// 新增文章
export interface AddArticle extends articlePublic {
  Introduction: string;
  Top: string;
  Type: string;
}
