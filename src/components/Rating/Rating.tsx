import React from 'react';

interface RatingProps {
  stars: number;
}

const decimal = n => n - Math.floor(n);

const Rating: React.SFC<RatingProps> = ({ stars = 0 }) => {
  const starsArray = new Array(stars).fill(null);

  return (
    <div className="boot-rating">
      <div className="stars di mr3">
        {starsArray.map(star => (
          <span className="yellow f3">★</span>
        ))}
      </div>
      <span className="f4 b">{`${stars}.${decimal(stars)}`}</span>
    </div>
  );
};

export default Rating;
