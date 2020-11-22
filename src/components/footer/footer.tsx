import React, { FC } from "react";
import { SpanParams, friendshipChain } from "./utils";
import "./footer.scss";
type Props = {};

const Footer: FC<Props> = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="footer"
    >
      <div className="Mask">
        {SpanParams.map((item, index) => (
          <span key={index} style={item.mStyle} className={item.mClass}>
            {item.item}
          </span>
        ))}
      </div>
      <div className="friendshipChain">
        <div>
          <h2>友链</h2>
          <ul>
            {friendshipChain.map((item, index) => (
              <li key={index}>
                <a href={item.herf}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>haha</div>
      </div>
    </div>
  );
};

export default Footer;
