import React from 'react';
import { storiesOf } from '@storybook/react';

import ForgotPasswordForm from './ForgotPasswordForm';
import { action } from '@storybook/addon-actions';

storiesOf('Routes/ForgotPassword/Components', module)
  .addParameters({ jest: ['ForgotPasswordForm'] })
  .add('ForgotPasswordForm', () => <ForgotPasswordForm onSuccess={action('submit success')} />);
