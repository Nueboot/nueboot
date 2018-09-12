import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Logout from './Logout';

describe('Logout', () => {
  let logoutComponent: ShallowWrapper;

  beforeEach(() => {
    logoutComponent = shallow(<Logout displayName="Mickey" />);
  });

  it('renders correctly', () => {
    expect(logoutComponent).toMatchSnapshot();
  });
});
