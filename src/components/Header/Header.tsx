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
    const classList = 'pointer fw5';
    if (props.pending) {
      return null;
    }
    if (props.loggedIn) {
      return (
        <Text className={classList} onClick={logout}>
          Log Out
        </Text>
      );
    }
    return (
      <Text className={classList} onClick={handleClick('login')}>
        Log In
      </Text>
    );
  };

  return (
    <div className="header">
      <Container className="mv4 flex justify-between items-center">
        <div className="flex items-center">
          <NavigationLink to="/">
            <Logo />
          </NavigationLink>
          <NavigationLink to="/boots" className="link no-underline ml4">
            <Text className="fw5 pointer">Boots</Text>
          </NavigationLink>
        </div>
        {auth()}
      </Container>
    </div>
  );
};

export default Header;
