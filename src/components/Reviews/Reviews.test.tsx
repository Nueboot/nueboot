import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Reviews, { ReviewsProps } from './Reviews';

describe('Reviews', () => {
  let component: ShallowWrapper<ReviewsProps>;

  beforeEach(() => {
    const props: ReviewsProps = {
       id: '1',
    };
    component = shallow(<Reviews {...props} />);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
