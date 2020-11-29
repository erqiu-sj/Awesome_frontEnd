/*
 * @Author: 邱狮杰
 * @Date: 2020-11-28 19:12:24
 * @LastEditTime: 2020-11-28 19:16:05
 * @FilePath: /Awesome_frontEnd-main/src/components/goHome/goHome.tsx
 * @Description: 返回主页
 */
import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { PageHeader } from "antd";

type Props = {};

const GoHome: FC<Props> = () => {
  const history = useHistory();
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => {
        history.push("/");
      }}
      title="Home"
      subTitle="Back to the home page"
    />
  );
};
export default GoHome;
