import React from 'react';

import styled from 'styled-components';
import Auth from '../Auth';
import { Container, Logo, Text } from '../Styled';
import { NavigationLink } from '../Styled';

const LogoContainer = styled.div`
  width: 120px;
  display: inline-block;
  line-height: 0;
  @media (max-width: 64rem) {
    margin-bottom: 1rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-left: 1rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 3rem 0;
  @media (max-width: 64rem) {
    flex-direction: column;
    margin: 0 0 3rem 0;
    flex-wrap: wrap;
  }
`;

const Header: React.SFC<{}> = () => (
  <Container>
    <HeaderContainer className="Header">
      <LogoContainer>
        <NavigationLink to="/">
          <Logo />
        </NavigationLink>
      </LogoContainer>
      <LinkContainer>
        <NavigationLink to="/boots">
          <Text>Boots</Text>
        </NavigationLink>
        <Auth />
      </LinkContainer>
    </HeaderContainer>
  </Container>
);

export default Header;
