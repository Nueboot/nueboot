import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AuthModal from '../AuthModal';
import Boot from '../Boot';
import Header from '../Header';
import Home from '../Home';
import { Container } from '../Styled';

const Routes = () => (
  <>
    <Header />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/boots/:bootId" component={Boot} />
        <Redirect to="/" />
      </Switch>
    </Container>
    <AuthModal />
  </>
);

export default Routes;
