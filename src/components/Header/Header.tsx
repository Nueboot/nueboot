import React from 'react';

import styled from 'styled-components';
import Auth from '../Auth';
import SearchBox from '../SearchBox';
import { Container, Logo, Text } from '../Styled';
import { NavigationLink } from '../Styled';

const LogoContainer = styled.div`
  width: 120px;
  display: inline-block;
  line-height: 0;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-left: 1rem;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 3rem 0;
  z-index: 10;
  position: relative;
`;

const RightLinks = styled.div`
  display: flex;
  align-items: center;
  input {
    font-size: 1rem;
    border: 1px solid lightgray;
    margin-right: 1rem;
    padding: 0.75rem;
  }
  svg {
    margin-left: -3.25rem;
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
        <RightLinks>
          <SearchBox />
          <Auth />
        </RightLinks>
      </LinkContainer>
    </HeaderContainer>
  </Container>
);

export default Header;
