/*
 * @Author: 邱狮杰
 * @Date: 2021-02-11 19:44:40
 * @LastEditTime: 2021-02-14 14:55:46
 * @FilePath: /Awesome_frontEnd-main/src/http/state.ts
 * @Description: http状态码
 */
export enum http {
  StatusOK = 200,
  StatusNoContent = 204, // 没有内容
  StatusAccepted = 202, // 已经接受，但未处理
  StatusPreconditionFailed = 412, // 用户先决条件错误
}
