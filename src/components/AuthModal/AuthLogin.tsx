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
      <Heading className="mt3 mb4">Log In</Heading>
      {props.error && <Text className="red mb3 db">{props.error.message}</Text>}
      <FacebookButton onClick={props.facebookLogin} />
      <GoogleButton onClick={props.googleLogin} />
    </div>
  );
};

export default AuthLogin;
