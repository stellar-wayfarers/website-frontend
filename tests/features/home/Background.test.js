import React from 'react';
import { shallow } from 'enzyme';
import { Background } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Background />);
  expect(renderedComponent.find('.home-background').length).toBe(1);
});
