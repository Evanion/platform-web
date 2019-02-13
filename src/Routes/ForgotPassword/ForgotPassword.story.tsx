import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { storiesOf } from '@storybook/react';
import ForgotPassword from './ForgotPassword';

const intlProps = { locale: 'en' };

storiesOf('Routes/ForgotPassword', module)
  .addParameters({ jest: ['ForgotPassword'] })
  .add('View', () => (
    <IntlProvider {...intlProps}>
      <MemoryRouter>
        <Route component={ForgotPassword} />
      </MemoryRouter>
    </IntlProvider>
  ));
