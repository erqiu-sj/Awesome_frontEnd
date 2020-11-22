import React, { FC } from "react";
import { TopArticle } from "../../../../types/page/index/index";
import "./top.scss";
type Props = {};

const Top: FC<Props> = () => {
  return (
    <div data-aos="zoom-out-down" className="top">
      <div className="title">泡上咖啡，我们用简单的方式聊聊技术</div>
      <div className="topContainer">
        {TopArticle.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div>
              <span className="iconfont icon-fenlei"> &nbsp; {item.type}</span>
              <span>{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Top;
