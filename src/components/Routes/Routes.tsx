import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <h1>hi</h1>} />
    <Route render={() => <h1>Nothing to see here</h1>} />
  </Switch>
);

export default Routes;
