import React from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router-dom';
import './ForgotPassword.scss';
import ROUTEMAP from '../../Utils/ROUTEMAP';
import Request from './Routes/Request';
import Recover from './Routes/Recover';

const ForgotPassword = (props: RouteComponentProps) => (
  <div data-test="forgot-password-page" className={'forgot-password-page'}>
    <div>
      <Switch>
        <Route path={ROUTEMAP.RESET_PASSWORD} component={Recover} />
        <Route path={ROUTEMAP.FORGOT_PASSWORD} component={Request} />
      </Switch>
    </div>
    
  </div>
);

export default ForgotPassword;
