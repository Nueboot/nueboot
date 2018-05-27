import React from 'react';

export interface HeadingProps {
  className?: string;
  style?: React.CSSProperties;
}

const Heading = props => {
  const getClassName = () => {
    const classes = 'fw9 f2 pa0'.split(' ');
    return  [...classes, ...props.className].join(' ');
  };

  return(
    <h1 style={props.style} className={getClassName()}>{props.children}</h1>
  );
};

export default Heading;
