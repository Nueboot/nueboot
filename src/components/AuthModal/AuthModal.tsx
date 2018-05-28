import React from 'react';
import ReactModal from 'react-modal';

import { ModalTypes } from 'state/Modal/types';
import { LoginInfo } from 'state/Session/types';
import { Text } from '../Styled';
import AuthLogin from './AuthLogin';
import AuthReset from './AuthReset';
import AuthSignup from './AuthSignup';

export interface StateProps {
  modal: ModalTypes | null;
  error?: any;
}

export interface DispatchProps {
  openModal(type: ModalTypes): void;
  closeModal(): void;
  facebookLogin(): void;
  googleLogin(): void;
  login(user: LoginInfo): void;
  signup(user: LoginInfo): void;
  resetPassword(email: string): void;
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

  const modalView = () => {
    switch (props.modal) {
      case 'login':
        return (
          <AuthLogin
            error={props.error}
            login={props.login}
            facebookLogin={props.facebookLogin}
            googleLogin={props.googleLogin}
            openModal={props.openModal}
          />
        );
      case 'signup':
        return <AuthSignup error={props.error} login={props.signup} openModal={props.openModal} />;
      case 'reset':
        return <AuthReset error={props.error} reset={props.resetPassword} />;
    }
  };

  return (
    <ReactModal
      ariaHideApp={false}
      style={modalStyle}
      isOpen={!!props.modal}
      onRequestClose={closeModal}
      contentLabel="Login"
    >
      <Text className="pointer fr" onClick={closeModal}>X</Text>
      {modalView()}
    </ReactModal>
  );
};

export default AuthModal;
