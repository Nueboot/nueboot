import { RouteComponentProps } from '@reach/router';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Auth from './Auth';

describe('Auth', () => {
  let component: ShallowWrapper<RouteComponentProps>;

  beforeEach(() => {
    component = shallow(<Auth />);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
