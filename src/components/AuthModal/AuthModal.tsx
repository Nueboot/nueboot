import React from 'react';
import ReactModal from 'react-modal';

import { AuthTypes, LoginInfo } from 'state/Session/types';
import { Text } from '../Styled';
import AuthLogin from './AuthLogin';
import AuthSignup from './AuthSignup';

export interface StateProps {
  modal: string | null;
  error?: any;
}

export interface DispatchProps {
  openModal(type: AuthTypes): void;
  closeModal(): void;
  facebookLogin(): void;
  googleLogin(): void;
  login(user: LoginInfo): void;
  signup(user: LoginInfo): void;
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

  const view =
    props.modal === 'login' ? (
      <AuthLogin
        error={props.error}
        login={props.login}
        facebookLogin={props.facebookLogin}
        googleLogin={props.googleLogin}
        openModal={props.openModal}
      />
    ) : (
      <AuthSignup error={props.error} login={props.signup} openModal={props.openModal} />
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
