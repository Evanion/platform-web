import React from 'react';
import ReactDOM from 'react-dom';
import MenuLogo from './MenuLogo';
import { MemoryRouter } from 'react-router-dom';

describe('MenuLogo', () => {
  it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <MenuLogo path={'/'} label={'test'} />
      </MemoryRouter>,
      div,
    );
  });
});
