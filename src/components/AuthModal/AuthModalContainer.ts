import { connect } from 'react-redux';
import { closeModal, openModal } from 'state/Modal/actions';
import { State } from 'state/types';
import AuthModal, { DispatchProps, StateProps } from './AuthModal';

export const mapStateToProps = (state: State): StateProps => ({
  modal: state.modal.modalType,
});

export const mapDispatchToProps = (dispatch): DispatchProps => ({
  openModal: type => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
