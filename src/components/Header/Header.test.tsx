import { RouteComponentProps } from '@reach/router';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Header from './Header';

describe('Header', () => {
  let component: ShallowWrapper<RouteComponentProps>;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
