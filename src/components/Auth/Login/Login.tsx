import React from 'react';
import styled from 'styled-components';

import { Text } from '../../Styled';
import { Dropdown, DropdownContent } from '../../Styled/Dropdown';

export interface LoginProps {
  facebookLogin(): void;
  googleLogin(): void;
}

const HoverText = styled(Text)`
  :hover {
    font-weight: 700;
  }
`;

const Login: React.SFC<LoginProps> = ({ googleLogin, facebookLogin }) => (
  <Dropdown tabIndex={0}>
    <Text>Login ⌵</Text>
    <DropdownContent>
      <HoverText tabIndex={0} onClick={googleLogin}>
        Google
      </HoverText>
      <HoverText tabIndex={0} onClick={facebookLogin}>
        Facebook
      </HoverText>
    </DropdownContent>
  </Dropdown>
);

export default Login;
