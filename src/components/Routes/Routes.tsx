import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Boot from '../Boot';
import Boots from '../Boots';
import Home from '../Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/boots" component={Boots} />
    <Route exact path="/boots/:bootId" component={Boot} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
