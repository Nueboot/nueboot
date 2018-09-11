import { RouteComponentProps } from '@reach/router';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Home from '../Home';

describe('Home', () => {
  let component: ShallowWrapper<RouteComponentProps>;

  beforeEach(() => {
    component = shallow(<Home />);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
