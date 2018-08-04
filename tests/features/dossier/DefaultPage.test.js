import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/dossier/DefaultPage';

describe('dossier/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      dossier: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.dossier-default-page').length
    ).toBe(1);
  });
});
