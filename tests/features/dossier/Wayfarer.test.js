import React from 'react';
import { shallow } from 'enzyme';
import { Wayfarer } from '../../../src/features/dossier/Wayfarer';

describe('dossier/Wayfarer', () => {
  it('renders node with correct class name', () => {
    const props = {
      dossier: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Wayfarer {...props} />
    );

    expect(
      renderedComponent.find('.dossier-wayfarer').length
    ).toBe(1);
  });
});
