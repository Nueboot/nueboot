import React from 'react';

import Login from './Login';
import Logout from './Logout';

export interface StateProps {
  readonly loggedIn: boolean;
  readonly pending: boolean;
  readonly displayName: string;
}

export interface DispatchProps {
  logout(): void;
  facebookLogin(): void;
  googleLogin(): void;
}

export type AuthProps = StateProps & DispatchProps;

const Auth: React.SFC<AuthProps> = ({
  loggedIn,
  pending,
  logout,
  displayName,
  facebookLogin,
  googleLogin,
}) => {
  if (pending) {
    return null;
  }
  return loggedIn ? (
    <Logout logout={logout} displayName={displayName} />
  ) : (
    <Login facebookLogin={facebookLogin} googleLogin={googleLogin} />
  );
};

export default Auth;
