import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { storiesOf } from '@storybook/react';
import Login from './Login';

const intlProps = { locale: 'en' };

storiesOf('Routes/Login', module)
  .addParameters({ jest: ['Login'] })
  .add('View', () => (
    <IntlProvider {...intlProps}>
      <MemoryRouter>
        <Route component={Login} />
      </MemoryRouter>
    </IntlProvider>
  ));
