import { RouteComponentProps } from '@reach/router';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Text from './Text';

describe('Text', () => {
  let component: ShallowWrapper<RouteComponentProps>;

  describe('without bold', () => {
    beforeEach(() => {
      component = shallow(<Text />);
    });

    it('renders correctly', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with bold', () => {
    beforeEach(() => {
      component = shallow(<Text bold />);
    });

    it('renders correctly', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
