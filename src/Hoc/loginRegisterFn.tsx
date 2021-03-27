/*
 * @Author: 邱狮杰
 * @Date: 2021-03-27 13:05:49
 * @LastEditTime: 2021-03-27 14:42:20
 * @FilePath: /Awesome_frontEnd-main/src/Hoc/loginRegisterFn.tsx
 * @Description: 该高阶函数用于处理用户登陆注册函数
 */
import React, { Component, ComponentType } from "react";
import { Props } from "../components/login/login";

export default function loginRegisterFn<P extends Props>(
  LoginComponent: ComponentType<P>
) {
  return class extends Component {
    render() {
      return <LoginComponent {...(this.props as P)} />;
    }
  };
}
