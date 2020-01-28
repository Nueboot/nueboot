import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Boot from "../Boot";
import BootsList from "../BootsList";
import Header from "../Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/boots" component={BootsList} />
        <Route exact path="/boots/:bootId" component={Boot} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
