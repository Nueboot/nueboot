import React, { CSSProperties } from 'react';

export interface ContainerProps {
  className?: string;
  style?: CSSProperties;
}

const Container: React.SFC<ContainerProps> = props => {
  const classes = props.className ? `${props.className}` : '';
  return(
    <div style={props.style} className={`${classes} container mw8 ph3 ph0-l center`}>
      {props.children}
    </div>
  );
};

export default Container;
