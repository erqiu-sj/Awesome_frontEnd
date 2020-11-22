/*
 * @Author: 邱狮杰
 * @Date: 2020-10-17 17:22:02
 * @LastEditTime: 2020-10-17 18:10:52
 * @FilePath: /frontend/src/http/http.ts
 * @Description: http
 */
import axios, { AxiosRequestConfig } from "axios";
export function ArticleHttp(config: AxiosRequestConfig) {
  const http = axios.create({
    baseURL: "http://127.0.0.1:8080/article",
    timeout: 4000,
  });
  return http(config);
}
