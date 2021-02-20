/*
 * @Author: 邱狮杰
 * @Date: 2021-01-29 22:40:37
 * @LastEditTime: 2021-02-20 21:02:42
 * @FilePath: /Awesome_frontEnd-main/src/page/love/index.tsx
 * @Description: love仅为登陆
 */
import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import Login from "../../components/login/login";
// import { http } from "../../http/state";
// import CacheTable, { setStoage } from "../../utils/cacheTable";
import { message } from "antd";
// import { LoveLogin } from "../../http/lover";
import { loginType } from "../../types/page/components/login";

import "./index.scss";
type Props = {};

async function login(conf: loginType, history: any) {
  const userName = conf.inputList[0].val;
  // const result = await LoveLogin({ userName });
  // if (result.status !== http.StatusOK) return message.warning("你是谁?(╹⚇╹?)");
  if (userName !== "2002522")
    return message.warning("你是谁?(╹⚇╹?),我老婆在哪");
  message.success("我等你好久啦老婆(͏ ˉ ꈊ ˉ)✧˖°");
  history.push("/review");
  // setStoage(CacheTable.loverToken, result.data.Result);
}

const Love: FC<Props> = () => {
  const history = useHistory();
  const [loginConf, setLoginConf] = useState<loginType>(() => ({
    title: "老婆你来啦（๑ `▽´๑)",
    inputList: [{ type: "text", placeholder: "老婆生日", val: "" }],
    buttonText: "老公我来啦",
  }));
  return (
    <div className="love">
      <Login
        conf={loginConf}
        setConf={setLoginConf}
        onDetermine={login.bind(this, loginConf, history)}
      />
    </div>
  );
};
export default Love;
