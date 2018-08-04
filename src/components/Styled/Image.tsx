import React from 'react';

interface ImageProps {
  url: string;
}

const Image: React.SFC<ImageProps> = props => {
  // <img src={props.src} alt={props.alt} className="w-100" />
  const style = {
    background: `url(${props.url}) center`,
  };
  return(
    <div className="aspect-ratio aspect-ratio--16x9 mb4">
      <div
        className="aspect-ratio--object cover"
        style={style}
      />
    </div>
  );
};

export default Image;
