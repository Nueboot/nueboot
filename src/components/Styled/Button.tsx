import React from 'react';

export interface ButtonProps {
  style?: React.CSSProperties;
  className?: string;
  onClick?(...args: any[]): any;
}

const Button: React.SFC<ButtonProps> = props => {
  const styles = {
    ...props.style,
    cursor: 'pointer',
  };

  const className = `
    f6 link ph3 pv2 mb2 sans-serif br2
    ${props.className}
  `;

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button className={className} onClick={onClick} style={styles}>
      {props.children}
    </button>
  );
};

export default Button;
