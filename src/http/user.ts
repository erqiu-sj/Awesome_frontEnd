/*
 * @Author: 邱狮杰
 * @Date: 2020-11-07 21:55:37
 * @LastEditTime: 2021-02-11 20:08:03
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
 * @description 特殊登陆 love
 * @param {SignIn} info 只需要用户名即可 用户名即是生日
 */
export function specialLogin(info: SignIn): Promise<any> {
  return UserHttp({ url: "", data: info, method: "POST" });
}

export function register(info: SignIn): Promise<any> {
  return UserHttp({ url: "", data: info, method: "POST" });
}
