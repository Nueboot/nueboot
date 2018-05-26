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
    f6 link dim ph3 pv2 mb2 sans-serif hover-white hover-bg-gray br2
    ${props.className}
  `;

  return (
    <button
      className={className}
      onClick={props.onClick}
      style={styles}
    >
      {props.children}
    </button>
  );
};

export default Button;
