import React from 'react';

import { LoginInfo } from '../../state/Session/types';

export interface State {
  readonly email: string;
  readonly password: string;
  readonly passwordConfirmation: string;
  readonly tab: string;
  [key: string]: string | boolean;
}

export interface StateProps {
  loggedIn: boolean;
  pending: boolean;
}

export interface DispatchProps {
  loginUser(user: LoginInfo): void;
  loginWithGoogle(): void;
  loginWithFacebook(): void;
  signUpUser(user: LoginInfo): void;
  signout(): void;
}

export type AuthProps = StateProps & DispatchProps;

export default class Auth extends React.Component<AuthProps, State> {

  public constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      tab: 'login',
    };
  }

  public render() {
    const { loggedIn, pending } = this.props;
    if (pending) {
      return null;
    }
    if (loggedIn) {
      return this.logout();
    }

    const view =
      this.state.tab === 'login' ? this.loginView() : this.signUpView();
    return (
      <div>
        <div onClick={() => this.setState({ tab: 'login' })}>Log In</div>
        <div onClick={() => this.setState({ tab: 'signup' })}>Sign Up</div>
        {view}
      </div>
    );
  }

  private signUpView() {
    return (
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={this.onInputChange}
          value={this.state.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="passwordConfirmation"
          id="passwordConfirmation"
          onChange={this.onInputChange}
          value={this.state.passwordConfirmation}
        />
        <label htmlFor="passwordConfirmation">Password Confirmation</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={this.onInputChange}
          value={this.state.password}
        />
        <button onClick={this.handleSignUp}>Sign Up</button>
      </form>
    );
  }

  private loginView() {
    return (
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={this.onInputChange}
          value={this.state.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={this.onInputChange}
          value={this.state.password}
        />
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.googleLogin}>Login with Google</button>
        <button onClick={this.facebookLogin}>Login with Facebook</button>
      </form>
    );
  }

  private validatePassword() {
    const { password, passwordConfirmation } = this.state;
    return password === passwordConfirmation;
  }

  private googleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.loginWithGoogle();
  }

  private facebookLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.loginWithFacebook();
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

  private onSubmit = (type: 'login' | 'signup') => {
    const { email, password } = this.state;

    if ((email === '' || password === '') && !this.validatePassword()) {
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
