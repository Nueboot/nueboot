import React from 'react';
import styled from 'styled-components';

const Heading = styled.h4`

`;

const Subheading = props => (
  <Heading className="f6 ttu tracked gray ma0">{props.children}</Heading>
);

export default Subheading;
