import React from 'react';

export interface TextProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: (...args: any[]) => void;
}

const Text: React.SFC<TextProps> = props => {
  const style: React.CSSProperties = {
    ...props.style,
    fontFamily: 'Heebo',
  };
  const getClassName = () => {
    const classes = ['f6', 'sans-serif', 'black-70'];
    return [...classes, props.className].join(' ');
  };
  return (
    <span className={getClassName()} style={style} onClick={props.onClick}>
      {props.children}
    </span>
  );
};

export default Text;
