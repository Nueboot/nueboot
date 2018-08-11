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
      return <Text className="fr pointer mt1 fw5" onClick={logout}>Log Out</Text>;
    }
    return <Text className="fr pointer mt1 fw5" onClick={handleClick('login')}>Log In</Text>;
  };

  return(
    <div className="header">
      <Container className="mv4 cf">
        <div className="fl">
          <Logo />
          <NavigationLink to="/boots" className="ml4 mt1">Boots</NavigationLink>
        </div>
        {auth()}
      </Container>
    </div>
  );
};

export default Header;
