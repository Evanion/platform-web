import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Recover from './Recover';

const intlProps = { locale: 'en' };

describe('Recover', () => {
  test('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <IntlProvider {...intlProps}>
        <MemoryRouter>
          <Route component={Recover} />
        </MemoryRouter>
      </IntlProvider>,
      div,
    );
  });
});
