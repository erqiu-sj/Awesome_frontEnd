/*
 * @Author: 邱狮杰
 * @Date: 2021-02-11 20:42:14
 * @LastEditTime: 2021-02-11 20:45:16
 * @FilePath: /Awesome_frontEnd-main/src/http/lover.ts
 * @Description: lover
 */
import Axios, { AxiosRequestConfig } from "axios";

export function LoveBasic(config: AxiosRequestConfig) {
  return Axios.create({ baseURL: "http://localhost:8080", timeout: 4000 })(
    config
  );
}
