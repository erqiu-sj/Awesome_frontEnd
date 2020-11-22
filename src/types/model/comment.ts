/*
 * @Author: 邱狮杰
 * @Date: 2020-10-31 15:52:53
 * @LastEditTime: 2020-11-07 10:28:58
 * @FilePath: /frontend/src/types/model/comment.ts
 * @Description: 评论相关接口
 */
interface publicInterface {
  Start?: number; // 点赞
  NumberOfComplaints?: number; // 被投诉次数
  CommentContent: string; // 内容
  aricle: string; // 文章名
}
// 一级评论
export interface Comment extends publicInterface {
  userName: string; // 谁评论了这篇文章
}
// 二级评论
export interface SecondaryReview extends publicInterface {
  userName: string; // 回复谁的评论
}
