/*
 * @Author: 邱狮杰
 * @Date: 2020-11-28 20:19:24
 * @LastEditTime: 2020-11-28 21:13:21
 * @FilePath: /Awesome_frontEnd-main/src/page/leavingMsg/leavingMsg.tsx
 * @Description: 留言板
 */
import React, { FC } from "react";
import GoHome from "../../components/goHome/goHome";
import Bkg from "./components/bkg/bkg";
import Message from "./components/message/message";
import "./leavingMsg.scss";
type Props = {};

const LeavingMsg: FC<Props> = () => {
  return (
    <div>
      <Bkg />
      <GoHome />
      <div className="messageBox">
        <Message>
          <Message />
          <Message>
            <Message>
              <Message />
              <Message />
            </Message>
          </Message>
        </Message>
        <textarea></textarea>
        <button>Send</button>
      </div>
    </div>
  );
};
export default LeavingMsg;
