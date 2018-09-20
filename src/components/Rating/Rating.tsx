import React from 'react';

interface RatingProps {
  stars: number;
}

const decimal = n => n - Math.floor(n);

const Rating: React.SFC<RatingProps> = ({ stars = 0 }) => {
  const starsArray = new Array(stars).fill(null);

  return (
    <div className="Rating">
      <div className="stars">
        {starsArray.map((star, i) => (
          <span key={`star${i}`}>★</span>
        ))}
      </div>
      <span>{`${stars}.${decimal(stars)}`}</span>
    </div>
  );
};

export default Rating;
