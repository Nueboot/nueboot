import React from 'react';

const Container = props => {
  return(
    <div className="container mw8 ph3-ns center">
      {props.children}
    </div>
  );
};

export default Container;
