/*
 * @Author: 邱狮杰
 * @Date: 2021-02-11 20:42:14
 * @LastEditTime: 2021-02-14 15:15:25
 * @FilePath: /Awesome_frontEnd-main/src/http/lover.ts
 * @Description: lover
 */
import Axios, { AxiosRequestConfig } from "axios";
import { loverBasic } from "./../types/model/lover";

export function LoveBasic(config: AxiosRequestConfig) {
  return Axios.create({
    baseURL: "http://localhost:8080/loverTime",
    timeout: 4000,
  })(config);
}
/**
 *
 * @description 恋爱登陆
 * @param info 老婆信息
 */
export function LoveLogin(info: loverBasic) {
  return LoveBasic({ url: "/login", data: info, method: "POST" });
}
