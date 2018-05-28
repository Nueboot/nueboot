import { FirebaseError } from 'firebase';
import React from 'react';
import { LoginInfo } from 'state/Session/types';
import { Button, Heading, Input, Text } from '../Styled';
import { FacebookButton, GoogleButton } from './SocialButtons';

export interface AuthLoginProps {
  error?: FirebaseError;
  googleLogin(): void;
  facebookLogin(): void;
  login(user: LoginInfo): void;
  openModal(type): void;
}

interface State {
  readonly email: string;
  readonly password: string;
  readonly validation: string;
  [key: string]: string;
}

export const validateEmail = (email: string) => {
  // tslint:disable-next-line:max-line-length
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export default class AuthLogin extends React.Component<AuthLoginProps, State> {
  public constructor(props: AuthLoginProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validation: '',
    };
  }

  public render() {
    return (
      <form>
        <Heading>Log In</Heading>
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
          onChange={this.onInputChange('email')}
        />
        <Input
          className="mb3 w-100"
          label="Password"
          type="password"
          onChange={this.onInputChange('password')}
        />
        <Button
          onClick={this.login}
          className="bg-green white bn hover-bg-dark-green mb3"
        >
          Log In
        </Button>
        <FacebookButton onClick={this.props.facebookLogin} />
        <GoogleButton onClick={this.props.googleLogin} />
        <br />
        <Text>Forget your password? </Text>
        <Text className="pointer link blue" onClick={this.resetPassword}>
          Reset password
        </Text>
        <br />
        <Text>Need an account? </Text>
        <Text className="pointer link blue" onClick={this.onClick}>
          Sign Up
        </Text>
      </form>
    );
  }

  private resetPassword = () => {
    this.props.openModal('reset');
  }

  private onInputChange = name => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState(() => {
      return {
        [name]: value,
        validation: '',
      };
    });
  }

  private login = () => {
    if (this.validateInput() === false) {
      return;
    }
    this.props.login(this.state);
  }

  private onClick = () => {
    this.props.openModal('signup');
  }

  private validateInput() {
    const { email, password } = this.state;

    if (email.length === 0) {
      this.setState(() => ({
        validation: 'Email cannot be blank',
      }));
      return false;
    }
    if (!validateEmail(email)) {
      this.setState(() => ({
        validation: 'Email is invalid',
      }));
      return false;
    }
    if (password.length === 0) {
      this.setState(() => ({
        validation: 'Password cannot be blank',
      }));
      return false;
    }
    return true;
  }
}
