import React from 'react';
import { storiesOf } from '@storybook/react';

import MenuLink from './MenuLink';
import { MemoryRouter } from 'react-router';

storiesOf('Components/Menu/Components/MenuLink', module)
  .addParameters({ jest: ['MenuLink'] })
  .add('Basic', () => (
    <MemoryRouter>
      <MenuLink path={'/'} label={'test label'} />
    </MemoryRouter>
  ));
