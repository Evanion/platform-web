import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import Request from './Request';
import { mountWithIntl } from '../../../../Utils/TestHelper/TestHelper';

describe('Request', () => {
  test('renders correctly', () => {
    const wrapper = mountWithIntl(
        <MemoryRouter>
          <Route component={ Request } />
        </MemoryRouter>
    );

    expect(wrapper.render().find('[data-test="request-page"]')).toBeTruthy();
  });
});
