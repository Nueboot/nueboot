import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Reviews, { ReviewsProps } from './Reviews';

describe('Reviews', () => {
  let component: ShallowWrapper<ReviewsProps>;

  beforeEach(() => {
    const props: ReviewsProps = {
      reviews: [],
      currentUser: '',
      id: '1',
      submitReview: jest.fn(),
      getReviews: jest.fn(),
    };
    component = shallow(<Reviews {...props} />);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
