import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { storiesOf } from '@storybook/react';
import Recover from './Recover';

const intlProps = { locale: 'en' };

storiesOf('Routes/ForgotPassword/Routes/Recover', module)
  .addParameters({ jest: ['Recover'] })
  .add('View', () => (
    <IntlProvider {...intlProps}>
      <MemoryRouter>
        <Route component={Recover} />
      </MemoryRouter>
    </IntlProvider>
  ));
