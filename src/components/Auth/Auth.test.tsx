const mockContext = jest.fn();
jest.mock('../Session/AuthUserContext', () => ({
  Consumer: ({ children }) => children(mockContext()),
}));

import { RouteComponentProps } from '@reach/router';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Auth from './Auth';

describe('Auth', () => {
  let component: ShallowWrapper<RouteComponentProps>;

  describe('when no user is logged in', () => {
    beforeEach(() => {
      mockContext.mockReturnValue(null);
      component = shallow(<Auth />);
    });

    it('renders a login button', () => {
      expect(component.dive()).toMatchSnapshot();
    });

  });

  describe('when a user is logged in', () => {
    beforeEach(() => {
      mockContext.mockReturnValue({ authUser: { displayName: 'Tester' } });
      component = shallow(<Auth />);
    });

    it('renders a logout button', () => {
      expect(component.dive()).toMatchSnapshot();
    });
  });
});
