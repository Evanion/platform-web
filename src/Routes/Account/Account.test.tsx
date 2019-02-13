import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Account from './Account';

const intlProps = { locale: 'en' };

describe('Account', () => {
  test('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <IntlProvider {...intlProps}>
        <MemoryRouter>
          <Route component={Account} />
        </MemoryRouter>
      </IntlProvider>,
      div,
    );
  });
});
