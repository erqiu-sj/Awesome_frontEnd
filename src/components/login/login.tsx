/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: 邱狮杰
 * @Date: 2021-02-11 13:29:00
 * @LastEditTime: 2021-02-11 14:45:17
 * @FilePath: /Awesome_frontEnd-main/src/components/login/login.tsx
 * @Description: 登陆注册通用
 */
import React, { FC, Dispatch, SetStateAction, ChangeEvent } from "react";
import { loginType } from "../../types/page/components/login/index";
import "./login.scss";
type Props = {
  conf: loginType; // 用于渲染ui的数据
  setConf: Dispatch<SetStateAction<loginType>>; // 用于修改数据的函数
  onDetermine: () => void; // 点击确定后弹出的事件
};

function inputChange(
  e: ChangeEvent<HTMLInputElement>,
  index: number,
  setConf: Dispatch<SetStateAction<loginType>>
) {
  const val = e.target.value;
  setConf((prevState: loginType) => {
    prevState.inputList[index].val = val;
    return { ...prevState };
  });
}

const Login: FC<Props> = ({ conf, setConf, onDetermine }) => {
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
                onChange={(e) => inputChange(e, index, setConf)}
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
