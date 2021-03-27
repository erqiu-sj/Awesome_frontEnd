/*
 * @Author: 邱狮杰
 * @Date: 2021-03-26 21:18:58
 * @LastEditTime: 2021-03-27 15:52:36
 * @FilePath: /Awesome_frontEnd-main/src/redux/reducers/SignUp.ts
 * @Description: 登陆注册字段描述
 */

import { Map } from "immutable";
import { GETFIELD, EDITFIELD } from "../constants/SignUp";

type actionSign = {
  type: typeof GETFIELD | typeof EDITFIELD;
  data: any;
};
export const REGISTER = "注册";
export const LOGIN = "登陆";
export const USER = "用户名";
export const PASSWORD = "密码";
export const CONFIRMPASSWORD = "请确认密码";
export const EMAIL = "邮箱";
export const BIRTHDAY = "生日";
export const GENDER = "性别";
const State = Map({
  status: {
    title: REGISTER,
    inputList: [
      { type: "text", placeholder: USER, val: "" },
      { type: "text", placeholder: PASSWORD, val: "" },
      { type: "password", placeholder: CONFIRMPASSWORD, val: "" },
      { type: "text", placeholder: EMAIL, val: "" },
      { type: "date", placeholder: BIRTHDAY, val: "" },
      { type: "text", placeholder: GENDER, val: "" },
    ],
    buttonText: "确定",
  },
});

function SignUpStatus(state = State, action: actionSign) {
  switch (action.type) {
    case GETFIELD:
      return State.get("status");
    case EDITFIELD:
      return State.set("status", action.data);
    default:
      return state;
  }
}
export default SignUpStatus;
