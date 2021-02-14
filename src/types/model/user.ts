/*
 * @Author: 邱狮杰
 * @Date: 2020-11-07 21:59:59
 * @LastEditTime: 2021-02-11 15:49:04
 * @FilePath: /Awesome_frontEnd-main/src/types/model/user.ts
 * @Description: 用户相关接口定义
 */

interface PublicInfo {
  userName: string; // 用户名or邮箱
  password?: string;
}
// 注册需要填写的信息
export interface Registered extends PublicInfo {}
// 登陆需要填写的信息
export interface SignIn extends PublicInfo {
  ta?: boolean;
}
// 删除账号, 分为两种情况,后台管理人注销or Usr本人进行注销
export interface DeleteUsr extends PublicInfo {
  isBoss?: boolean;
}
