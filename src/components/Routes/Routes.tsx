import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from '../Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
