/*
 * @Author: 邱狮杰
 * @Date: 2020-11-07 21:55:37
 * @LastEditTime: 2020-11-07 21:59:10
 * @FilePath: /frontend/src/http/user.ts
 * @Description: 用户http默认路由
 */
import Axios, { AxiosRequestConfig } from "axios";

export function UserHttp(config: AxiosRequestConfig) {
  return Axios.create({
    baseURL: "http://localhost:8080/user",
    timeout: 4000,
  })(config);
}
