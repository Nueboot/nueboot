import React from 'react';

import Auth from '../Auth';
import { Container, Logo, Text } from '../Styled';
import { NavigationLink } from '../Styled';

const Header: React.SFC<{}> = () => (
  <div className="Header">
    <Container>
      <NavigationLink to="/">
        <Logo />
      </NavigationLink>
      <NavigationLink to="/boots">
        <Text>Boots</Text>
      </NavigationLink>
      <Auth />
    </Container>
  </div>
);

export default Header;
