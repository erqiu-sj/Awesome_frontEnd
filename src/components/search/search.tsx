import React, { FC, useState } from "react";
import { classification } from "./utils";
import { Enter } from "../../utils/Shortcutkey";
import { ChangeCategoricalTtems } from "../../redux/action/Search";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined, EditOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import "./search.scss";

type Props = {
  classifying: string;
  changeItem: (item: string) => void;
};

const Search: FC<Props> = ({ classifying, changeItem }) => {
  const [content, setContent] = useState<string>("");
  // 回车搜索
  function EnterSearch() {
    console.log(classifying);
    console.log(content);
  }
  return (
    <div className="search">
      <div className="container">
        <Dropdown
          overlay={
            <Menu>
              {classification.map((item, index) => (
                <Menu.Item
                  onClick={(e) => changeItem(classification[e.key as number])}
                  key={index}
                  icon={<EditOutlined />}
                >
                  {item}
                </Menu.Item>
              ))}
            </Menu>
          }
        >
          <Button disabled className="select">
            {classifying} <DownOutlined />
          </Button>
        </Dropdown>
        <input
          onKeyUp={(e) => Enter(e.key) && EnterSearch()}
          className="input"
          placeholder="Search"
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={() => EnterSearch()} className="SearchBtn">
          Search
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    classifying: state.Classify.get("classification"),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeItem: (item: string) => dispatch(ChangeCategoricalTtems(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
