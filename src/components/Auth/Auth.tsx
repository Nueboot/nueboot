import React from 'react';

import { LoginInfo } from '../../state/Session/types';

export interface State {
  readonly email: string;
  readonly password: string;
  [key: string]: string | boolean;
}

export interface StateProps {
  loggedIn: boolean;
  pending: boolean;
}

export interface DispatchProps {
  loginUser(user: LoginInfo): void;
  signUpUser(user: LoginInfo): void;
  signout(): void;
}

export type AuthProps = StateProps & DispatchProps;

export default class Auth extends React.Component<AuthProps, State> {
  public firebaseAuth;

  public constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  public render() {
    const { loggedIn, pending } = this.props;
    if (pending) {
      return null;
    }
    return loggedIn ? this.logout() : this.form();
  }

  private form() {
    return (
      <form>
        <input
          type="text"
          name="email"
          onChange={this.onInputChange}
          value={this.state.email}
        />
        <input
          type="password"
          name="password"
          onChange={this.onInputChange}
          value={this.state.password}
        />
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleSignUp}>Sign Up</button>
      </form>
    );
  }

  private logout() {
    return <button onClick={this.handleLogOut}>Log Out</button>;
  }

  private onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState, props) => {
      return {
        [name]: value,
      };
    });
  }

  private handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.onSubmit('login');
  }

  private handleSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.onSubmit('signup');
  }

  private onSubmit = (type: ('login' | 'signup')) => {
    const { email, password } = this.state;

    if (email === '' || password === '') {
      return;
    }

    if (type === 'login') {
      this.props.loginUser({ email, password });
    } else {
      this.props.signUpUser({ email, password });
    }
    this.resetForm();
  }

  private handleLogOut = () => {
    this.props.signout();
  }

  private resetForm() {
    this.setState((prevState, props) => ({
      email: '',
      password: '',
    }));
  }
}
