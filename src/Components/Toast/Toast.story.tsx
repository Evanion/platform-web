import React from 'react';
import { storiesOf } from '@storybook/react';

import Toast from './Toast';

storiesOf('Components/Toast', module)
  .addParameters({ jest: ['Toast'] })
  .add('Basic', () => <Toast />);
