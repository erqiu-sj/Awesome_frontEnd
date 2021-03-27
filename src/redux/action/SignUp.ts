/*
 * @Author: 邱狮杰
 * @Date: 2021-03-26 21:19:29
 * @LastEditTime: 2021-03-26 22:47:24
 * @FilePath: /Awesome_frontEnd-main/src/redux/action/SignUp.ts
 * @Description: 登陆注册相关动作
 */
import { loginType } from "../../types/page/components/login";
import { GETFIELD, EDITFIELD } from "../constants/SignUp";
// 获取描述
export const getSignUpDescriptionField = () => ({
  type: GETFIELD,
});

// 修改描述
export const setSignUpDescriptionField = (data: loginType) => ({
  type: EDITFIELD,
  data,
});
