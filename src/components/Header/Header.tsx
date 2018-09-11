import React from 'react';
import styled from 'styled-components';

import LogoSvg from '../Logo';

const Logo = styled.div`
  width: 125px;
`;

const Header: React.SFC = () => (
  <div className="Header">
    <Logo>
      <LogoSvg />
    </Logo>
  </div>
);

export default Header;
