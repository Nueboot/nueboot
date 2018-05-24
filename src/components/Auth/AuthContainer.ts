import { connect } from 'react-redux';

import { isLoggedIn, isPending } from 'state/Session/selectors';
import { State } from 'state/types';
import { loginUser, loginWithFacebook, loginWithGoogle, logoutUser } from '../../state/Session/actions';
import { LoginInfo } from '../../state/Session/types';
import Auth, { DispatchProps, StateProps } from './Auth';

const mapStateToProps = (state: State, ownProps): StateProps => {
  return {
    loggedIn: isLoggedIn(state),
    pending: isPending(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps): DispatchProps => {
  return {
    loginUser: (user: LoginInfo) => dispatch(loginUser('login', user)),
    loginWithFacebook: () => dispatch(loginWithFacebook()),
    loginWithGoogle: () => dispatch(loginWithGoogle()),
    signUpUser: (user: LoginInfo) => dispatch(loginUser('signup', user)),
    signout: () => dispatch(logoutUser()),
  };
};

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);

export default AuthContainer;
