import React from 'react';

import { User } from 'firebase';
import firebase from 'lib/firebase';
import AuthUserContext from './AuthUserContext';

interface State {
  authUser: User | null;
}

const withAuthentication = Component =>
  class WithAuthentication extends React.Component<{}, State> {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    public componentDidMount() {
      firebase.auth().onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
      });
    }

    public render() {
      const { authUser } = this.state;

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  };

export default withAuthentication;
