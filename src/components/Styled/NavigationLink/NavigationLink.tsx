import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationLinkProps {
  readonly to: string;
}

const NavigationLink: React.SFC<NavigationLinkProps> = props => (
  <Link to={props.to} className="link no-underline ml4 black">
    {props.children}
  </Link>
);

export default NavigationLink;
