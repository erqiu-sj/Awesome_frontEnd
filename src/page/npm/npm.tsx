import React, { FC } from "react";
import GoHome from "../../components/goHome/goHome";
import NpmList from "./components/npmList/npmList";
import { DataListNpm } from "./utils";
type Props = {};

const Npm: FC<Props> = () => {
  return (
    <div>
      <NpmList NpmDataList={DataListNpm} />
      <GoHome />
    </div>
  );
};
export default Npm;
