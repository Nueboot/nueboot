import React from 'react';
import { Button, Heading } from '../Styled';

export interface ReviewsProps {
  id: string;
}

const Reviews: React.SFC<ReviewsProps> = () => {
  return (
    <section className="reviews">
      <div className="flex justify-between">
        <Heading size={2} className="ttu dib">
          Reviews
        </Heading>
        <Button className="bg-green white">New Review</Button>
      </div>
    </section>
  );
};

export default Reviews;
