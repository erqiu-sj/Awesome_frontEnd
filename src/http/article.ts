/*
 * @Author: 邱狮杰
 * @Date: 2020-10-31 16:09:10
 * @LastEditTime: 2020-11-14 12:15:54
 * @FilePath: /GoServer_frontEnd/awesome_frontend/http/article.ts
 * @Description: 请求文章相关的axios默认配置
 */
import Axios, { AxiosPromise, AxiosRequestConfig } from "axios";
export function articleHttp(config: AxiosRequestConfig): AxiosPromise<any> {
  const http = Axios.create({
    baseURL: "http://localhost:8080/article",
    timeout: 4000,
  });
  return http(config);
}
