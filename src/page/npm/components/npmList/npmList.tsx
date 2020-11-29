import React, { FC } from "react";
import { Space, Card } from "antd";
import { Npm } from "../../../../types/page/npm/npm";
import "./npmList.scss";
type Props = {
  NpmDataList: Npm[];
};
const NpmList: FC<Props> = ({ NpmDataList }) => {
  return (
    <div className="npmList">
      <h1 style={{ paddingLeft: "5%" }}>Npm List Package</h1>
      <Space style={{ marginLeft: "5%" }} direction="vertical">
        {NpmDataList &&
          NpmDataList.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.Name}
                style={{ width: "95%", display: "inline-block" }}
              >
                <p style={{ marginBottom: 0 }}>{item.PackageDescription}</p>
                <a href={item.GithubPath}>{item.GithubPath}</a>
                <div className="npmFooter">
                  <br />
                  已发布 {item.Version} • {item.Time}
                </div>
              </Card>
            );
          })}
      </Space>
    </div>
  );
};

export default NpmList;
