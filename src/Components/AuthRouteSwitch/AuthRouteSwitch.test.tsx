import { shallow } from 'enzyme';
import React from 'react';
import { Route } from 'react-router-dom';

import AuthRouteSwitch from './AuthRouteSwitch';

const TestComponent = () => <div>test</div>;

/**
 * @TODO: This test is a stub, and should be updated to check that it actually redirects correctly based on auth
 */
describe('<AuthRouteSwitch />', () => {
  test('renders correctly', () => {
    const rendered = shallow(
      <AuthRouteSwitch auth={true}>
        <Route to={'/protected'} component={TestComponent} />
        <Route to={'/protected2'} component={TestComponent} />
      </AuthRouteSwitch>
    );
    expect(rendered).toMatchSnapshot();
  });
});
