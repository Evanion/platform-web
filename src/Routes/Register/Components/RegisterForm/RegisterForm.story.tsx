import React from 'react';
import { storiesOf } from '@storybook/react';

import RegisterForm from './RegisterForm';
import { action } from '@storybook/addon-actions';

storiesOf('Routes/Register/Components', module)
  .addParameters({ jest: ['RegisterForm'] })
  .add('RegisterForm', () => <RegisterForm onSuccess={action('onSuccess')} />);
