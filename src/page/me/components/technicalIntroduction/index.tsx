/*
 * @Author: 邱狮杰
 * @Date: 2021-01-24 16:31:52
 * @LastEditTime: 2021-01-24 16:47:20
 * @FilePath: /Awesome_frontEnd-main/src/page/me/components/technicalIntroduction/index.tsx
 * @Description: 技术简介
 */
import React, { FC } from "react";
import { Descriptions } from "antd";
import { TechnologyConfig } from "../../params";
type Props = {
  frontentList: TechnologyConfig[];
  backendList: TechnologyConfig[];
};

const TechnicalIntroduction: FC<Props> = ({ frontentList, backendList }) => {
  return (
    <div>
      <Descriptions
        title="前端"
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        {frontentList.map((item, index) => (
          <Descriptions.Item key={index} label={item.name}>
            {item.introduction}
          </Descriptions.Item>
        ))}
      </Descriptions>
      <br />
      <Descriptions
        title="后端"
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        {backendList.map((item, index) => (
          <Descriptions.Item key={index} label={item.name}>
            {item.introduction}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </div>
  );
};
export default TechnicalIntroduction;
