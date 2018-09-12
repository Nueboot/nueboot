import React from 'react';
import AuthUserContext from '../Session/AuthUserContext';
import Text from '../Styled/Text';

export const Login = () => <Text>Login</Text>;
export const Logout = () => <Text>Logout</Text>;

const Auth = () => (
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <Logout />
      : <Login />
    }
  </AuthUserContext.Consumer>
);

export default Auth;
