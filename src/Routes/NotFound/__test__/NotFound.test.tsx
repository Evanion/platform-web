import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import NotFound from '../NotFound';
import { shallow } from 'enzyme';

const intlProps = { locale: 'en' };

describe('<NotFound />', () => {
  test('renders correctly', () => {
    shallow(
      <IntlProvider {...intlProps}>
        <MemoryRouter>
          <Route component={NotFound} />
        </MemoryRouter>
      </IntlProvider>
    );
  });
});
