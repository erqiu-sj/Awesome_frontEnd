/*
 * @Author: 邱狮杰
 * @Date: 2020-11-07 21:59:59
 * @LastEditTime: 2020-11-08 10:46:01
 * @FilePath: /frontend/src/types/model/user.ts
 * @Description: 用户相关接口定义
 */

interface PublicInfo {
  userName: string;
  passWord: string;
}
// 注册需要填写的信息
export interface Registered extends PublicInfo {
  Email?: string; // 用于发布订阅，首次注册选填
}
// 登陆需要填写的信息
export interface SignIn extends PublicInfo {
  Email?: string; // 支持邮箱登陆，后期可支持qq or wechat
}
// 删除账号, 分为两种情况,后台管理人注销or Usr本人进行注销
export interface DeleteUsr extends PublicInfo {
  isBoss?: boolean;
}
