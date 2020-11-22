import { AxiosPromise, AxiosRequestConfig } from "axios";

/*
 * @Author: 邱狮杰
 * @Date: 2020-10-31 16:18:06
 * @LastEditTime: 2020-10-31 16:21:52
 * @FilePath: /frontend/src/http/comment.ts
 * @Description: 请求评论相关的axios默认配置
 */

import Axios from "axios";

export function CommentHttp(Config: AxiosRequestConfig): AxiosPromise<any> {
  return Axios.create({
    baseURL: "http://localhost:8080/comment",
    timeout: 4000,
  })(Config);
}
