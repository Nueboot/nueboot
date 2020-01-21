import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import BootsList from "../BootsList";
import Boot from "../Boot";
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
