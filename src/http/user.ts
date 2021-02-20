/*
 * @Author: 邱狮杰
 * @Date: 2020-11-07 21:55:37
 * @LastEditTime: 2021-02-14 15:15:50
 * @FilePath: /Awesome_frontEnd-main/src/http/user.ts
 * @Description: 用户http默认路由 登陆注册
 */
import Axios, { AxiosRequestConfig } from "axios";
import { SignIn } from "../types/model/user";

export function UserHttp(config: AxiosRequestConfig) {
  return Axios.create({
    baseURL: "http://localhost:8080/users",
    timeout: 4000,
  })(config);
}
/**
 * @description 用于登陆
 * @param {SignIn}  info 登陆需要的数据
 */
export function login(info: SignIn): Promise<any> {
  return UserHttp({
    url: "/loginUser",
    method: "POST",
    data: info,
  });
}
/**
 * @description 注册用户接口
 * @param {SignIn}  info 注册接口
 */
export function register(info: SignIn): Promise<any> {
  return UserHttp({ url: "/addUser", data: info, method: "POST" });
}
