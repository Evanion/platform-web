import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import ForgotPassword from './ForgotPassword';

const intlProps = { locale: 'en' };

describe('ForgotPassword', () => {
  test('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <IntlProvider {...intlProps}>
        <MemoryRouter>
          <Route component={ ForgotPassword } />
        </MemoryRouter>
      </IntlProvider>,
      div
    );
  });
});
