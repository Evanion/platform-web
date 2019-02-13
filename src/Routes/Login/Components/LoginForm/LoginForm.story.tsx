import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import LoginForm from './LoginForm';

const intlProps = { locale: 'en' };

storiesOf('Routes/Login/Components', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['LoginForm'] })
  .add('LoginForm', () => (
    <IntlProvider {...intlProps}>
      <MemoryRouter>
        <LoginForm
          onSuccess={action('onSuccess')}
          onError={action('onError')}
          attached={boolean('Attached', false)}
        />
      </MemoryRouter>
    </IntlProvider>
  ));
