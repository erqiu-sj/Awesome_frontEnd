import React, { FC } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Index from "./page/index/index";
import { Switch, Route, Redirect } from "react-router-dom";

type Props = {};

const App: FC<Props> = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/index" exact component={Index} />
        <Redirect to="/index" />
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
