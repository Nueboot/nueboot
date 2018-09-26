import React from 'react';
import styled from 'styled-components';

interface RatingProps {
  stars: number;
}

const StarContainer = styled.div`
  display: inline;
  margin-right: 5px;
`;

const Star = styled.span`
  color: gold;
`;

const RatingValue = styled.span`
  font-weight: 700;
`;

const decimal = n => n - Math.floor(n);

const Rating: React.SFC<RatingProps> = ({ stars = 0 }) => {
  const starsArray = new Array(stars).fill(null);

  return (
    <div className="Rating">
      <StarContainer className="stars">
        {starsArray.map((star, i) => (
          <Star key={`star${i}`}>★</Star>
        ))}
      </StarContainer>
      <RatingValue>{`${stars}.${decimal(stars)}`}</RatingValue>
    </div>
  );
};

export default Rating;
