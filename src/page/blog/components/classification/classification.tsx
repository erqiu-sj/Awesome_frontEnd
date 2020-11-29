import React, { FC, useState } from "react";
import { Menu } from "antd";
import { AlignLeftOutlined } from "@ant-design/icons";

import "./classification.scss";
const { SubMenu } = Menu;

// 分类列表
const classList = ["JavaScript", "TypeScript", "Node", "Webpack", "Golang"];
type Props = {};
const Classification: FC<Props> = () => {
  const [current, setCurrent] = useState("分类");
  const handleClick = (e: any) => {
    // 更新分类title
    setCurrent(e.key);
  };
  return (
    <div className="classification">
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <SubMenu key="SubMenu" icon={<AlignLeftOutlined />} title={current}>
          {classList.map((item) => (
            <Menu.Item key={item}>{item}</Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </div>
  );
};
export default Classification;
