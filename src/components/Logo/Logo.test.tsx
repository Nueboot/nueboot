import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Logo, { LogoProps } from './Logo';

describe('Logo', () => {
  let component: ShallowWrapper<LogoProps>;
  let props: LogoProps;

  describe('without a color prop', () => {
    beforeEach(() => {
      component = shallow(<Logo />);
    });

    it('renders correctly', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with a color prop', () => {
    beforeEach(() => {
      props = {
        color: 'red',
      };
      component = shallow(<Logo {...props} />);
    });

    it('renders correctly', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
