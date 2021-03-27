/*
 * @Author: 邱狮杰
 * @Date: 2020-11-07 21:59:59
 * @LastEditTime: 2021-03-26 21:16:47
 * @FilePath: /Awesome_frontEnd-main/src/types/model/user.ts
 * @Description: 用户相关接口定义
 */

interface PublicInfo {
  userName: string; // 用户名or邮箱
  password?: string; // 密码
  email?: string; // 邮箱
  isStop?: boolean; // 是否停止服务
  stopMethod?: "stop" | "gracefulStop"; // 停止方式
}
// 注册需要填写的信息
export interface Registered extends PublicInfo {
  birthday?: string; // 生日
  gender?: string; // 性别
  isRegister?: boolean; // 是否验证注册
}
// 登陆需要填写的信息
export interface SignIn extends PublicInfo {}
// 删除账号, 分为两种情况,后台管理人注销or Usr本人进行注销
export interface DeleteUsr extends PublicInfo {
  isBoss?: boolean;
}
