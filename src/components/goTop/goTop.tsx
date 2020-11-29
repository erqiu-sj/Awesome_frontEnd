/*
 * @Author: 邱狮杰
 * @Date: 2020-11-28 19:21:28
 * @LastEditTime: 2020-11-28 20:08:33
 * @FilePath: /Awesome_frontEnd-main/src/components/goTop/goTop.tsx
 * @Description: 回到顶部
 */
import React, { FC, useEffect, useState } from "react";
// import { Affix, Button } from "antd";
import "./goTop.scss";

type Props = {};

const GoTop: FC<Props> = () => {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 95) setShow(true);
      else setShow(false);
    });
  }, []);
  return (
    <button
      style={{ display: show ? "" : "none" }}
      onClick={() => window.scrollTo(0, 0)}
      className="toTop"
    >
      Top
    </button>
  );
};

export default GoTop;
