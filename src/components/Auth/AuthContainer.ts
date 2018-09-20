import { connect, MapStateToProps } from 'react-redux';

import {
  loginWithFacebook,
  loginWithGoogle,
  logoutUser,
} from 'state/Session/actions';
import {
  getCurrentUserName,
  isLoggedIn,
  isPending,
} from 'state/Session/selectors';
import { State } from 'state/types';

import Auth, { StateProps } from './Auth';

export const mapStateToProps: MapStateToProps<
  StateProps,
  {},
  State
> = state => ({
  loggedIn: isLoggedIn(state),
  displayName: getCurrentUserName(state),
  pending: isPending(state),
});

export const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
  facebookLogin: () => dispatch(loginWithFacebook()),
  googleLogin: () => dispatch(loginWithGoogle()),
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

export default HeaderContainer;
