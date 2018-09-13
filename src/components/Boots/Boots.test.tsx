import { RouteComponentProps } from '@reach/router';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { Boot } from '../../types';
import Boots from './Boots';

jest.mock('../../api', () => ({
  getAllBoots: () => Promise.resolve(null),
}));

describe('Boots', () => {
  let component: ShallowWrapper<RouteComponentProps>;

  describe('with no boots', () => {
    beforeEach(() => {
      component = shallow(<Boots />);
    });

    it('renders correctly', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with boots', () => {
    let boot: Boot;
    beforeEach(() => {
      boot = {
        brand: 'Adidas',
        material: 'Knit',
        midcut: true,
        model: 'Predator',
        msrp: 100,
        releaseDate: '1/1/2001',
        weight: 99,
      };
      component.setState({
        boots: [
          boot,
        ],
      });
    });

    it('renders correctly', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
