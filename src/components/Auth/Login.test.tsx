import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Login from './Login';

describe('Login', () => {
  let logoutComponent: ShallowWrapper;

  beforeEach(() => {
    logoutComponent = shallow(<Login />);
  });

  it('renders correctly', () => {
    expect(logoutComponent).toMatchSnapshot();
  });
});
