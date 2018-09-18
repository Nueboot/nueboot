import { connect } from 'react-redux';
import { closeModal } from 'state/Modal/actions';
import { loginWithFacebook, loginWithGoogle } from 'state/Session/actions';
import { State } from 'state/types';
import AuthModal, { DispatchProps, StateProps } from './AuthModal';

export const mapStateToProps = (state: State): StateProps => ({
  modal: state.modal.modalType,
  error: state.session.error,
});

export const mapDispatchToProps = (dispatch): DispatchProps => ({
  closeModal: () => dispatch(closeModal()),
  facebookLogin: () => dispatch(loginWithFacebook()),
  googleLogin: () => dispatch(loginWithGoogle()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthModal);
