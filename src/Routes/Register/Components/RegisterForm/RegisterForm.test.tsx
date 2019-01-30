import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './RegisterForm';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router';

const intlProps = { locale: 'en' };

describe('RegisterForm', () => {
  test('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <IntlProvider {...intlProps}>
      <MemoryRouter>
          <RegisterForm onSuccess={() => {}} />
        </MemoryRouter>
      </IntlProvider>,
      div
    );
  });
});