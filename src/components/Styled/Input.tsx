import React from 'react';

export interface InterfaceProps {
  label?: string;
  type?: string;
  className?: string;
  onChange?: () => void;
}

const input: React.SFC<InterfaceProps> = props => {
  const type = props.type ? props.type : 'text';

  return (
    <div className={props.className}>
      <label className="black-70" htmlFor={props.label}>
        {props.label}
      </label>
      <br />
      <input
        placeholder={props.label}
        className="input w-100 pv2 mv2 bb b--light-gray"
        id={props.label}
        type={type}
      />
    </div>
  );
};

export default input;
