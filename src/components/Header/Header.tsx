import { Link } from '@reach/router';
import React from 'react';
import styled from 'styled-components';

import Auth from '../Auth';
import LogoSvg from '../Logo';
import Container from '../Styled/Container';

const Logo = styled.div`
  width: 105px;
  display: inline-block;
  vertical-align: middle;
  line-height: 0;
  margin-right: 20px;
`;

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const Header: React.SFC = () => (
  <Container>
    <StyledHeader className="header">
      <Column className="left">
        <Link to="/">
          <Logo className="logo">
            <LogoSvg />
          </Logo>
        </Link>
        <Link to="boots">Boots</Link>
      </Column>
      <Column className="right">
        <Auth />
      </Column>
    </StyledHeader>
  </Container>
);

export default Header;
