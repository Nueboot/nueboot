import React from 'react';

export interface InterfaceProps {
  label?: string;
  type?: string;
  className?: string;
  onChange?: () => void;
}

const input: React.SFC<InterfaceProps> = props => {
  const getClassName = () => {
    const classes = 'input w-100 pa2';
    return [...classes.split(' '), props.className].join(' ');
  };

  const type = props.type ? props.type : 'text';

  return(
    <>
      <label className="black-70" htmlFor="input">{props.label}</label>
      <br />
      <input className={getClassName()} id="input" type={type}/>
    </>
  );
};

export default input;
