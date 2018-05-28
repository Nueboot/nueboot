import { FirebaseError } from 'firebase';
import React from 'react';

import { Button, Heading, Input, Text } from '../Styled';
import { validateEmail } from './AuthLogin';

export interface AuthResetProps {
  error?: FirebaseError;
  reset(email: string): void;
}

interface State {
  readonly email: string;
  readonly validation: string;
}

export default class AuthReset extends React.Component<AuthResetProps, State> {
  public constructor(props) {
    super(props);
    this.state = {
      email: '',
      validation: '',
    };
  }

  public render() {
    return (
      <form>
        <Heading>Reset Password</Heading>
        {this.props.error && (
          <Text className="red mb3 db">{this.props.error.message}</Text>
        )}
        {this.state.validation && (
          <Text className="red mb3 db">{this.state.validation}</Text>
        )}
        <Input
          className="mb3 w-100"
          label="Email"
          type="email"
          onChange={this.onInputChange}
        />
        <Button
          onClick={this.resetPassword}
          className="bg-green white bn hover-bg-dark-green mb3"
        >
          Reset Password
        </Button>
      </form>
    );
  }

  private onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: e.target.value,
      validation: '',
    });
  }

  private resetPassword = () => {
    const { email } = this.state;

    if (!validateEmail(email)) {
      this.setState(() => ({
        validation: 'Email is invalid',
      }));
      return;
    }
    this.props.reset(email);
  }
}
