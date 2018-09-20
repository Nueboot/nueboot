import { FirebaseError } from 'firebase';
import React from 'react';
import { Heading, Text } from '../Styled';
import { FacebookButton, GoogleButton } from './SocialButtons';

export interface AuthLoginProps {
  error?: FirebaseError;
  googleLogin(): void;
  facebookLogin(): void;
}

const AuthLogin: React.SFC<AuthLoginProps> = props => {
  return (
    <div>
      <Heading className="AuthLogin">Log In</Heading>
      {props.error && <Text className="error">{props.error.message}</Text>}
      <FacebookButton onClick={props.facebookLogin} />
      <GoogleButton onClick={props.googleLogin} />
    </div>
  );
};

export default AuthLogin;
