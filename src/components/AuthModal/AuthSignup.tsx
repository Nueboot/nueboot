import React from 'react';
import { AuthTypes } from 'state/Session/types';
import { Heading, Text } from '../Styled';

export interface AuthLoginProps {
  openModal(type: AuthTypes): void;
}

export default class AuthSignup extends React.Component<AuthLoginProps> {
  public render() {
    return(
      <div>
        <Heading>Sign Up</Heading>
        <Text>Already have an account? </Text>
        <Text className="pointer blue link" onClick={this.onClick}>Log In</Text>
      </div>
    );
  }

  private onClick = () => {
    this.props.openModal('login');
  }
}
