import React, { FC } from "react";
import Search from "../../components/search/search";
import Top from "./components/top/top";
import CodeCoffeeImg from "../../assets/img/codeCoffee.jpg";

import "./index.scss";
type Props = {};

const Index: FC<Props> = () => {
  return (
    <div className="Index">
      <Search />
      <div className="container">
        <div id="Start">
          <div className="Show">
            <img src={CodeCoffeeImg} alt="" />
            <h2>每一行都妙不可言</h2>
          </div>
          <div data-aos="zoom-in-left" className="Show reverse">
            <img src={CodeCoffeeImg} alt="" />
            <h2>唯一的不同，是处处都不同</h2>
          </div>
          <div data-aos="zoom-out-up" className="Show">
            <img src={CodeCoffeeImg} alt="" />
            <h2>这是我独享的Moment</h2>
          </div>
        </div>
        <Top />
      </div>
    </div>
  );
};

export default Index;
