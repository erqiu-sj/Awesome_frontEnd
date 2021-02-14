/*
 * @Author: 邱狮杰
 * @Date: 2021-01-29 22:40:37
 * @LastEditTime: 2021-02-11 20:01:04
 * @FilePath: /Awesome_frontEnd-main/src/page/love/index.tsx
 * @Description: love仅为登陆
 */
import React, { FC, useState, Dispatch, SetStateAction } from "react";
import Login from "../../components/login/login";
import { message } from "antd";
import { loginType } from "../../types/page/components/login";
import { VerifyLogin } from "../../utils/login";
import { http } from "../../http/state";
import "./index.scss";
type Props = {};

async function login(
  conf: loginType,
  setLogin: Dispatch<SetStateAction<boolean>>
) {
  const userName = conf.inputList[0].val;
  const password = conf.inputList[1].val;
  const loginState = await VerifyLogin({ userName, password });
  // 如果没有内容意味着被catch掉了
  if (!loginState?.data) return;
  const { code } = loginState?.data?.Result;
  if (code === http.StatusNoContent) {
    // 未登陆，显示注册组件
    message.warning("您还未登陆");
    setLogin(false);
  }
  if (code === http.StatusOK) {
    // 登陆成功
    console.log("this is login content", loginState);
  }
}

const Love: FC<Props> = () => {
  const [isLogin, setLogin] = useState<boolean>(true);
  const [registerConf, setRegisterConf] = useState<loginType>(() => ({
    title: "注册",
    inputList: [
      { type: "text", placeholder: "用户名／电子邮箱", val: "" },
      { type: "password", placeholder: "密码", val: "" },
      { type: "password", placeholder: "再次确定密码", val: "" },
    ],
    buttonText: "立即注册",
  }));
  const [loginConf, setLoginConf] = useState<loginType>(() => ({
    title: "登陆",
    inputList: [
      { type: "text", placeholder: "用户名", val: "" },
      { type: "password", placeholder: "密码", val: "" },
    ],
    buttonText: "登陆",
  }));
  return (
    <div className="love">
      {isLogin && (
        <Login
          conf={loginConf}
          setConf={setLoginConf}
          onDetermine={login.bind(this, loginConf, setLogin)}
        />
      )}
      {!isLogin && (
        <Login
          conf={registerConf}
          setConf={setRegisterConf}
          onDetermine={login.bind(this, loginConf, setLogin)}
        />
      )}
    </div>
  );
};
export default Love;
