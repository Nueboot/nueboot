import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Boot from "../Boot";
import BootsList from "../Boots";
import Header from "../Header";
import Home from "../Home";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/boots" component={BootsList} />
        <Route exact path="/boots/:bootId" component={Boot} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
