import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AuthModal from '../AuthModal';
import Boot from '../Boot';
import Boots from '../Boots';
import Header from '../Header';
import Home from '../Home';
import { Container } from '../Styled';

const Routes = () => (
  <>
    <Header />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/boots" component={Boots} />
        <Route exact path="/boots/:bootId" component={Boot} />
        <Redirect to="/" />
      </Switch>
    </Container>
    <AuthModal />
  </>
);

export default Routes;
