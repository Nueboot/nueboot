import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import App from './App';

describe('App', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
