import React from 'react';

export interface HeadingProps {
  className?: string;
  style?: React.CSSProperties;
}

const Heading = props => {
  return(
    <h1 style={props.style} className={`${props.className} ma0 mb2 fw9 f2 pa0 black-90`}>{props.children}</h1>
  );
};

export default Heading;
