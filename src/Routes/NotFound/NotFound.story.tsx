import React from 'react';
import {MemoryRouter, Route} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { storiesOf } from '@storybook/react';
import NotFound from './NotFound';

const intlProps = { locale: 'en' };

storiesOf('Routes/NotFound', module)
  .addParameters({ jest: ['NotFound'] })
  .add('View', () => (
    <IntlProvider {...intlProps}>
      <MemoryRouter>
        <Route component={NotFound}/>
      </MemoryRouter>
    </IntlProvider>
  ));
