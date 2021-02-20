/*
 * @Author: 邱狮杰
 * @Date: 2021-01-29 22:47:18
 * @LastEditTime: 2021-02-14 15:19:39
 * @FilePath: /Awesome_frontEnd-main/src/utils/login.ts
 * @Description: 登录相关
 */
import { SignIn } from "./../types/model/user";
import { login, register as registerHttp } from "../http/user";
import { message as msg } from "antd";
interface Usr {
  userName: string;
  password?: string;
  email?: string;
}

export interface register extends Usr {}

// function
/**
 * @description 验证登录密码
 * @param { string } psw
 */
export function VerifyPsw(psw: string): string | never {
  // 密码必须是6-15之间
  const pswReg = /^[a-zA-Z0-9_-]{6,15}$/g;
  if (!pswReg.test(psw))
    throw new Error("密码必须是字母,数字,下划线开头,请仔细检查");
  return psw;
}
/**
 * @description 验证用户名
 * @param {string} userName 用户名
 */
function VerifyUserName(userName: string): string | never {
  // "邮箱只允许英文字母、数字、下划线、英文句号、以及中划线组成\n用户名只允许字母开头，允许4-16字节，允许字母数字下划线"
  const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  const usrReg = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/;
  if (!emailReg.test(userName) && !usrReg.test(userName))
    throw new Error("用户名格式错误");
  return userName;
}
/**
 * @description 验证登录名
 * @param { login } login
 */
export async function VerifyLogin({
  userName,
  password,
}: SignIn): Promise<any> {
  // 正常登陆
  try {
    const loginResult = await login({
      userName: VerifyUserName(userName),
      password: password && VerifyPsw(password),
    });
    return loginResult;
  } catch ({ message }) {
    msg.error(message);
  }
}
/**
 * @description 验证注册
 * @param {{username,password}:SignIn}
 * @param {string} confirmPsw 验证密码
 */
export async function VersetifyRegister(
  { userName, password }: SignIn,
  confirmPsw: string
) {
  try {
    if (confirmPsw !== password) return new TypeError("请确认密码是否有误");
    VerifyPsw(confirmPsw);
    VerifyUserName(userName);
    return await registerHttp({ userName, password });
  } catch ({ message }) {
    msg.error(message);
  }
}
