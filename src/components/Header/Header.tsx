import React from 'react';
import { ModalTypes } from 'state/Modal/types';

import { Container, Logo, Text } from '../Styled';

export interface DispatchProps {
  readonly openModal: (type: ModalTypes) => void;
  logout(): void;
}

export interface StateProps {
  readonly loggedIn: boolean;
  readonly pending: boolean;
}

export type HeaderProps = DispatchProps & StateProps;

interface Style {
  logo: React.CSSProperties;
  links: React.CSSProperties;
}

const style: Style = {
  logo: {
    width: '105px',
  },
  links: {
    fontWeight: 500,
  },
};

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
      return <Text style={style.links} className="fr pointer" onClick={logout}>Log Out</Text>;
    }
    return <Text style={style.links} className="fr pointer" onClick={handleClick('login')}>Log In</Text>;
  };

  return(
    <div className="header mv4 cf">
      <Container>
        <div className="fl" style={style.logo}>
          <Logo />
        </div>
        {auth()}
      </Container>
    </div>
  );
};

export default Header;
