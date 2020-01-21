import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BootsList from "../BootsList";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/boots" component={BootsList} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
