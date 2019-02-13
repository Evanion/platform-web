import React from 'react';
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom';
import ROUTEMAP from '../Services/ROUTEMAP';
import Load from '../Utils/Load';

import Logout from './Logout';
import { isAuthenticated } from '../Services/User/User';
import Menu from '../Components/Menu';
import { MenuItem } from '../Components/Menu/Menu';
/* --- route static --- */

const NotFound = React.lazy(() => import('./NotFound'));
const Dashboard = React.lazy(() => import('./Dashboard'));
const Account = React.lazy(() => import('./Account'));
/* --- route lazy --- */

interface Props extends RouteComponentProps {
  [prop: string]: any;
}
const menuItems: MenuItem[] = [
  {
    path: ROUTEMAP.HOME,
    type: 'logo',
    label: 'Platform',
    key: 'logo',
  },
  {
    path: ROUTEMAP.ACCOUNT,
    type: 'link',
    label: 'Account',
    key: 'account',
  },
  {
    path: ROUTEMAP.LOGOUT,
    type: 'link',
    label: 'Logout',
    key: 'logout',
  },
];

const PrivateRoutes = ({ location }: Props) => {
  if (!isAuthenticated()) {
    return (
      <Redirect
        to={{
          pathname: ROUTEMAP.LOGIN,
          state: { referrer: location },
        }}
      />
    );
  }

  return (
    <React.Fragment>
      <Menu items={menuItems} attached="top" />
      <Switch>
        {/* --- routes --- */}
        <Route path={ROUTEMAP.ACCOUNT} component={Load(Account)} />
        <Route path={ROUTEMAP.LOGOUT} component={Logout} />
        <Route exact={true} path={ROUTEMAP.HOME} component={Load(Dashboard)} />
        <Route component={Load(NotFound)} />
      </Switch>
    </React.Fragment>
  );
};

export default PrivateRoutes;
