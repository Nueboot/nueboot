import React from 'react';

import styled from 'styled-components';
import { BootInfo } from '../../api/types';
import Rating from '../Rating';
import { Image, NavigationLink, Text } from '../Styled';

const Brand = styled(Text)`
  font-weight: 700;
  display: block;
`;

export interface BootCardProps {
  readonly boot: BootInfo;
}

const BootCard: React.SFC<BootCardProps> = ({ boot }) => (
  <div className="boot-card">
    <NavigationLink to={`/boots/${boot.id}`}>
      <Image src="http://via.placeholder.com/300x200" />
      <Brand>{boot.brand}</Brand>
      <Text>{boot.model}</Text>
      <Rating stars={5} />
    </NavigationLink>
  </div>
);

export default BootCard;
