import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Routes from './Routes';

describe('Routes', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Routes />);
  });

  it('renders the right routes', () => {
    expect(component).toMatchSnapshot();
  });
});
