import React from 'react';
import ReactModal from 'react-modal';

import { AuthTypes } from 'state/Session/types';
import { Text } from '../Styled';
import AuthLogin from './AuthLogin';
import AuthSignup from './AuthSignup';

export interface StateProps {
  modal: string | null;
}

export interface DispatchProps {
  openModal(type: AuthTypes): void;
  closeModal(): void;
}

export type AuthModalProps = StateProps & DispatchProps;

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: '40px',
    position: 'null', // to override default styles
    width: '550px',
  },
};

const AuthModal: React.SFC<AuthModalProps> = props => {
  if (!props.modal) {
    return null;
  }

  const closeModal = () => {
    props.closeModal();
  };

  const view =
    props.modal === 'login' ? (
      <AuthLogin openModal={props.openModal} />
    ) : (
      <AuthSignup openModal={props.openModal} />
    );

  return (
    <ReactModal
      ariaHideApp={false}
      style={modalStyle}
      isOpen={!!props.modal}
      onRequestClose={closeModal}
      contentLabel="Login"
    >
      <Text className="pointer fr" onClick={closeModal}>X</Text>
      {view}
    </ReactModal>
  );
};

export default AuthModal;
