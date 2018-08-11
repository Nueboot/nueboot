import React from 'react';
import { Link } from 'react-router-dom';

import Text from './Text';

interface NavigationLinkProps {
  to: string;
  className?: string;
}

const NavigationLink: React.SFC<NavigationLinkProps> = props => {
  return(
    <Link to={props.to}>
      <Text className={`fr pointer ${props.className}`}>
        {props.children}
      </Text>
    </Link>
  );
};

export default NavigationLink;
