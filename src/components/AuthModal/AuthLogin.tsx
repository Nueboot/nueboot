import React from 'react';
import { AuthTypes } from 'state/Session/types';
import { Button, Heading, Input, Text } from '../Styled';
import { FacebookButton, GoogleButton } from './SocialButtons';

export interface AuthLoginProps {
  openModal(type: AuthTypes): void;
}

interface State {
  readonly email: string;
  readonly password: string;
}

export default class AuthLogin extends React.Component<AuthLoginProps, State> {

  public constructor(props: AuthLoginProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  public render() {
    return(
      <form>
        <Heading>Log In</Heading>
        <Input className="mb3 w-100" label="Email" />
        <Input className="mb3 w-100" label="Password" type="password" />
        <Button className="bg-green white bn hover-bg-dark-green mb3">Log In</Button>
        <FacebookButton />
        <GoogleButton />
        <br />
        <Text>Need an account? </Text>
        <Text className="pointer link blue" onClick={this.onClick}>Sign Up</Text>
      </form>
    );
  }

  private onClick = () => {
    this.props.openModal('signup');
  }
}
