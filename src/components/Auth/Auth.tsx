import React from 'react';
import AuthUserContext from '../Session/AuthUserContext';

const Login = () => <div>Login</div>;
const Logout = () => <div>Logout</div>;

const Auth = () => (
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <Logout />
      : <Login />
    }
  </AuthUserContext.Consumer>
);

export default Auth;
