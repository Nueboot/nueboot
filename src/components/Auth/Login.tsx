import React from 'react';
import styled from 'styled-components';

import { Dropdown, DropdownContent } from '../Styled/Dropdown';
import Text from '../Styled/Text';

const HoverText = styled(Text)`
  :hover {
    font-weight: 700;
  }
`;

const Login: React.SFC = () => (
  <Dropdown>
    <Text>Login ⌵</Text>
    <DropdownContent>
      <HoverText>Google</HoverText>
      <HoverText>Facebook</HoverText>
    </DropdownContent>
  </Dropdown>
);

export default Login;
