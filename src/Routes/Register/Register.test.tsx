import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Register from './Register';
import { shallow } from 'enzyme';

const intlProps = { locale: 'en' };

describe('Register', () => {
  test('renders correctly', () => {
    shallow(
      <IntlProvider {...intlProps}>
        <MemoryRouter>
          <Route component={Register} />
        </MemoryRouter>
      </IntlProvider>,
    );
  });
});
