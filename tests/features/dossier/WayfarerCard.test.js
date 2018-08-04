import React from 'react';
import { shallow } from 'enzyme';
import { WayfarerCard } from '../../../src/features/dossier';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<WayfarerCard />);
  expect(renderedComponent.find('.dossier-wayfarer-card').length).toBe(1);
});
