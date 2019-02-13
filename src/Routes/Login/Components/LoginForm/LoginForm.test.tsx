import React from 'react';
import ReactDOM from 'react-dom';

import LoginForm from './LoginForm';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router';

const intlProps = { locale: 'en' };

describe('LoginForm', () => {
  test('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <IntlProvider {...intlProps}>
        <MemoryRouter>
          <LoginForm onSuccess={() => {}} />
        </MemoryRouter>
      </IntlProvider>,
      div,
    );
  });
});
