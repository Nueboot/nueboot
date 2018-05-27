import { connect } from 'react-redux';
import { closeModal, openModal } from 'state/Modal/actions';
import { loginUser, loginWithFacebook, loginWithGoogle } from 'state/Session/actions';
import { LoginInfo } from 'state/Session/types';
import { State } from 'state/types';
import AuthModal, { DispatchProps, StateProps } from './AuthModal';

export const mapStateToProps = (state: State): StateProps => ({
  modal: state.modal.modalType,
  error: state.session.error,
});

export const mapDispatchToProps = (dispatch): DispatchProps => ({
  openModal: type => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
  facebookLogin: () => dispatch(loginWithFacebook()),
  googleLogin: () => dispatch(loginWithGoogle()),
  login: (user: LoginInfo) => dispatch(loginUser('login', user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
