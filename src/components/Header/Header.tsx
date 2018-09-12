import React from 'react';
import styled from 'styled-components';

import { Link } from '@reach/router';
import Auth from '../Auth';
import LogoSvg from '../Logo';
import Container from '../Styled/Container';
import NavLink from '../Styled/NavLink';
import Text from '../Styled/Text';

const Logo = styled(Link)`
  width: 105px;
  display: inline-block;
  vertical-align: middle;
  line-height: 0;
  margin-right: 20px;
  margin-top: -2px;
`;

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const Header: React.SFC = () => (
  <Container>
    <StyledHeader className="header">
      <Column>
        <Logo to="/">
          <LogoSvg />
        </Logo>
        <NavLink to="boots">
          <Text>Boots</Text>
        </NavLink>
      </Column>
      <Column>
        <Auth />
      </Column>
    </StyledHeader>
  </Container>
);

export default Header;
