import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Dashboard from './Dashboard';

const intlProps = { locale: 'en' };

describe('<Dashboard />', () => {
  test('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <IntlProvider {...intlProps}>
        <MemoryRouter>
          <Route component={Dashboard} />
        </MemoryRouter>
      </IntlProvider>,
      div
    );
  });
});
