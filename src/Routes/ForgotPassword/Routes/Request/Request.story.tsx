import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Request from './Request';
import { IntlProvider } from 'react-intl';
const intlProps = { locale: 'en' };

storiesOf('Routes/ForgotPassword/Routes/Request', module)
  .addParameters({ jest: ['Request'] })
  .add('View', () => (
    <IntlProvider {...intlProps}>
      <MemoryRouter>
        <Route component={Request} />
      </MemoryRouter>
    </IntlProvider>
  ));
