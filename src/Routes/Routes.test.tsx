import React from 'react';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

import Routes from './Routes';

const intlProps = { locale: 'en' };
describe('<Routes />', () => {
  it('renders correctly', () => {
    shallow(
      <IntlProvider {...intlProps}>
        <MemoryRouter>
          <Routes />
        </MemoryRouter>
      </IntlProvider>,
    );
  });
});
