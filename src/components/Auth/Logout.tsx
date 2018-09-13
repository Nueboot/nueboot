import React from 'react';
import styled from 'styled-components';

import { Dropdown, DropdownContent } from '../Styled/Dropdown';
import Text from '../Styled/Text';

interface LogoutProps {
  readonly displayName: string | null;
}

const HoverText = styled(Text)`
  :hover {
    font-weight: 700;
  }
`;

const Logout: React.SFC<LogoutProps> = ({ displayName }) => (
  <Dropdown>
    <Text>{displayName} ⌵</Text>
    <DropdownContent>
      <HoverText>Sign out</HoverText>
    </DropdownContent>
  </Dropdown>
);

export default Logout;
