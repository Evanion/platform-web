import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ROUTEMAP from '../Utils/ROUTEMAP';
import PrivateRoutes from './Routes.private';
import Load from '../Utils/Load';

/**
 * Static Routes - these gets baked in to the base module
 */
/* --- route static --- */

/**
 * Lazy routes - these gets packaged in to their own modules
 */
const Register = React.lazy(() => import('./Register'));
const Login = React.lazy(() => import('./Login'));
const ForgotPassword = React.lazy(() => import('./ForgotPassword'));
/* --- route lazy --- */


const Routes = () => (
  <Switch>
    <Route path={ROUTEMAP.REGISTER} component={Load(Register)} />
    <Route path={ROUTEMAP.LOGIN} component={Load(Login)} />
    <Route path={ROUTEMAP.FORGOT_PASSWORD} component={Load(ForgotPassword)} />
    {/* --- routes --- */}

    <Route component={PrivateRoutes} />
  </Switch>
);

export default Routes;
