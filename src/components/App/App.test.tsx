import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { App, AppProps } from './App';

describe('App', () => {
  let component: ShallowWrapper<AppProps>;

  beforeEach(() => {
      component = shallow(<App authUser={null} />);
    });

  it('renders correctly', () => {
      expect(component).toMatchSnapshot();
    });
});
