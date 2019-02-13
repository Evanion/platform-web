import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Logout from '../Logout';
import * as User from '../../../Services/User';
import { shallow } from 'enzyme';

jest.mock('../../../Services/User');

const intlProps = { locale: 'en' };

describe('<Logout />', () => {
  beforeEach(() => {
    // User.mockClear();
  });
  test('renders correctly', () => {
    shallow(
      <IntlProvider {...intlProps}>
        <MemoryRouter>
          <Route component={Logout} />
        </MemoryRouter>
      </IntlProvider>,
    );
  });
});
