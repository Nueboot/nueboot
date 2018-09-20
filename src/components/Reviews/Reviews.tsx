import React from 'react';
import { Button, Heading } from '../Styled';

export interface ReviewsProps {
  id: string;
}

const Reviews: React.SFC<ReviewsProps> = () => {
  return (
    <section className="Reviews">
      <Heading size={2}>Reviews</Heading>
      <Button>New Review</Button>
    </section>
  );
};

export default Reviews;
