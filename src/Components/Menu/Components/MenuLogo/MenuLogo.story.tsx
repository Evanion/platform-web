import React from 'react';
import { storiesOf } from '@storybook/react';

import MenuLogo from './MenuLogo';
import { MemoryRouter } from 'react-router';

storiesOf('Components/Menu/Components/MenuLogo', module)
  .addParameters({ jest: ['MenuLogo'] })
  .add('Basic', () => <MemoryRouter><MenuLogo label={'Platform'} path={'/'} /></MemoryRouter>);
