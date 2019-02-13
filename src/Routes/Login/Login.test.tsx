import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Login from './Login';
import { shallow } from 'enzyme';

const intlProps = { locale: 'en' };

describe('<Login />', () => {
  it('renders correctly', () => {
    shallow(
      <IntlProvider {...intlProps}>
        <MemoryRouter>
          <Route component={Login} />
        </MemoryRouter>
      </IntlProvider>,
    );
  });
});
