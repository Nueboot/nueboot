import React from 'react';

export interface HeadingProps {
  size?: 1 | 2;
  className?: string;
  style?: React.CSSProperties;
}

const Heading = props => {
  const className = props.className ? props.className : '';
  let size = 'f2';

  if (props.size === 2) {
    size = 'f3';
  }
  return(
    <h1 style={props.style} className={`${className} ${size} ma0 mb2 fw9 pa0 black-90`}>{props.children}</h1>
  );
};

export default Heading;
