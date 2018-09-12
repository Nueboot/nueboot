import React from 'react';

import AuthUserContext from '../Session/AuthUserContext';

import Login from './Login';
import Logout from './Logout';

const Auth = () => (
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <Logout displayName={authUser.displayName} />
      : <Login />
    }
  </AuthUserContext.Consumer>
);

export default Auth;
