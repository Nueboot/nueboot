import { FirebaseError } from 'firebase';
import React from 'react';
import { AuthTypes, LoginInfo } from 'state/Session/types';
import { Button, Heading, Input, Text } from '../Styled';

export interface AuthSignupProps {
  error?: FirebaseError;
  openModal(type: AuthTypes): void;
  login(user: LoginInfo): void;
}

interface State {
  email: string;
  password: string;
  passwordConfirmation: string;
  validation: string;
  [key: string]: string;
}

export default class AuthSignup extends React.Component<AuthSignupProps, State> {
  public constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      validation: '',
    };
  }

  public render() {
    return(
      <div>
        <Heading>Sign Up</Heading>
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
        <Input
          className="mb3 w-100"
          label="Password Confirmation"
          type="password"
          onChange={this.onInputChange('passwordConfirmation')}
        />
        <Button
          onClick={this.signup}
          className="bg-green white bn hover-bg-dark-green mb3"
        >
          Sign Up
        </Button>
        <br />
        <Text>Already have an account? </Text>
        <Text className="pointer blue link" onClick={this.onClick}>Log In</Text>
      </div>
    );
  }

  private signup = () => {
    const user: LoginInfo = {
      email: this.state.email,
      password: this.state.password,
    };
    if (!this.validateInput()) {
      return;
    }
    this.props.login(user);
  }

  private onClick = () => {
    this.props.openModal('login');
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

  private validateInput() {
    const { email, password, passwordConfirmation } = this.state;

    if (email.length === 0) {
      this.setState(() => ({
        validation: 'Email cannot be blank',
      }));
      return false;
    }
    if (!this.validateEmail(email)) {
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
    if (password !== passwordConfirmation) {
      this.setState(() => ({
        validation: 'Passwords must match',
      }));
      return false;
    }
  }

  private validateEmail(email: string) {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
