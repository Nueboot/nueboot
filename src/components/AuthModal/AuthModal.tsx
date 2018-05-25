import React from 'react';
import ReactModal from 'react-modal';

import Auth from '../Auth';

export interface State {
  readonly showModal: boolean;
}

const modalStyle = {
  overlay : {
    position         : 'fixed',
    top              : 0,
    left             : 0,
    right            : 0,
    bottom           : 0,
    display          : 'flex',
    alignItems       : 'center',
    justifyContent   : 'center',
  },
  content : {
    position    : 'null', // to override default styles
    maxWidth    : '560px',
    minWidth    : '400px',

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
        <button onClick={this.handleOpenModal}>Log In/Sign Up</button>
        <ReactModal
          style={modalStyle}
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
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
