import React from 'react';
import {MemoryRouter, Route} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { storiesOf } from '@storybook/react';
import Dashboard from './Dashboard';

const intlProps = { locale: 'en' };

storiesOf('Routes/Dashboard', module)
  .addParameters({ jest: ['Dashboard'] })
  .add('View', () => (
    <IntlProvider {...intlProps}>
      <MemoryRouter>
        <Route component={Dashboard}/>
      </MemoryRouter>
    </IntlProvider>
  ));
