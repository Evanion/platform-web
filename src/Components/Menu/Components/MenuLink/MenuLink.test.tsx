import React from 'react';
import ReactDOM from 'react-dom';
import MenuLink from './MenuLink';
import { MemoryRouter } from 'react-router-dom';

describe('MenuLink', () => {
  test('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <MenuLink path={'/'} label={'test'} />
      </MemoryRouter>, 
      div
    );
  });
});
