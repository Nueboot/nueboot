import React from 'react';
import ReactModal from 'react-modal';

import Auth from '../Auth';
import { Button } from '../Styled';

export interface State {
  readonly showModal: boolean;
}

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
    position: 'null', // to override default styles
    maxWidth: '560px',
    minWidth: '400px',
  },
};

export default class AuthModal extends React.Component<{}, State> {
  public constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  public render() {
    return (
      <div>
        <Button className="bg-green white" onClick={this.handleOpenModal}>
          Log In/Sign Up
        </Button>
        <ReactModal
          ariaHideApp={false}
          style={modalStyle}
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          contentLabel="Login"
        >
          <Button onClick={this.handleCloseModal}>X</Button>
          <Auth />
        </ReactModal>
      </div>
    );
  }

  private handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  private handleCloseModal = () => {
    this.setState({ showModal: false });
  }
}
