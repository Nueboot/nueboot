import { connect } from 'react-redux';

import { isLoggedIn } from 'state/Session/selectors';
import { loginUser, logoutUser } from '../../state/Session/actions';
import { LoginInfo } from '../../state/Session/types';
import Auth from './Auth';

export interface DispatchProps {
  loginUser(user: LoginInfo): void;
  signUpUser(user: LoginInfo): void;
  signout(): void;
}

export interface StateProps {
  loggedIn: boolean;
}

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: isLoggedIn(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginUser: (user: LoginInfo) => dispatch(loginUser('login', user)),
    signUpUser: (user: LoginInfo) => dispatch(loginUser('signup', user)),
    signout: () => dispatch(logoutUser()),
  };
};

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);

export default AuthContainer;
