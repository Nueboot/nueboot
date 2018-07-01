import React from 'react';
import ReactModal from 'react-modal';

import { ModalTypes } from 'state/Modal/types';
import { Text } from '../Styled';
import AuthLogin from './AuthLogin';

export interface StateProps {
  modal: ModalTypes | null;
  error?: any;
}

export interface DispatchProps {
  closeModal(): void;
  facebookLogin(): void;
  googleLogin(): void;
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
    padding: '20px',
    position: 'null', // to override default styles
    width: '100%',
  },
};

const AuthModal: React.SFC<AuthModalProps> = props => {
  if (!props.modal) {
    return null;
  }

  const closeModal = () => {
    props.closeModal();
  };

  return (
    <ReactModal
      ariaHideApp={false}
      style={modalStyle}
      isOpen={!!props.modal}
      onRequestClose={closeModal}
      contentLabel="Login"
      className="mw5 mw6-ns ba outline-0 b--black-20 bg-white"
    >
      <Text className="pointer fr pa1" onClick={closeModal}>X</Text>
      <AuthLogin
            error={props.error}
            facebookLogin={props.facebookLogin}
            googleLogin={props.googleLogin}
          />
    </ReactModal>
  );
};

export default AuthModal;
