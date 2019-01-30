import React from 'react';
import {MemoryRouter, Route} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { storiesOf } from '@storybook/react';
import Register from './Register';

const intlProps = { locale: 'en' };

storiesOf('Routes/Register', module)
  .addParameters({ jest: ['Register'] })
  .add('View', () => (
    <IntlProvider {...intlProps}>
      <MemoryRouter>
        <Route component={Register}/>
      </MemoryRouter>
    </IntlProvider>
  ));
