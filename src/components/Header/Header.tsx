import React from 'react';
import { AuthTypes } from 'state/Session/types';

import { Logo } from '../Styled';

export interface DispatchProps {
  readonly openModal: (type: AuthTypes) => void;
}

export type HeaderProps = DispatchProps;

const Header: React.SFC<HeaderProps> = props => {
  return(
    <div className="header">
      <div style={{width: '105px'}}>
        <Logo />
      </div>
    </div>
  );
};

export default Header;
