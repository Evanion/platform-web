import React from 'react';
import { storiesOf } from '@storybook/react';
import {MemoryRouter, Route} from 'react-router-dom';
import Account from './Account';
import { IntlProvider } from 'react-intl';
const intlProps = { locale: 'en' };

storiesOf('Routes/Account', module)
  .addParameters({ jest: ['Account'] })
  .add('View', () => (
    <IntlProvider {...intlProps}>
      <MemoryRouter>
        <Route component={ Account }/>
      </MemoryRouter>
    </IntlProvider>
  ));

