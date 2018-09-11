import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Spinner from '../Spinner';

describe('Spinner', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Spinner />);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
