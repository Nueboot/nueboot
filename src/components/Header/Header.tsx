import React from 'react';
import { ModalTypes } from 'state/Modal/types';

import { Container, Logo, Text } from '../Styled';
import { NavigationLink } from '../Styled';

export interface DispatchProps {
  readonly openModal: (type: ModalTypes) => void;
  logout(): void;
}

export interface StateProps {
  readonly loggedIn: boolean;
  readonly pending: boolean;
}

export type HeaderProps = DispatchProps & StateProps;

const Header: React.SFC<HeaderProps> = props => {
  const handleClick = (type: ModalTypes) => () => {
    props.openModal(type);
  };

  const logout = () => {
    props.logout();
  };

  const auth = () => {
    if (props.pending) {
      return null;
    }
    if (props.loggedIn) {
      return <Text onClick={logout}>Log Out</Text>;
    }
    return <Text onClick={handleClick('login')}>Log In</Text>;
  };

  return (
    <div className="header">
      <Container>
        <NavigationLink to="/">
          <Logo />
        </NavigationLink>
        <NavigationLink to="/boots">
          <Text>Boots</Text>
        </NavigationLink>
        {auth()}
      </Container>
    </div>
  );
};

export default Header;
