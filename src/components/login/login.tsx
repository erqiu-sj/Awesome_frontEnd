/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: 邱狮杰
 * @Date: 2021-02-11 13:29:00
 * @LastEditTime: 2021-03-27 13:41:02
 * @FilePath: /Awesome_frontEnd-main/src/components/login/login.tsx
 * @Description: 登陆注册通用
 */
import React, { FC, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { loginType } from "../../types/page/components/login/index";
import "./login.scss";
export type Props = {
  conf: loginType; // 用于渲染ui的数据
  setAction: (data: loginType) => { type: string; data: loginType }; // 用于修改数据的函数
  onDetermine: () => void; // 点击确定后弹出的事件
};

const Login: FC<Props> = ({ conf, setAction, onDetermine }) => {
  const setSignup = useDispatch();
  function inputChange(e: ChangeEvent<HTMLInputElement>, index: number) {
    const val = e.target.value;
    conf.inputList[index].val = val;
    setSignup(setAction(conf));
  }

  return (
    <div className="login">
      <div className="loginBox">
        <h2>{conf.title}</h2>
        <div className="container">
          {conf.inputList.map((listItem, index) => (
            <div key={index} className="output">
              <input
                type={listItem.type}
                placeholder={listItem.placeholder}
                onChange={(e) => inputChange(e, index)}
              />
            </div>
          ))}
          <button onClick={onDetermine} className="get">
            {conf.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
