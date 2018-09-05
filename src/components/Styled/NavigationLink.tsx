import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationLinkProps {
  to: string;
  className?: string;
}

const NavigationLink: React.SFC<NavigationLinkProps> = props => {
  return(
    <Link className={`no-underline link ${props.className ? props.className : ''}`} to={props.to}>
      {props.children}
    </Link>
  );
};

export default NavigationLink;
