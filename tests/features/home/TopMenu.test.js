import React from 'react';
import { shallow } from 'enzyme';
import { TopMenu } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<TopMenu />);
  expect(renderedComponent.find('.home-top-menu').length).toBe(1);
});
