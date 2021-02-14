/*
 * @Author: 邱狮杰
 * @Date: 2020-11-15 04:09:42
 * @LastEditTime: 2021-02-14 12:54:05
 * @FilePath: /Awesome_frontEnd-main/src/App.tsx
 * @Description: app
 */
import React, { FC } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ToTop from "./components/goTop/goTop";
// Page
import Index from "./page/index/index";
import Blog from "./page/blog/blog";
import Npm from "./page/npm/npm";
import LeavingMessage from "./page/leavingMsg/leavingMsg";
import Article from "./page/article/article";
import Me from "./page/me/index";
import Love from "./page/love/index";
import ValentineDay from "./page/valentineDay/index";

import { Switch, Route, Redirect } from "react-router-dom";

type Props = {};

const App: FC<Props> = () => {
  return (
    <div>
      <Header />
      <ToTop />
      <Switch>
        <Route path="/index" exact component={Index} />
        <Route path="/blog" component={Blog} />
        <Route path="/npm" component={Npm} />
        <Route path="/leavingMessage" component={LeavingMessage} />
        <Route path="/article" component={Article} />
        <Route path="/me" component={Me} />
        <Route path="/love" component={Love} />
        <Route path="/" component={ValentineDay} />
        <Redirect to="/index" />
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
