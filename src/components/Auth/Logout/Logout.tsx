import React from 'react';
import styled from 'styled-components';

import { Text } from '../../Styled';
import { Dropdown, DropdownContent } from '../../Styled/Dropdown';

interface LogoutProps {
  readonly displayName: string;
  logout(): void;
}

const HoverText = styled(Text)`
  :hover {
    font-weight: 700;
  }
`;

const Logout: React.SFC<LogoutProps> = ({ displayName, logout }) => (
  <Dropdown>
    <Text tabIndex={0}>{displayName} ⌵</Text>
    <DropdownContent>
      <HoverText tabIndex={0} onClick={logout}>
        Log out
      </HoverText>
    </DropdownContent>
  </Dropdown>
);
export default Logout;
